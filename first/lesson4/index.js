"use strict";
//!Interface and Type
let obj = {
    firstName: "jasurbek",
    lastName: "Otelbayev",
    age: 19,
};
let obj2 = {
    firstName: "jasur",
    lastName: "non",
    age: 5,
};
const jasur = {
    name: "jasur",
    age: 19,
};
// jasur.name = "none"; only read
console.log(jasur);
let newJasur = {
    name: "jasubek",
    age: 15,
};
newJasur.name = "none";
console.log(newJasur);
let IndexObj = {
    name: "jasur",
    year: 2024,
    age: 15,
    check() {
        console.log("check");
    },
};
class Person {
    constructor(a) {
        this.name = "jasurbek";
        this.password = "none";
        this.age = 16;
        console.log(a);
    }
}
let person = new Person("Jasurbek");
console.log(person.age, person.name);
const course = "mobile";
