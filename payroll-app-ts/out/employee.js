define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Employee = /** @class */ (function () {
        function Employee(id, name, basic, da, hra) {
            this._id = id;
            this._name = name;
            this._basicPay = basic;
            this._daPay = da;
            this._hraPay = hra;
        }
        Object.defineProperty(Employee.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "basicPay", {
            get: function () {
                return this._basicPay;
            },
            set: function (value) {
                this._basicPay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "daPay", {
            get: function () {
                return this._daPay;
            },
            set: function (value) {
                this._daPay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "hraPay", {
            get: function () {
                return this._hraPay;
            },
            set: function (value) {
                this._hraPay = value;
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.calculateSalary = function () {
            return this._basicPay + this._daPay + this._hraPay;
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
