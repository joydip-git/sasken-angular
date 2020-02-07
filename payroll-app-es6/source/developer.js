// var empModule = require('./employee');

//const { employee } = require('./employee');
import { employee } from './employee';

// function developer(id, name, basic, da, hra, incentive) {

//     empModule.employee.call(this, id, name, basic, da, hra);

//     this.incentivePay = incentive;
//     this.calculateSalary = function () {
//         // var partialPay = empModule.employee.prototype.calculateSalary.apply(this);
//         var partialPay = this.__proto__.calculateSalary.apply(this);
//         return partialPay + this.incentivePay;
//     }
// }

// Object.setPrototypeOf(developer.prototype, empModule.employee.prototype);

export class developer extends employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra);
        this.incentivePay = incentive;
    }

    calculateSalary() {
        const partialPay = super.calculateSalary();
        return partialPay + this.incentivePay;
    }
}

// module.exports = {
//     developer
// };