//!Narrowing

function getData(a: string | number) {
  if (typeof a === "string") {
    a.repeat(3);
  }
}

function time(key: string): string {
  const obj: { [key: string]: string } = {
    l: "jasudbek",
    ll: "jasur jasur",
  };
  return obj[key] || "none";
}

console.log(time("l")); // Output: jasudbek
console.log(time("ll")); // Output: jasur jasur
console.log(time("invalidKey")); // Output: undefined

//! Discriminated uniond

function get(a?: string) {
  let b: string = a!;
}

//!never , unknown

//never -> hech qachon erirshib bolmaydigan qiymat
//unknown -> noma'lum qiymat

function getType(): never {
  throw new Error();
}

let g: unknown = "jasur";
// console.log(g.charAt(2)); error

// let test:never = 15; error
