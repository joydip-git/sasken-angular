define(["require", "exports", "./tv.model", "./mobile.model", "./productType.enum"], function (require, exports, tv_model_1, mobile_model_1, productType_enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createProduct(productType, id, name, make, price) {
        var extraArgs = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extraArgs[_i - 5] = arguments[_i];
        }
        var productObj = null;
        switch (productType) {
            case productType_enum_1.ProductType.TV:
                var lgTV = new tv_model_1.TV(id, name, make, price, extraArgs[0], extraArgs[1], extraArgs[2]);
                productObj = lgTV;
                break;
            case productType_enum_1.ProductType.Mobile:
                var motoMobile = new mobile_model_1.Mobile(id, name, make, price, extraArgs[0]);
                productObj = motoMobile;
                break;
            default:
                break;
        }
        return productObj;
    }
    var product = createProduct(productType_enum_1.ProductType.TV, 1, 'LG UHD', 'LG', 50000, true, 50, 6);
    console.log(product.printInfo());
});
// function splitSentence(sentence: string,...splitters:any[]) {
//     //code
// }
// splitSentence('I am a angular trainer. I am at Sasken',
// ' ', '.');
