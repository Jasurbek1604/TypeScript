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

function get(key: string): callProp {
  return (a: number) => a;
}
