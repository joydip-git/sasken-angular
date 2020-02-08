define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Product = /** @class */ (function () {
        function Product(_id, _modelName, _make, _price) {
            this._id = _id;
            this._modelName = _modelName;
            this._make = _make;
            this._price = _price;
        }
        Object.defineProperty(Product.prototype, "price", {
            get: function () {
                return this._price;
            },
            set: function (value) {
                this._price = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "make", {
            get: function () {
                return this._make;
            },
            set: function (value) {
                this._make = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "modelName", {
            get: function () {
                return this._modelName;
            },
            set: function (value) {
                this._modelName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Product.prototype.printInfo = function () {
            return "Model Name: " + this._modelName + ", Made By: " + this._make + " , Price: " + this._price + " ";
        };
        return Product;
    }());
    exports.Product = Product;
});
