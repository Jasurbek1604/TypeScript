//!abstract classlardan hechqachon obyekt olib bolmaydi faqat voris olish mumkin
//!abstact method elon qilinsa , shu elonqilingan class vorislarida ham info methodni bolishi shart

interface IPreson {
  _name: string;
  _age: number;
  sayHello(): string;
  info(): string;
}

abstract class Person implements IPreson {
  _name: string;
  _age: number;
  sayHello(): string {
    return `hello my name is ${this._name}`;
  }
  abstract info(): string;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
}

// const jasurbek: Person = new Person("Jasuebek", 20);
// console.log(jasurbek);
// console.log(jasurbek.sayHello());

interface IStudens extends IPreson {
  _course: number;
  _group: string;
}

class Student extends Person implements IStudens {
  _course: number;
  _group: string;
  constructor(name: string, age: number, course: number, group: string) {
    super(name, age);
    this._course = course;
    this._group = group;
  }
  info(): string {
    return "none";
  }
}

const inam: Student = new Student("Inamjon", 19, 1, "Dav-2");

console.log(inam.info());
console.log(inam.sayHello());
