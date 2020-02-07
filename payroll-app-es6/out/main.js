// var devModule = require('./developer');
// var hrModule = require('./hr');

"use strict";
var developer$$ = require("./developer"), hr$$ = require("./hr");

var obj =
    new developer$$.developer(1, 'anil', 1000, 2000, 3000, 4000);
console.log(obj.calculateSalary());

var hrObj = new hr$$.hr(2, 'sunil', 2000, 3000, 4000, 5000);
console.log(hrObj.calculateSalary());

//# sourceMappingURL=main.js.map