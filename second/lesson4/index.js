"use strict";
//!Type assertion
let a = "jasurbek";
let b = a;
let f = a;
let un = 5;
let num = un;
//!union type
let union = 5;
union = "jasurbek";
union = false;
//!literal types
let size = false;
size = "large";
size = "small";
size = "medium";
let s = false;
s = "Large";
s = "Medium";
let obj;
obj = { name: "jasurbek" };
obj = { age: 50 };
obj = { name: "none", age: 50 };
let obj1;
obj1 = { name: "jasurbek", age: 50 };
let obj3 = {
    name: "jasuebek",
};
obj3 = { age: 20, name: "ha" };
//! IN
let obj4 = {
    name: "jasurbek",
    age: 20,
};
if ("age" in obj4) {
    console.log(true);
}
else {
    console.log(false);
}
