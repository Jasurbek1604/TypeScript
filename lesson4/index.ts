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

interface prop {
  name: string;
  age: number;
}

let object: prop = {
  name: "jasurbek",
  age: 19,
};
