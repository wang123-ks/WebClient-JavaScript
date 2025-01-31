import { extend } from '../../common/Util';
import { mapgis } from '../common/base';
import { Anchor } from './Enum';

/**
 * 符号样式
 * @class mapgis.style.SymbolStyle
 * @classdesc 符号样式
 * @param {String} [symbol = ""] 符号名称或url
 * @param {Number} [opacity = 1] 透明度，0~1之间的值，默认为1，不透明
 * @param {String} [color = #FFFFFF] 颜色，十六进制或RGB，默认为#FFFFFF，白色
 * @param {Number} [size = 1] 符号大小
 * @param {Number} [rotate = 0] 旋转角度，0~360度
 * @param {Number} [offsetX = 0] X轴偏移
 * @param {Number} [offsetY = 0] Y轴偏移
 * @param {String} [anchor = center] 锚点
 */
export default class Symbol {
    constructor(option) {
        var options = option ? option : {};
        const { symbol } = options;
        this.symbol = symbol || '';
        this.opacity = 1;
        this.color = '#FFFFFF';
        this.size = 1;
        this.rotate = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.anchor = Anchor.center;
        extend(this, options);
    }
}

export { Symbol };
mapgis.style.SymbolStyle = Symbol;
