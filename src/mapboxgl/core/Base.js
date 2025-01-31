/**
 * WebClient mapboxgl基类
 * 定义命名空间
 */
import mapboxgl from '@mapgis/mapbox-gl';

window.mapboxgl = mapboxgl;
mapboxgl.zondy = window.mapboxgl.zondy || {};

var Zondy = window.mapboxgl.zondy || {};
Zondy.Map = Zondy.Map || {};
Zondy.Util = Zondy.Util || {};
Zondy.Network = Zondy.Network || {};
Zondy.Event = Zondy.Event || {};
Zondy.Socket = Zondy.Socket || {};

export { Zondy };
export { mapboxgl };
