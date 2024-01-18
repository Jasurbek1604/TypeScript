let user = { name: "Jasurbek", age: 19 };

//!Types
let anyData: any = [1, 2, 3, 4, 5];

let title: string = "Jasurbek";
let num: number = 123;
anyData = "none";

let data: string[] = ["jasuebek", "none"];
let anyDataExact: [number, string, any] = [1, "non", "jasue"];
anyDataExact = [0, "Jasurbek", []];

//!Union

let union: number | string | boolean = "jasurbek";
union = 15;
union = false;

let arrUnion: [number | string] = ["jasurek"];
arrUnion = [1];

let arrU: any[number | string] = false;

//!Tuple -> exact type in array

let tuple: [string, number][];

tuple = [
  ["jasubek", 19],
  ["jasubek", 19],
];

//!Enum -> enumaration

enum dir {
  up = 5,
  down,
  top,
}

console.log(dir.up, dir.down, dir.top);

//!type assertion

let id: any = 15;

let stringId = <string>id;
let numId = <number>id;
let numId2 = id as number;

stringId = "Jasurbek";
numId = 19;
