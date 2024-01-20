//! TypeScript Functions

//Declaration
function degree(x: number, y: number): number {
  return x ** y;
}

// console.log(degree(5, 2));

//Arrow function

const Str = (a: string): string => {
  return a;
};

// console.log(Str("s"));

//Expression

let expFunc = function (a: number, b: string): number {
  return a;
};

// console.log(expFunc(10, "none"));

//!void -> qiymat qaytarmaydifan function type

const voidFunc = (a: number): void => {
  //   console.log(a);
};

// voidFunc(5);

//!never -> function hech qachon tamomlanmasa

function findError(s: string): never {
  throw new Error(s);
}

// findError("none");

//!signature function

let c: (a: number, b: boolean) => string;

c = function (a: number, b: boolean): string {
  return "dvdv";
};

// c(5, false);

//!function overloads

function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return (x + y).toString();
}

console.log(overloadFunc(5, 10));
console.log(overloadFunc(1, 9));
