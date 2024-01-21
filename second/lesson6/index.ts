//!Classes

class Person {
  _name: string;
  _age: number;
  static isFly: boolean = false;
  static desc(): string {
    return `bu class pesron`;
  }

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  info(): string {
    return `${this._name}`;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
}

const jasur: Person = new Person("Jasurbek", 20);
const none: Person = new Person("None", 100);

// console.log(jasur.info());
// console.log(Person.desc());

console.log(jasur._name);
console.log(jasur._age);

jasur.name = "none";
jasur.age = 15;

console.log(jasur._name);
console.log(jasur.age);

//!instanceof -> nonprimitive data typelar uchun ishlatiladi

console.log(jasur instanceof Person);
console.log({} instanceof Object);
console.log([] instanceof Object);
console.log([] instanceof Array);
