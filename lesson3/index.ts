// function getData(a: number, b: number): number | void {
//   //   return a + b;
// }

// console.log(getData(5, 9));

type propType = number;

function calc(a: number): propType {
  return a;
}

type callProp = {
  (a: number): number;
};

type param = {
  key: string;
  value?: number;
};

function get(prop: param): callProp {
  return (a: number) => a;
}

// console.log(get({ key: "jasurbel", value: 5 })(9));

// type call = {
//   new (): Object;
// };

// const getData = (fn: call): string => {
//   return new fn().toString();
// };

// function consFunc() {
//   return Date;
// }

// console.log(getData(consFunc()));

//!generics

// function getData<Type>(array: Type[]) {
//   return (value: Type) => {
//     array.push(value);
//     console.log(array);
//   };
// }

// let arrStr = getData<string>([]);
// let numArr = getData<number>([]);
// arrStr("frontend");
// arrStr("backend");
// numArr(123);
// numArr(45);

//!muitation
function getData<Type extends { length: number }>(a: Type) {
  console.log(a.length);
}

getData("dkvndkvdnk");
getData([5, 5, "dd", 9, 9, 9]);
// getData(55)

//!function overload with optional chaining

function getS(a?: number, b?: string): string {
  return `${b}`;
}

console.log(getS(4, "vdsv"));
