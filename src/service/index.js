//-------命名空间 mapgis 开始-----
import * as Style from './base/style';
import * as Crs from './base/crs';
//-------命名空间 mapgis 结束-----

//-------命名空间 Zondy 开始-----
import * as Common from './common';
import BaseServer from './baseserver';
import { Extend, G3D, MRCS, MRFS, MRFWS, MRGS, MRMS, Info } from './Igserver';

import { WMSCapabilities, WMTSCapabilities, OGCWMTSInfo, OGCWMSInfo } from './OGC';
import { WMS, WFS } from './OpenGeospatialConsortium';

const OGC = {
    WMSCapabilities,
    WMTSCapabilities,
    OGCWMTSInfo,
    OGCWMSInfo,
    WMS,
    WFS
};

import ElasticSearch from './datastore/elasticsearch';
import PostGIS from './datastore/postgis';
import CloudDisk from './clouddisk';
import ArcGis from './ArcGis';

export {
    Style,
    Crs,
    Common,
    BaseServer,
    Extend,
    G3D,
    MRCS,
    MRFS,
    MRFWS,
    MRGS,
    MRMS,
    Info,
    OGC,
    ElasticSearch,
    PostGIS,
    CloudDisk,
    ArcGis
};
//-------命名空间 Zondy 结束-----

const All = {
    //-------命名空间 mapgis 开始-----
    Style,
    Crs,
    //-------命名空间 mapgis 结束-----
    //-------命名空间 Zondy 开始-----
    Common,
    BaseServer,
    // igserver
    Extend,
    G3D,
    MRCS,
    MRFS,
    MRFWS,
    MRGS,
    MRMS,
    Info,
    OGC,
    // datastore
    ElasticSearch,
    PostGIS,
    CloudDisk,
    ArcGis
    //-------命名空间 Zondy 结束-----
};

export default All;
