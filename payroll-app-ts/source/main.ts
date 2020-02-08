import { Developer } from './developer';
import { Hr } from './hr';

const anilDeveloper: Developer = new Developer(1, 'anil', 1000, 2000, 3000, 4000);
const sunilHr: Hr = new Hr(2, 'sunil', 2000, 3000, 4000, 5000);

const anilSalary: number = anilDeveloper.calculateSalary();
console.log('Salary of ' + anilDeveloper.name + ' is ' + anilSalary);
const sunilSalary = sunilHr.calculateSalary();
console.log(`Salary of ${sunilHr.name} is ${sunilSalary}`);


