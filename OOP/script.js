"use strict";

// 209. ----------

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

// 210. ----------

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

// Coding Challenge #1

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
