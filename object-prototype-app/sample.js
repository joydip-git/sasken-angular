//object literal syntax
var anilObj = {
    //value attributes
    name: 'anil',
    salary: 3000,
    id: 1,
    //functional attribute
    print: function () {
        console.log(this.name + ' ' + this.id + ' ' + this.salary);
    }
};
anilObj.name = 'anila';
anilObj.location = 'bangalore';
anilObj.print();
console.log(anilObj.location);

//constructor function
function person(name, salary, id, location) {
    this.personName = name;
    this.personSalary = salary;
    this.personId = id;
    this.personLocation = location;
    this.print = function () {
        return this.personName;
    }
}

console.log(person.prototype);
var anil = new person('anil', 1000, 1, 'bangalore');
console.log(anil.__proto__);

console.log(person.prototype === anil.__proto__);

