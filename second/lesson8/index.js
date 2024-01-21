"use strict";
//!Inheitance , interface
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Hi my name is ${this._name}`;
    }
}
const Jasurbek = new Person("Jasurbek", 20);
console.log(Jasurbek.sayHello());
class Studens extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._course = course;
        this._group = group;
    }
}
const laziz = new Studens("Laziz", 21, "AT_3", 3);
console.log(laziz.sayHello());
const newLaziz = laziz;
const newLaziz1 = laziz;
console.log(newLaziz.sayHello());
console.log(newLaziz1.sayHello());
class Teacher extends Person {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
    sayHello() {
        const parentMethod = super.sayHello();
        return `${parentMethod}, ${this.disciplines}`;
    }
}
const abror = new Teacher("dvd", 50, ["jasubek", "Otelbayev"]);
console.log(abror.sayHello());
