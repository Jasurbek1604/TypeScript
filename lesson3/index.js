// function getData(a: number, b: number): number | void {
//   //   return a + b;
// }
function calc(a) {
    return a;
}
function get(prop) {
    return function (a) { return a; };
}
console.log(get({ key: "jasurbel", value: 5 }));
