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
    var Developer = /** @class */ (function (_super) {
        __extends(Developer, _super);
        function Developer(id, name, basic, da, hra, _incentivePayment) {
            var _this = _super.call(this, id, name, basic, da, hra) || this;
            _this._incentivePayment = _incentivePayment;
            return _this;
        }
        Object.defineProperty(Developer.prototype, "incentivePayment", {
            get: function () {
                return this._incentivePayment;
            },
            set: function (value) {
                this._incentivePayment = value;
            },
            enumerable: true,
            configurable: true
        });
        Developer.prototype.calculateSalary = function () {
            return _super.prototype.calculateSalary.call(this) + this._incentivePayment;
        };
        return Developer;
    }(employee_1.Employee));
    exports.Developer = Developer;
});
