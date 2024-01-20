"use strict";
//!Narrowing
function getData(a) {
    if (typeof a === "string") {
        a.repeat(3);
    }
}
function time(key) {
    const obj = {
        l: "jasudbek",
        ll: "jasur jasur",
    };
    return obj[key] || "none";
}
console.log(time("l")); // Output: jasudbek
console.log(time("ll")); // Output: jasur jasur
console.log(time("invalidKey")); // Output: undefined
//! Discriminated uniond
function get(a) {
    let b = a;
}
//!never , unknown
//never -> hech qachon erirshib bolmaydigan qiymat
//unknown -> noma'lum qiymat
function getType() {
    throw new Error();
}
let g = "jasur";
// console.log(g.charAt(2)); error
// let test:never = 15; error
