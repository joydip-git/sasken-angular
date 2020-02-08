function subtractFn(x, y) {
    return (x - y);
}
var addFn = function (x, y) {
    return (x + y);
};
var multiFn = function (a, b) {
    var res = a * b;
    return res;
};
var divFn = function (a, b) { return a > b ? a / b : b / a; };
function invokeOprtaion(operation, arg1, arg2) {
    var result = operation(arg1, arg2);
    console.log(result);
}
invokeOprtaion(addFn, 12, 13);
function invokeOprtaion1(operation) {
    var opArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        opArgs[_i - 1] = arguments[_i];
    }
    var result = operation.apply(void 0, opArgs);
    console.log(result);
}
