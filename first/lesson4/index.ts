//!Interface and Type

interface ages {
  age: number;
}

interface first {
  firstName: string;
}

interface user extends ages, first {
  lastName: string;
}

type users = {
  firstName: string;
  age: number;
  lastName: string;
};

let obj: user = {
  firstName: "jasurbek",
  lastName: "Otelbayev",
  age: 19,
};

let obj2: users = {
  firstName: "jasur",
  lastName: "non",
  age: 5,
};

//!readonly

interface jasurInt {
  readonly name: string;
  age: number;
}

const jasur: jasurInt = {
  name: "jasur",
  age: 19,
};

// jasur.name = "none"; only read

console.log(jasur);

//! readonly to writable

interface newJasurInt {
  name: string;
  age: number;
}

let newJasur: newJasurInt = {
  name: "jasubek",
  age: 15,
};

newJasur.name = "none";

console.log(newJasur);

//!index signature (string number symbol)

interface Prop<Type, TypeN> {
  year: number;
  age: TypeN;
  check(): void;
  name: Type;
  [index: string]: string | number | Function | Type | TypeN;
}

let IndexObj: Prop<string, number> = {
  name: "jasur",
  year: 2024,
  age: 15,
  check() {
    console.log("check");
  },
};

//!Class

interface User {
  name: string;
  age: number;
  //   password: string; error, private is not
}

class Person implements User {
  constructor(a: string) {
    console.log(a);
  }
  name = "jasurbek";
  private password = "none";
  age = 16;
}

let person = new Person("Jasurbek");

console.log(person.age, person.name);

//!literal types

type course = "frontend" | "backend" | "mobile";

const course: course = "mobile";
