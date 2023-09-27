let title: string = "jasurbek";
let number: number = 123;
let bool: boolean = true;
let obj: object = { name: "jasurbek" };
let arr: object = [1, 2, 3, 4, 5, 6, 9];
let antData: any = "jasurbek";
antData = 123;

// let array: any[] = [1]; => faqat array qabul qiladi

// let anyData: string[] = []; array faqat string qabul qiladi

// anyData.push("jnjn");
// anyData.push(5);

let anyDataExact: [string, number] = ["jasur", 84512];

let tuple: string | number | object = "jasurbek";

let arTuple: [string | number] = [5];
let arTupleAny: any[string | number] = [5, 5, 6, 98, 8, 8, { nam: "brfb" }];

let tupleARR: [string, number][] = [];

tupleARR = [
  ["fnfnv", 4450],
  ["fnfnv", 4450],
];

enum dir {
  up,
  down,
  top,
}

console.log(dir.down, dir.up, dir.top);

let id: any = 12;

let uId = <string>id;
let uI4 = id as string;

uId = "string";

console.log(uId);
