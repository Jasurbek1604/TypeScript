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
function getData(array) {
    return function (value) {
        array.push(value);
        console.log(array);
    };
}
var arrStr = getData([]);
var numArr = getData([]);
arrStr("frontend");
arrStr("backend");
numArr(123);
numArr(45);
