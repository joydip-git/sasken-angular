var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./product"], function (require, exports, product_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TV = /** @class */ (function (_super) {
        __extends(TV, _super);
        function TV(_id, _modelName, _make, _price, _isHD, _size, _portCount) {
            var _this = _super.call(this, _id, _modelName, _make, _price) || this;
            _this._isHD = _isHD;
            _this._size = _size;
            _this._portCount = _portCount;
            return _this;
        }
        TV.prototype.printInfo = function () {
            return _super.prototype.printInfo.call(this) + ". This is a " + (this._isHD ? 'HD' : 'SD') + " TV of width " + this._size + " inch and with " + this._portCount + " ports";
        };
        return TV;
    }(product_1.Product));
    exports.TV = TV;
});
