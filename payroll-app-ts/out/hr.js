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
define(["require", "exports", "./employee"], function (require, exports, employee_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hr = /** @class */ (function (_super) {
        __extends(Hr, _super);
        function Hr(id, name, basic, da, hra, _gratuityPay) {
            var _this = _super.call(this, id, name, basic, da, hra) || this;
            _this._gratuityPay = _gratuityPay;
            return _this;
        }
        Object.defineProperty(Hr.prototype, "gratuityPay", {
            get: function () {
                return this._gratuityPay;
            },
            set: function (value) {
                this._gratuityPay = value;
            },
            enumerable: true,
            configurable: true
        });
        Hr.prototype.calculateSalary = function () {
            return _super.prototype.calculateSalary.call(this) + this._gratuityPay;
        };
        return Hr;
    }(employee_1.Employee));
    exports.Hr = Hr;
});
