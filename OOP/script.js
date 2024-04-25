"use strict";

// 209. ----------
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method inside of a construction function because later each created object will carry this method
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

// 1. Empty {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function auomatically return {}

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

// console.log(jonas, matilda, jack);
// console.log(jonas instanceof Person); // true
*/
// 210. ----------
/*
// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName")); // true
// console.log(jonas.hasOwnProperty("spieces")); // false

console.log(jonas.__proto__); //Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 7, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
*/
// Coding Challenge #1 ------------------
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    console.log((this.speed += 10));
};

Car.prototype.brake = function () {
    console.log((this.speed -= 5));
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car2.brake();
car2.brake();
car2.brake();
*/

// 214. ES6 Classes -------
/*
// class expression
// const PersonlCl = class {};

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet = function () {
        console.log(`Hey ${this.firstName}`);
        console.log(this);
    };

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    // if this kind of "set" is created, then "get" is needed
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // 216. Static methods
    // Static method
    static hey() {
        console.log("Hey there 👋");
        console.log(this);
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// Proof that the class hides the true nature of prototypal inheritance in JS
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl("Walter Moore", 1965);

PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode
*/
// 215. Setter and Getters ------
/*
const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
// 217. Object.create --------
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/
// Coding Challenge #2
/*
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
*/
