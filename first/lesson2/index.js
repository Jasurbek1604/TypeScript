"use strict";
let user = { name: "Jasurbek", age: 19 };
//!Types
let anyData = [1, 2, 3, 4, 5];
let title = "Jasurbek";
let num = 123;
anyData = "none";
let data = ["jasuebek", "none"];
let anyDataExact = [1, "non", "jasue"];
anyDataExact = [0, "Jasurbek", []];
//!Union
let union = "jasurbek";
union = 15;
union = false;
let arrUnion = ["jasurek"];
arrUnion = [1];
let arrU = false;
//!Tuple -> exact type in array
let tuple;
tuple = [
    ["jasubek", 19],
    ["jasubek", 19],
];
//!Enum -> enumaration
var dir;
(function (dir) {
    dir[dir["up"] = 5] = "up";
    dir[dir["down"] = 6] = "down";
    dir[dir["top"] = 7] = "top";
})(dir || (dir = {}));
console.log(dir.up, dir.down, dir.top);
//!type assertion
let id = 15;
let stringId = id;
let numId = id;
let numId2 = id;
stringId = "Jasurbek";
numId = 19;
