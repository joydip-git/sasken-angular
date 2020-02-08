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
    var Mobile = /** @class */ (function (_super) {
        __extends(Mobile, _super);
        function Mobile(_id, _modelName, _make, _price, _cameraName) {
            var _this = _super.call(this, _id, _modelName, _make, _price) || this;
            _this._cameraName = _cameraName;
            return _this;
        }
        Object.defineProperty(Mobile.prototype, "cameraName", {
            get: function () {
                return this._cameraName;
            },
            set: function (value) {
                this._cameraName = value;
            },
            enumerable: true,
            configurable: true
        });
        Mobile.prototype.printInfo = function () {
            return _super.prototype.printInfo.call(this) + ". This Mobile has " + this._cameraName + " camera";
        };
        return Mobile;
    }(product_model_1.Product));
    exports.Mobile = Mobile;
});
