define(["require", "exports", "./developer", "./hr"], function (require, exports, developer_1, hr_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var anilDeveloper = new developer_1.Developer(1, 'anil', 1000, 2000, 3000, 4000);
    var sunilHr = new hr_1.Hr(2, 'sunil', 2000, 3000, 4000, 5000);
    var anilSalary = anilDeveloper.calculateSalary();
    console.log('Salary of ' + anilDeveloper.name + ' is ' + anilSalary);
    var sunilSalary = sunilHr.calculateSalary();
    console.log("Salary of " + sunilHr.name + " is " + sunilSalary);
});
