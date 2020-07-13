export const Headers = [
  {
    title: "首页",
    icon: "iconhome",
    menus: [
      {
        title: "概述",
        links: [
          [
            "核心服务",
            "详细服务",
            "插件列表",
            "调用方式",
            "四大引擎选择",
            "下载",
          ],
          ["详细图表", "插件标签", "提交bug", "其他"],
        ],
        routes: [
          [
            "/total/core",
            "/total/detail",
            "/total/plugins",
            "/total/use",
            "/total/select",
            "/total/download",
          ],
          [
            "/total/detailChart",
            "/total/pluginTags",
            "/total/bugCommit",
            "/total/other",
          ],
        ],
      },
    ],
  },
  {
    title: "Cesium",
    icon: "iconsatellite",
    menus: [
      {
        title: "开发示例",
        links: [
          [
            "图层M3D",
            "互联网地图",
            "OGC服务",
            "MapGIS地图服务",
            "场景" /* "IGServer-X", "IGServer-S" */,
          ],
          ["三维空间分析", "轨迹模拟", "图形绘制", "工具", "查询"],
          [
            "客户端可视化",
            "客户端-Echarts",
            "客户端-MapV",
            "客户端空间分析",
            "国际化",
          ],
        ],
        routes: [
          [
            "/gallery/cesium#m3d",
            "/gallery/cesium#third",
            "/gallery/cesium#ogc",
            "/gallery/cesium#dem",
            "/gallery/cesium#scene",
          ],
          [
            "/gallery/cesium#analysis",
            "/gallery/cesium#track",
            "/gallery/cesium#drawGraphic",
            "/gallery/cesium#measure",
            "/gallery/cesium#query",
          ],
          [
            "/gallery/cesium#clientView-heatmap",
            "/gallery/cesium#clientView_Echarts",
            "/gallery/cesium#clientView_MapV",
            "/gallery/cesium#clientAnalysis",
            "/gallery/cesium#globe",
          ],
        ],
      },
      {
        title: "开发API",
        links: [["向导"], ["客户端可视化", "客户端渲染"], ["Cesium", "TurfJs"]],
        routes: [
          ["./docs/cesium/index.html"],
          [
            "/docs/cesium/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
            "/docs/cesium/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E6%25B8%25B2%25E6%259F%2593.html",
          ],
          ["https://cesium.com/docs/cesiumjs-ref-doc/", "http://turfjs.org/"],
        ],
      },
    ],
  },
  {
    title: "MapboxGL",
    icon: "iconmapbox",
    menus: [
      {
        title: "开发示例",
        links: [
          ["互联网地图", "OGC服务"],
          ["地图", "要素", "量算", "专题图", "空间分析"],
          ["客户端可视化", "客户端空间分析", "ElasticSearch"],
        ],
        routes: [
          ["/gallery/mapboxgl#internet", "/gallery/mapboxgl#ogc"],
          [
            "/gallery/mapboxgl#mapgis-igserver#map",
            "/gallery/mapboxgl#mapgis-igserver#feature",
            "/gallery/mapboxgl#mapgis-igserver#calc",
            "/gallery/mapboxgl#mapgis-igserver#theme",
            "/gallery/mapboxgl#mapgis-igserver#analysis",
          ],
          [
            "/gallery/mapboxgl#client-view#vectortile",
            "/gallery/mapboxgl#client-analysis",
            "/gallery/mapboxgl#elasticsearch",
          ],
        ],
      },
      {
        title: "开发API",
        links: [
          ["地图服务", "OGC服务"],
          ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
          ["客户端可视化"],
        ],
        routes: [
          [
            "./docs/mapboxgl/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/mapboxgl/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/mapboxgl/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/mapboxgl/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/mapboxgl/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/mapboxgl/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/mapboxgl/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/mapboxgl/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
          ],
        ],
      },
    ],
  },
  {
    title: "Leaflet",
    icon: "iconLeaf",
    menus: [
      {
        title: "开发示例",
        links: [
          ["互联网地图", "OGC服务"],
          ["地图", "要素", "量算", "专题图", "空间分析"],
          ["客户端可视化", "客户端空间分析", "ElasticSearch"],
        ],
        routes: [
          ["/gallery/leaflet#internet", "/gallery/leaflet#ogc"],
          [
            "/gallery/leaflet#mapgis-igserver#map",
            "/gallery/leaflet#mapgis-igserver#feature",
            "/gallery/leaflet#mapgis-igserver#calc",
            "/gallery/leaflet#mapgis-igserver#theme",
            "/gallery/leaflet#mapgis-igserver#analysis",
          ],
          [
            "/gallery/leaflet#client-view#vectortile",
            "/gallery/leaflet#client-analysis",
            "/gallery/leaflet#elasticsearch",
          ],
        ],
      },
      {
        title: "开发API",
        links: [
          ["地图服务", "OGC服务"],
          ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
          ["客户端可视化"],
        ],
        routes: [
          [
            "./docs/leaflet/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/leaflet/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/leaflet/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/leaflet/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/leaflet/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/leaflet/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/leaflet/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/leaflet/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
          ],
        ],
      },
    ],
  },
  {
    title: "Openlayers",
    icon: "iconlayers",
    menus: [
      {
        title: "开发示例",
        links: [
          ["互联网地图", "OGC服务"],
          ["地图", "要素", "量算", "专题图", "空间分析"],
          ["客户端可视化", "客户端空间分析"],
        ],
        routes: [
          ["/gallery/openlayers#internet", "/gallery/openlayers#ogc"],
          [
            "/gallery/openlayers#mapgis-igserver#map",
            "/gallery/openlayers#mapgis-igserver#feature",
            "/gallery/openlayers#mapgis-igserver#calc",
            "/gallery/openlayers#mapgis-igserver#theme",
            "/gallery/openlayers#mapgis-igserver#analysis",
          ],
          [
            "/gallery/openlayers#client-view#theme",
            "/gallery/openlayers#client-analysis",
            "/gallery/openlayers#elasticsearch",
          ],
        ],
      },
      {
        title: "开发API",
        links: [
          ["地图服务", "OGC服务"],
          ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
          ["客户端可视化"],
        ],
        routes: [
          [
            "./docs/openlayers/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/openlayers/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/openlayers/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/openlayers/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/openlayers/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/openlayers/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
            "./docs/openlayers/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
          ],
          [
            "./docs/openlayers/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
          ],
        ],
      },
    ],
  },
];

export const SubHeader = [
  {
    title: "开发指南",
    active: 'Cesium',
    menus: [
      {
        title: "Cesium",
        menus: [
          {
            title: "开发文档",
            links: [["产品简介", "环境配置", "服务配置", "快速入门"]],
            routes: [["sdkinfo", "skdeve", "sdkservice", "sdkquiker"]],
          },
          {
            title: "开发示例",
            links: [
              [
                "图层M3D",
                "互联网地图",
                "OGC服务",
                "MapGIS地图服务",
                "场景" /* "IGServer-X", "IGServer-S" */,
              ],
              ["三维控件分析", "轨迹模拟", "图形绘制", "工具", "查询"],
              [
                "客户端可视化",
                "客户端-Echarts",
                "客户端-MapV",
                "客户端空间分析",
                "国际化",
              ],
            ],
            routes: [
              [
                "/gallery/cesium#m3d/m3d-assise",
                "/gallery/cesium#internet#baidu",
                "/gallery/cesium#ogc#wms",
                "/gallery/cesium#dem#raster250",
                "/gallery/cesium#scene#scene-sceneOut",
              ],
              [
                "/gallery/cesium#analysis#analysis-cube",
                "/gallery/cesium#m3d#track#track-flow",
                "/gallery/cesium#m3d#drawGraphic-picture",
                "/gallery/cesium#m3d#measure#measure-length",
                "/gallery/cesium#m3d#query#query-m3dquery",
              ],
              [
                "/gallery/cesium#clientView#clientView-heatmap",
                "/gallery/cesium#clientView_Echarts#echarts-weibo",
                "/gallery/cesium#clientView_MapV#mapv-path_converge",
                "/gallery/cesium#clientAnalysis#clientAnalysis-buffer",
                "/gallery/cesium#globe#chicago",
              ],
            ],
          },
          {
            title: "开发API",
            links: [
              ["IGServer", "IGServer-X", "IGServer-S"],
              ["客户端可视化", "客户端空间分析", "ElasticSearch"],
              ["开源Cesium-API"],
            ],
            routes: [
              ["./docs/cesium/index.html", "igserverx", "igservers"],
              ["clientview", "http://turfjs.org/", "elasticsearch"],
              ["https://cesium.com/docs/cesiumjs-ref-doc/"],
            ],
          },
        ],
      },
      {
        title: "MapboxGL",
        menus: [
          {
            title: "开发文档",
            links: [["产品简介", "环境配置", "服务配置", "快速入门"]],
            routes: [["sdkinfo", "skdeve", "sdkservice", "sdkquiker"]],
          },
          {
            title: "开发示例",
            links: [
              ["互联网地图", "OGC服务"],
              ["地图", "要素", "量算", "专题图", "空间分析"],
              ["客户端可视化", "客户端空间分析", "ElasticSearch"],
            ],
            routes: [
              ["/gallery/mapboxgl#internet", "/gallery/mapboxgl#ogc"],
              [
                "/gallery/mapboxgl#map",
                "/gallery/mapboxgl#feature",
                "/gallery/mapboxgl#calc",
                "/gallery/mapboxgl#theme",
                "/gallery/mapboxgl#analysis",
              ],
              [
                "/gallery/mapboxgl#vectortile",
                "/gallery/mapboxgl#client-analysis",
                "/gallery/mapboxgl#elasticsearch",
              ],
            ],
          },
          {
            title: "开发API",
            links: [
              ["地图服务", "OGC服务"],
              ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
              ["客户端可视化"],
            ],
            routes: [
              [
                "./docs/mapboxgl/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/mapboxgl/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/mapboxgl/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/mapboxgl/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/mapboxgl/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/mapboxgl/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/mapboxgl/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/mapboxgl/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
              ],
            ],
          },
        ],
      },
      {
        title: "Leaflet",
        menus: [
          {
            title: "开发文档",
            links: [["产品简介", "环境配置", "服务配置", "快速入门"]],
            routes: [["sdkinfo", "skdeve", "sdkservice", "sdkquiker"]],
          },
          {
            title: "开发示例",
            links: [
              ["互联网地图", "OGC服务"],
              ["地图", "要素", "量算", "专题图", "空间分析"],
              ["客户端可视化", "客户端空间分析", "ElasticSearch"],
            ],
            routes: [
              ["/gallery/leaflet#internet", "/gallery/leaflet#ogc"],
              [
                "/gallery/leaflet#map",
                "/gallery/leaflet#feature",
                "/gallery/leaflet#calc",
                "/gallery/leaflet#theme",
                "/gallery/leaflet#analysis",
              ],
              [
                "/gallery/leaflet#client-view#common",
                "/gallery/leaflet#client-analysis",
                "/gallery/leaflet#elasticsearch",
              ],
            ],
          },
          {
            title: "开发API",
            links: [
              ["地图服务", "OGC服务"],
              ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
              ["客户端可视化"],
            ],
            routes: [
              [
                "./docs/leaflet/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/leaflet/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/leaflet/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/leaflet/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/leaflet/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/leaflet/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/leaflet/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/leaflet/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
              ],
            ],
          },
        ],
      },
      {
        title: "Openlayers",
        menus: [
          {
            title: "开发文档",
            links: [["产品简介", "环境配置", "服务配置", "快速入门"]],
            routes: [["sdkinfo", "skdeve", "sdkservice", "sdkquiker"]],
          },
          {
            title: "开发示例",
            links: [
              ["互联网地图", "OGC服务"],
              ["地图", "要素", "量算", "专题图", "空间分析"],
              ["客户端可视化", "客户端空间分析"],
            ],
            routes: [
              ["/gallery/openlayers#internet", "/gallery/openlayers#ogc"],
              [
                "/gallery/openlayers#map",
                "/gallery/openlayers#feature",
                "/gallery/openlayers#calc",
                "/gallery/openlayers#theme",
                "/gallery/openlayers#analysis",
              ],
              [
                "/gallery/openlayers#client-view#theme",
                "/gallery/openlayers#client-analysis",
                "/gallery/openlayers#elasticsearch",
              ],
            ],
          },
          {
            title: "开发API",
            links: [
              ["地图服务", "OGC服务"],
              ["目录服务", "要素服务", "量算服务", "专题图服务", "分析服务"],
              ["客户端可视化"],
            ],
            routes: [
              [
                "./docs/openlayers/module-%25E5%259C%25B0%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/openlayers/module-OGC%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/openlayers/module-%25E7%259B%25AE%25E5%25BD%2595%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/openlayers/module-%25E8%25A6%2581%25E7%25B4%25A0%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/openlayers/module-%25E9%2587%258F%25E7%25AE%2597%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/openlayers/module-%25E4%25B8%2593%25E9%25A2%2598%25E5%259B%25BE%25E6%259C%258D%25E5%258A%25A1.html",
                "./docs/openlayers/module-%25E5%2588%2586%25E6%259E%2590%25E6%259C%258D%25E5%258A%25A1.html",
              ],
              [
                "./docs/openlayers/module-%25E5%25AE%25A2%25E6%2588%25B7%25E7%25AB%25AF%25E5%258F%25AF%25E8%25A7%2586%25E5%258C%2596.html",
              ],
            ],
          },
        ],
      },
    ],
  },
];

export const MobileHeaders = [];
export const MobileHeadersOrigin = [
  {
    title: "首页",
    menus: [
      {
        title: "概述",
        links: [["详细服务", "插件列表", "调用方式", "四大引擎选择", "下载"]],
        routes: [
          [
            "/total/detail",
            "/total/plugins",
            "/total/use",
            "/total/select",
            "/total/download",
          ],
        ],
      },
      {
        title: "协议",
        links: [["epsg", "ogc", "geojson", "socket"]],
        routes: [
          [
            "/standard/epsg",
            "/standard/ogc",
            "/standard/geojson",
            "/standard/socket",
          ],
        ],
      },
    ],
  },
];

export const MobileSubHeader = [
  {
    title: "首页",
    active: '功能',
    menus: [
      {
        title: "功能",
        menus: [
          {
            title: "概述",
            links: [
              ["核心服务", "详细服务", "调用方式", "四大引擎选择", "下载"],
            ],
            routes: [
              [
                "/total/core",
                "/total/detail",
                "/total/use",
                "/total/select",
                "/total/download",
              ],
            ],
          },
        ],
      },
      {
        title: "插件",
        menus: [
          {
            title: "插件详情",
            links: [["插件列表", "详细图表", "插件标签", "提交bug", "其他"]],
            routes: [
              [
                "/total/plugins",
                "/total/detailChart",
                "/total/pluginTags",
                "/total/bugCommit",
                "/total/other",
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    title: "开发指南",
    active: "Cesium",
    menus: [
      {
        title: "Cesium",
        menus: [
          {
            title: "常用链接",
            links: [["演示示例", "API文档"]],
            routes: [["/gallery/cesium", "./docs/cesium/index.html"]],
          },
        ],
      },
      {
        title: "MapboxGL",
        menus: [
          {
            title: "常用链接",
            links: [["演示示例", "API文档"]],
            routes: [["/gallery/mapboxgl", "./docs/mapboxgl/index.html"]],
          },
        ],
      },
      {
        title: "OpenLayers",
        menus: [
          {
            title: "常用链接",
            links: [["演示示例", "API文档"]],
            routes: [["/gallery/openlayers", "./docs/openlayers/index.html"]],
          },
        ],
      },
      {
        title: "Leaflet",
        menus: [
          {
            title: "常用链接",
            links: [["演示示例", "API文档"]],
            routes: [["/gallery/leaflet", "./docs/leaflet/index.html"]],
          },
        ],
      },
    ],
  },
];

export default Headers;
