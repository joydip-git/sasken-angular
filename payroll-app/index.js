// const empModule = require('./employee');
// console.log(empModule);

//Object destructuring (ES6/ES2015)
const { developer } = require('./developer');

// const anilObject = new empModule.employee(1, 'anil', 1000, 2000, 3000);
const anilObject = new developer(1, 'anil', 1000, 2000, 3000, 4000);

const salary = anilObject.calculateSalary();
//console.log(anilObject.location);
console.log(salary);
console.log(anilObject.hasOwnProperty('location'));
console.log(anilObject.hasOwnProperty('basicPayment'));
console.log(anilObject.__proto__.hasOwnProperty('location'));