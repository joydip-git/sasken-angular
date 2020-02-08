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
define(["require", "exports", "./product.model"], function (require, exports, product_model_1) {
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
        Object.defineProperty(TV.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TV.prototype, "portCount", {
            get: function () {
                return this._portCount;
            },
            set: function (value) {
                this._portCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TV.prototype, "isHD", {
            get: function () {
                return this._isHD;
            },
            set: function (value) {
                this._isHD = value;
            },
            enumerable: true,
            configurable: true
        });
        TV.prototype.printInfo = function () {
            return _super.prototype.printInfo.call(this) + ". This is a " + (this._isHD ? 'HD' : 'SD') + " TV of width " + this._size + " inch and with " + this._portCount + " ports";
        };
        return TV;
    }(product_model_1.Product));
    exports.TV = TV;
});
