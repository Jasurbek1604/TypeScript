//!Array

let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numArr1: Array<number> = [1, 2, 3, 4, 5, 6];

let strArr: string[] = ["1", "none"];
let strArr2: Array<string> = ["10"];

let unionArr: (number | string | boolean)[] = [false, 1, 5, "jasurbek"];
let unionArr1: Array<number | string | boolean> = [false, 1, 5, "jasurbek"];

//!Tuples -> kortejlar

let tuple1: [string, boolean] = ["none", false];

let tuple2: [number, string][] = [
  [1, "jasubek"],
  [2, "none"],
  [3, "qwerty"],
];

let tuple3: [number, string][][] = [
  [
    [1, "jasubek"],
    [2, "none"],
    [3, "qwerty"],
  ],
];

//!Enum -> qayta hisoblash

enum Gender {
  male,
  famale,
}

enum ABC {
  A,
  B = 5,
  C,
}

console.log(Gender.male, Gender.famale);

console.log(ABC.A, ABC.B, ABC.C);

enum Str {
  a = "Hello",
  b = "none",
}

console.log(Str.a, Str.b);

const enum AA {
  a,
  b,
}

console.log(AA.a, AA.b);
