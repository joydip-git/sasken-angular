// var empModule = require('./employee');

// function hr(id, name, basic, da, hra, gratuity) {

//     empModule.employee.call(this, name, id, basic, da, hra);

//     this.gratuityPay = gratuity;
//     this.calculateSalary = function () {
//         // var partialPay = empModule.employee.prototype.calculateSalary.apply(this);
//         var partialPay = this.__proto__.calculateSalary.apply(this);
//         return partialPay + this.gratuityPay;
//     }
// }

// Object.setPrototypeOf(hr.prototype, empModule.employee.prototype);

import { employee } from './employee';
export class hr extends employee {
    constructor(id, name, basic, da, hra, gratuity) {
        super(id, name, basic, da, hra);
        this.gratuityPay = gratuity;
    }
    calculateSalary() {
        const partialPay = super.calculateSalary();
        return this.gratuityPay + partialPay;
    }
}

// module.exports = {
//     hr
// };