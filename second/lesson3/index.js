"use strict";
//! TypeScript Functions
//Declaration
function degree(x, y) {
    return Math.pow(x, y);
}
// console.log(degree(5, 2));
//Arrow function
const Str = (a) => {
    return a;
};
// console.log(Str("s"));
//Expression
let expFunc = function (a, b) {
    return a;
};
// console.log(expFunc(10, "none"));
//!void -> qiymat qaytarmaydifan function type
const voidFunc = (a) => {
    //   console.log(a);
};
// voidFunc(5);
//!never -> function hech qachon tamomlanmasa
function findError(s) {
    throw new Error(s);
}
// findError("none");
//!signature function
let c;
c = function (a, b) {
    return "dvdv";
};
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    return (x + y).toString();
}
console.log(overloadFunc(5, 10));
console.log(overloadFunc(1, 9));
