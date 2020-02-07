const { employee } = require('./employee');

function developer(id, name, basic, da, hra, incentive) {
    //value attributes
    employee.call(this, id, name, basic, da, hra);
    this.incentivePayment = incentive;
    //functional attributes
    this.calculateSalary = function () {
        // return this.basicPayment + this.daPayment + this.hraPayment + this.incentivePayment;
        // const partialSalary = employee.prototype.calculateSalary.apply(this);
        const partialSalary = this.__proto__.calculateSalary.apply(this);
        return partialSalary + this.incentivePayment;
    }
}

Object.setPrototypeOf(developer.prototype, employee.prototype);
//developer.prototype.location = 'bangalore';

module.exports = {
    developer
};