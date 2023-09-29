// function getData(a: number, b: number): number | void {
//   //   return a + b;
// }
function calc(a) {
    return a;
}
function get(prop) {
    return function (a) { return a; };
}
var getData = function (fn) {
    return new fn().toString();
};
function consFunc() {
    return Date;
}
console.log(getData(consFunc()));
