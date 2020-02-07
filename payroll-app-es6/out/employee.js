// function employee(id, name, basic, da, hra) {
//     this.id = id;
//     this.name = name;
//     this.basicPay = basic;
//     this.daPay = da;
//     this.hraPay = hra;
// }

// employee.prototype.calculateSalary = function () {
//     return this.basicPay + this.daPay + this.hraPay;
// }

// module.exports = {
//     employee
// };
"use strict";
class employee {
    constructor(id, name, basic, da, hra) {
        this.id = id;
        this.name = name;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}

exports.employee = employee;

//# sourceMappingURL=employee.js.map