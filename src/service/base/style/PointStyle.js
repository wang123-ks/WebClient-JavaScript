import { extend } from '../../common/Util';
import { mapgis } from '../common/base';
import { VectorStyle } from './VectorStyle';
import { Anchor } from './Enum';

/**
 * 点样式
 * @class mapgis.style.PointStyle
 * @classdesc 点样式
 * @param {Number} [radius = 1] 半径
 * @param {Number} [outlineWidth = 0] 外边线宽度，默认0，没有外边线
 * @param {String} [outlineColor = #FFFFFF] 外边线颜色，16进制颜色或rgb值或rgba值，默认#FFFFFF，白色
 * @param {String} [anchor = center] 锚点，默center
 */
export default class PointStyle extends VectorStyle {
    constructor(option) {
        super();
        var options = option ? option : {};
        const { radius = 5, outlineColor = '#FFFFFF', outlineWidth = 0, anchor = Anchor.center } = options;
        this.type = 'point';
        this.radius = radius;
        this.outlineColor = outlineColor;
        this.outlineWidth = outlineWidth;
        this.anchor = anchor;
        extend(this, options);
    }

    /**
     * @param  {Boolean} [highlight = false] 是否激活高亮样式
     * @link https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#circle
     * @returns MapboxGL点格式的样式
     */
    toMapboxStyle(options) {
        options = options || {};
        const { highlight = false } = options;
        const { color, opacity, radius, outlineColor, outlineWidth } = this;
        let style = {
            filter: ['==', '$type', 'Point'],
            paint: {
                'circle-radius': radius,
                'circle-color': color,
                'circle-opacity': opacity,
                'circle-stroke-width': outlineWidth,
                'circle-stroke-color': outlineColor
            }
        };
        if (highlight) {
            style.paint['circle-color'] = ['case', ['boolean', ['feature-state', 'hover'], false], color, 'rgba(0, 0, 0, 0)'];
            style.paint['circle-stroke-width'] = ['case', ['boolean', ['feature-state', 'hover'], false], outlineWidth, 0];
        }
        return style;
    }

    /**
     * @link https://sandcastle.cesium.com/index.html?src=Circles%20and%20Ellipses.html&label=Geometries
     * @returns Cesium点格式的样式
     */
    toCesiumStyle(Cesium) {
        let material;
        let outline = false;
        let { color, opacity, radius, outlineColor, outlineWidth } = this;
        if (outlineWidth > 0) {
            outline = true;
        }
        material = new Cesium.ColorMaterialProperty(Cesium.Color.fromCssColorString(color).withAlpha(opacity));

        return { material, radius, outline, outlineColor, outlineWidth };
    }
}

export { PointStyle };
mapgis.style.PointStyle = PointStyle;
