/**
 * @function mapboxgl.Zondy.MapExtend
 * @description  扩展了 mapboxgl.Map 对图层相关的操作。
 * @private
 */
export var MapExtend = function () {

	window.mapboxgl.Map.prototype.overlayLayersManager = {};
	window.mapboxgl.Map.prototype.addLayerBak = window.mapboxgl.Map.prototype.addLayer;
	window.mapboxgl.Map.prototype.addLayer = function (layer, before) {
		if (layer.source || layer.type === 'custom' || layer.type === "background") {
			this.addLayerBak(layer, before);
			return this;
		}
		if (this.overlayLayersManager[layer.id] || this.style._layers[layer.id]) {
			this.fire('error', {
				error: new Error('A layer with this id already exists.')
			});
			return;
		}
		addLayer(layer, this);
		this.overlayLayersManager[layer.id] = layer;
		return this;
	};
	window.mapboxgl.Map.prototype.getLayer = function (id) {
		if (this.overlayLayersManager[id]) {
			return this.overlayLayersManager[id];
		}
		return this.style.getLayer(id);
	};

	window.mapboxgl.Map.prototype.moveLayer = function (id, beforeId) {
		if (this.overlayLayersManager[id]) {
			moveLayer(id, beforeId);
			return this;
		}
		if (this.style._layers[id]) {
			this.style.moveLayer(id, beforeId);
			this._update(true);
			return this;
		}
	};

	window.mapboxgl.Map.prototype.removeLayer = function (id) {
		if (this.overlayLayersManager[id]) {
			removeLayer(this.overlayLayersManager[id]);
			delete this.overlayLayersManager[id];
			return this;
		}
		this.style.removeLayer(id);
		this._update(true);
		return this;
	};

	//目前扩展的overlayer，只支持显示或隐藏图层操作
	window.mapboxgl.Map.prototype.setLayoutProperty = function (layerID, name, value) {
		if (this.overlayLayersManager[layerID]) {
			if (name === "visibility") {
				if (value === "visible") {
					value = true;
				} else {
					value = false;
				}
				setVisibility(this.overlayLayersManager[layerID], value);
				this.style.fire('data', {dataType: 'style'});
			}
			return this;
		}
		this.style.setLayoutProperty(layerID, name, value);
		this._update(true);
		return this;
	};
	window.mapboxgl.Map.prototype.updateTransform = function (units, originX, originY, centerX, centerY, width, height) {
		this.transform.units = units;
		this.transform.latRange = [this._tileExtent[1], this._tileExtent[3]];
		this.transform.lngRange = [this._tileExtent[0], this._tileExtent[2]];
		var mercatorZfromAltitude = this.mercatorZfromAltitude;
		window.mapboxgl.MercatorCoordinate.fromLngLat = function (lngLatLike, altitude) {
			altitude = altitude || 0;
			const lngLat = window.mapboxgl.LngLat.convert(lngLatLike);
			return new window.mapboxgl.MercatorCoordinate(
				(lngLat.lng - originX) / width,
				(originY - lngLat.lat) / height,
				mercatorZfromAltitude(altitude, lngLat.lat));
		};
		window.mapboxgl.MercatorCoordinate.prototype.toLngLat = function () {
			return new window.mapboxgl.LngLat(
				this.x * width + originX,
				originY - this.y * height);
		};
		this.customConvertPoint = window.URL.createObjectURL(new Blob(['customConvertPoint = {projectX:function(x){return (x - ' + centerX + ') / ' + width + ' + 0.5},projectY:function(y){y = 0.5 - ((y - ' + centerY + ') / ' + height + ');return y < 0 ? 0 : y > 1 ? 1 : y;},toY:function(y){return (0.5-y)*' + height + '+' + centerY + ';}}'],{type:"text/javascript"}));
	}


	function addLayer(layer, map) {
		layer.onAdd && layer.onAdd(map);
	}

	/**
	 * @function mapboxgl.Zondy.MapExtend.prototype.removeFromMap
	 * @description  移除事件。
	 */
	function removeLayer(layer) {
		layer.removeFromMap && layer.removeFromMap();
	}

	/**
	 * @function mapboxgl.Zondy.MapExtend.prototype.setVisibility
	 * @description  设置图层可见性，设置图层的隐藏，显示，重绘的相应的可见标记。
	 * @param {boolean} [visibility] - 是否显示图层（当前地图的 resolution 在最大最小 resolution 之间）。
	 */
	function setVisibility(layer, visibility) {
		layer.setVisibility && layer.setVisibility(visibility);
	}

	/**
	 * @function mapboxgl.Zondy.MapExtend.prototype.moveTo
	 * @description 将图层移动到某个图层之前。
	 * @param {string} layerID -待插入的图层 ID。
	 * @param {boolean} [beforeLayerID] - 是否将本图层插入到图层 id 为 layerID 的图层之前(如果为 false 则将本图层插入到图层 id 为 layerID 的图层之后)。
	 */
	function moveLayer(layerID, beforeLayerID) {
		var layer = document.getElementById(layerID);
		// var beforeLayer;
		if (beforeLayerID) {
			var beforeLayer = document.getElementById(beforeLayerID);
			if (!beforeLayer) {
				window.mapboxgl.Evented.prototype.fire("error", {
					error: new Error(`Layer with id "${beforeLayerID}" does not exist on this document.`)
				});
			}
		}
		if (layer && beforeLayer) {
			beforeLayer.parentNode.insertBefore(layer, beforeLayer);
		} else {
			//当没有传入beforeLayerID ，则默认将图层移动到最上面
			layer.parentNode.appendChild(layer);
		}
	}

}();
