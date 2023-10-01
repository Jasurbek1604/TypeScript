// function getData(a: number, b: number): number | void {
//   //   return a + b;
// }
function calc(a) {
    return a;
}
function get(prop) {
    return function (a) { return a; };
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
function getData(a) {
    console.log(a.length);
}
getData("dkvndkvdnk");
getData([5, 5, "dd", 9, 9, 9]);
// getData(55)
