"use strict";

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

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();
*/
// Coding Challenge #2 -------------------

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
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
/*
const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
*/

// Coding Challenge #3 ----------
/*
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    chargeTo = this.charge;
    console.log(chargeTo);
};

EV.prototype.accelerate = function (speed, charge) {
    speed = this.speed * 0.02;
    charge = this.charge * 0.01;

    console.log(
        `${this.make} going at ${this.speed + speed}km/h, with a charge of ${
            this.charge - charge
        }%`
    );
};

const tesla = new EV("Tesla", 120, 90);

tesla.chargeBattery();
tesla.accelerate();
tesla.brake();
console.log(tesla);
*/

// Coding Challenge #4 ----------

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        const speed = this.speed * 0.02;
        const charge = this.#charge * 0.01;

        console.log(
            `${this.make} going at ${
                this.speed + speed
            }km/h, with a charge of ${this.#charge}%`
        );
        return this;
    }
}

const tesla = new EVCl("Tesla", 120, 40);

// console.log(tesla);
// tesla.accelerate();
// tesla.chargeBattery();
tesla.accelerate().chargeBattery(60).brake().accelerate();
// console.log(tesla.#charge);
