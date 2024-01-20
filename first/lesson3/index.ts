// //!Function

// //!void -> qiymat qaytarmaydigan function

// //!Function expression

// function getType(): number | void {
//   return 5;
// }

// // console.log(getType());

// //!Calback function

// function callback(): number {
//   return 5;
// }

// function getCallback(fn: Function) {
//   // console.log(fn());
// }

// getCallback(callback);

// type callProp = {
//   (a: string): string;
// };

// function f(): callProp {
//   return (a: string) => a;
// }

// console.log(f()("10"));

// type param = {
//   name: string;
//   age: number;
// };

// function userInfo(prop: param): number {
//   return prop.age;
// }

// console.log(userInfo({ name: "jasurbek", age: 50 }));

// let arr: string[] = [];

// arr.push("Jasubek");
// arr.push("None");

// //!Generic function

// const getData = <Type>(arr: Type[]) => {
//   return (value: Type) => {
//     arr.push(value);
// console.log(arr);
//   };
// };

// const strArr = getData<string>([]);

// strArr("jasurbek");

// const numArr = getData<number>([]);

// numArr(5);

// //!constractor signature

// type callProps = {
//   new (): Object;
// };

// const getDatas = (fn: callProps): string => {
//   return new fn().toString();
// };

// function constFunc() {
//   return Date;
// }

// console.log(getDatas(constFunc()));
// console.log(typeof constFunc());

//!
// function getData<Type extends { length: number }>(a: Type) {
//   console.log(a.length);
// }

// getData<string>("jasurbek");
// getData<number[]>([1, 2, 3, 4, 5, 6, 7]);
// getData<number>(5);
