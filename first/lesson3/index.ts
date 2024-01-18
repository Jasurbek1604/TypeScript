//!Function

//!void -> qiymat qaytarmaydigan function

//!Function expression

function getType(): number | void {
  return 5;
}

// console.log(getType());

//!Calback function

function callback(): number {
  return 5;
}

function getCallback(fn: Function) {
  console.log(fn());
}

getCallback(callback);

type callProp = {
  (a: string): string;
};

function f(): callProp {
  return (a) => a;
}

console.log(f()("10"));

type param = {
  name: string;
  age: number;
};

function userInfo(prop: param): number {
  return prop.age;
}

console.log(userInfo({ name: "jasurbek", age: 50 }));

let arr: string[] = [];

arr.push("Jasubek");
arr.push("None");

//!Generic function

const getData = <Type>(arr: Type[]) => {
  return (value: Type) => {
    arr.push(value);
    console.log(arr);
  };
};

const strArr = getData<string>([]);

strArr("jasurbek");

const numArr = getData<number>([]);

numArr(5);
