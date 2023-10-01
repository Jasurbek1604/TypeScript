var objs = {
    name: "jasurbek",
    age: 19,
    //   title: "Student",
};
var object = {
    name: "jasurbek",
    age: 19,
    year: 2023,
    check: function () {
        console.log("hello");
    },
};
console.log(object.age);
var a = {
    name: "jasurbek",
    age: 19,
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "jasurbek";
        this.age = 19;
    }
    return Person;
}());
var p = new Person("jasurbek");
console.log(p.age);
var course = "frontend";
