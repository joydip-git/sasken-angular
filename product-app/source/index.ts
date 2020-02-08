function subtractFn(x: number, y: number) {
    return (x - y);
}
var addFn = function (x: number, y: number) {
    return (x + y);
}
const multiFn = (a: number, b: number) => {
    let res = a * b;
    return res;
};
const divFn = (a: number, b: number) => a > b ? a / b : b / a;

function invokeOprtaion(
    operation: (x: number, y: number) => number,
    arg1: number, arg2: number) {

    let result = operation(arg1, arg2);
    console.log(result);
}
invokeOprtaion(addFn, 12, 13);

function invokeOprtaion1(
    operation: (...args: number[]) => number,
    ...opArgs: number[]) {

    let result = operation(...opArgs);
    console.log(result);
}