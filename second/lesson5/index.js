"use strict";
//!Array
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numArr1 = [1, 2, 3, 4, 5, 6];
let strArr = ["1", "none"];
let strArr2 = ["10"];
let unionArr = [false, 1, 5, "jasurbek"];
let unionArr1 = [false, 1, 5, "jasurbek"];
//!Tuples -> kortejlar
let tuple1 = ["none", false];
let tuple2 = [
    [1, "jasubek"],
    [2, "none"],
    [3, "qwerty"],
];
let tuple3 = [
    [
        [1, "jasubek"],
        [2, "none"],
        [3, "qwerty"],
    ],
];
//!Enum -> qayta hisoblash
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["famale"] = 1] = "famale";
})(Gender || (Gender = {}));
var ABC;
(function (ABC) {
    ABC[ABC["A"] = 0] = "A";
    ABC[ABC["B"] = 5] = "B";
    ABC[ABC["C"] = 6] = "C";
})(ABC || (ABC = {}));
console.log(Gender.male, Gender.famale);
console.log(ABC.A, ABC.B, ABC.C);
var Str;
(function (Str) {
    Str["a"] = "Hello";
    Str["b"] = "none";
})(Str || (Str = {}));
console.log(Str.a, Str.b);
console.log(0 /* AA.a */, 1 /* AA.b */);
