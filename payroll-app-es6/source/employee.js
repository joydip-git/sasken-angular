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

export class employee {
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

// module.exports = {
//     employee
// };