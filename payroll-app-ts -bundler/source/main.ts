import { Developer } from './developer';
import { Hr } from './hr';

function printSalary() {
    const anilDeveloper: Developer = new Developer(1, 'anil', 1000, 2000, 3000, 4000);
    const sunilHr: Hr = new Hr(2, 'sunil', 2000, 3000, 4000, 5000);
    const anilSalary: number = anilDeveloper.calculateSalary();
    console.log('Salary of ' + anilDeveloper.name + ' is ' + anilSalary);
    const sunilSalary = sunilHr.calculateSalary();
    console.log(`Salary of ${sunilHr.name} is ${sunilSalary}`);
}

function add(x: number, y: number) {
    return (x + y);
}

printSalary();
console.log(add(12, 13));


