function employee(id, name, basic, da, hra) {
    //value attributes
    this.id = id;
    this.name = name;
    this.basicPayment = basic;
    this.daPayment = da;
    this.hraPayment = hra;
    //functional attributes
}
employee.prototype.calculateSalary = function () {
    return this.basicPayment + this.daPayment + this.hraPayment;
}
//const employees = [];

/*
const add = function (x, y) {
    return (x + y);
}
//console.log(anilObject.hasOwnProperty('toString'));

//console.log(module);
//console.log(module.exports);
// module.exports = {
//     employeeCtorFunc: employee,
//     employeesStore: employees
// }
// module.exports = {
//     employee: employee,
//     employees: employees
// }
// module.exports.employeeCtorFun = employee;
// module.exports.employeeStore = employees;
//module.exports.addFn = add;
*/

module.exports = {
    employee
}


//console.log(module);