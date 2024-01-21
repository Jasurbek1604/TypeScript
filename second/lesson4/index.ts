//!Type assertion
let a: any = "jasurbek";
let b: string = <string>a;
let f: string = a as string;

let un: unknown = 5;
let num: number = un as number;

//!union type
let union: string | number | boolean = 5;
union = "jasurbek";
union = false;

//!literal types
let size: "small" | "medium" | "large" | boolean = false;
size = "large";
size = "small";
size = "medium";

//!type aliases
type Sizes = "Small" | "Medium" | "Large" | boolean;
let s: Sizes = false;
s = "Large";
s = "Medium";

//! | -> OR
type OBJ = { name: string } | { age: number };
let obj: OBJ;
obj = { name: "jasurbek" };
obj = { age: 50 };
obj = { name: "none", age: 50 };

//! & -> AND
type OBJ1 = { name: string } & { age: number };
let obj1: OBJ1;
obj1 = { name: "jasurbek", age: 50 };

//! ? -> optional
type OBJ3 = { name: string; age?: 20 };

let obj3: OBJ3 = {
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
} else {
  console.log(false);
}
