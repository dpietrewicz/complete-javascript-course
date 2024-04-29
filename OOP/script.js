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

// 219. Inheritance between classes - Constructor Funtions -------------
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Student.prototype is now an object that inherits from Person.prototype. Then Student.Prototype is empty (resets), so only after we can add methods, like introduce
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
const amber = new Student("Amber", 1999, "Cooking");
console.log();
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
// 221. Inheritance between classes - ES6 -------------
/*
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
}

class StudentCl extends PersonCl {
    // if no new properties needed then no constructor is needed.
    constructor(fullName, birthYear, course) {
        // Always needs to happen first - the super!
        super(fullName, birthYear, course);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I am ${
                2037 - this.birthYear
            } years old, but as a student I feel more like ${
                2037 - this.birthYear + 10
            }`
        );
    }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// const martha = new StudentCl("MArtha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
*/
// 222. Inheritance between classes - Object.create
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

const StudentProto = Object.create(PersonProto);

// Adding/Overwriting methods
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
*/

// 223. Another Class Example ---------------

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // protected property
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Puiblic interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    wirthdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.wirthdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

// 225.  Encapsulation ---------------
