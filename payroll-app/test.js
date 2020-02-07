//console.log(x);
let x = 10;
//console.log(x);
let y = 20;
let result = x + y;
console.log(result);

console.log(x);
for (let i = 0; i < 1; i++) {
    let x = 30;
    console.log(x);
}

console.log(x);

const numbers = [1, 2, 3, 4];
numbers.push(5);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//numbers = [3, 4];

const a = 10;
// a = 20;
console.log(a);

//object literal syntax
/*
let name = 'joydip';
const joydip = {
    firstName: name,
    location: 'bangalore',
    show: function () {
        return this.firstName + ' ' + this.location;
    }
};

//joydip.salary = 10000;
console.log(joydip);
const info = joydip.show();
console.log(info);
*/

//constructor function
function person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.show = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const joydip = new person('joydip', 'mondal');
// joydip.toString = function () { };

// console.log(joydip);
// console.log(joydip.__proto__);
// console.log(joydip.__proto__.__proto__);
// console.log(joydip.toString());
//console.log(joydip.show());

console.log(person.prototype);

const joy = {
    firstName: 'joydip'
};
console.log(joy);
console.log(joy.__proto__);