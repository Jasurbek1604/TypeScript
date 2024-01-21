"use strict";
//!abstract classlardan hechqachon obyekt olib bolmaydi faqat voris olish mumkin
//!abstact method elon qilinsa , shu elonqilingan class vorislarida ham info methodni bolishi shart
class Person {
    sayHello() {
        return `hello my name is ${this._name}`;
    }
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
class Student extends Person {
    constructor(name, age, course, group) {
        super(name, age);
        this._course = course;
        this._group = group;
    }
    info() {
        return "none";
    }
}
const inam = new Student("Inamjon", 19, 1, "Dav-2");
console.log(inam.info());
console.log(inam.sayHello());
