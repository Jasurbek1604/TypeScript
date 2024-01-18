"use strict";
//!Function
//!void -> qiymat qaytarmaydigan function
//!Function expression
function getType() {
    return 5;
}
// console.log(getType());
//!Calback function
function callback() {
    return 5;
}
function getCallback(fn) {
    console.log(fn());
}
getCallback(callback);
function f() {
    return (a) => a;
}
console.log(f()("10"));
function userInfo(prop) {
    return prop.age;
}
console.log(userInfo({ name: "jasurbek", age: 50 }));
let arr = [];
arr.push("Jasubek");
arr.push("None");
//!Generic function
const getData = (arr) => {
    return (value) => {
        arr.push(value);
        console.log(arr);
    };
};
const strArr = getData([]);
strArr("jasurbek");
const numArr = getData([]);
numArr(5);
