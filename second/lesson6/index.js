"use strict";
//!Classes
class Person {
    static desc() {
        return `bu class pesron`;
    }
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    info() {
        return `${this._name}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
Person.isFly = false;
const jasur = new Person("Jasurbek", 20);
const none = new Person("None", 100);
// console.log(jasur.info());
// console.log(Person.desc());
console.log(jasur._name);
console.log(jasur._age);
jasur.name = "none";
jasur.age = 15;
console.log(jasur._name);
console.log(jasur.age);
//!instanceof -> nonprimitive data typelar uchun ishlatiladi
console.log(jasur instanceof Person);
console.log({} instanceof Object);
console.log([] instanceof Object);
console.log([] instanceof Array);
