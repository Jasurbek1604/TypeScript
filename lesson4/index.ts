interface user {
  name: string;
  age: number;
}

type usr = {
  name: string;
  age: number;
};

let objs: usr = {
  name: "jasurbek",
  age: 19,
  //   title: "Student",
};

//!extends interface

//readonly => update qilish imkoni bolmaydi
// interface name {
//   readonly name: string;
// }

// interface age {
//   age: number;
// }

// interface use extends name, age {
//   title?: string;
// }

// let obb: use = {
//   name: "none",
//   age: 15,
// };

// interface writable {
//   name?: string;
//   age?: number;
// }

// let w: writable = obb;

// console.log(w);

// w.name = "n";

// console.log(obb);

//! indexed signature => objectlarni ketva valuelarga umumiy type berish

interface prop {
  //!objectdagi valuelar hamms i string bolishi kerak
  [index: string]: string;
}

interface Prop {
  //!objectdagi valuelar hamms i string yoki number bolishi kerak
  year: number;
  check?: () => void;
  [index: string]: string | number | Function | undefined;
}

let object: Prop = {
  name: "jasurbek",
  age: 19,
  year: 2023,
  check() {
    console.log("hello");
  },
};

console.log(object.age);

interface None<Type, Text> {
  name: Type;
  age: Text;
  [index: string]: number | string | Type | Text;
}

const a: None<string, number> = {
  name: "jasurbek",
  age: 19,
};

//! Class

interface clasInter {
  // name: string;
  age?: number;
}

class Person implements clasInter {
  constructor(name: string) {}
  private name = "jasurbek";
  age = 19;
}

let p = new Person("jasurbek");

console.log(p.age);

type course = "frontend" | "backend" | "mobile";

const course: course = "frontend";
