// var devModule = require('./developer');
// var hrModule = require('./hr');

import { developer } from './developer';
import { hr } from './hr';

var obj =
    new developer(1, 'anil', 1000, 2000, 3000, 4000);
console.log(obj.calculateSalary());

var hrObj = new hr(2, 'sunil', 2000, 3000, 4000, 5000);
console.log(hrObj.calculateSalary());