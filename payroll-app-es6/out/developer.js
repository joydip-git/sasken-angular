// var empModule = require('./employee');

//const { employee } = require('./employee');
// module.exports = {
//     developer
// };
"use strict";
var employee$$ = require("./employee");
class developer extends employee$$.employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra);
        this.incentivePay = incentive;
    }

    calculateSalary() {
        const partialPay = super.calculateSalary();
        return partialPay + this.incentivePay;
    }
}

exports.developer = developer;

//# sourceMappingURL=developer.js.map