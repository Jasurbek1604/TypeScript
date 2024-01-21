//!Inheitance

class Person {
  _name: string;
  _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  sayHello(): string {
    return `Hi my name is ${this._name}`;
  }
}

const Jasurbek: Person = new Person("Jasurbek", 20);

console.log(Jasurbek.sayHello());

class Studens extends Person {
  _group: string;
  _course: number;
  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._course = course;
    this._group = group;
  }
}

const laziz: Studens = new Studens("Laziz", 21, "AT_3", 3);

console.log(laziz.sayHello());

const newLaziz: Studens = <Studens>laziz;
const newLaziz1: Person = <Person>laziz;

console.log(newLaziz.sayHello());
console.log(newLaziz1.sayHello());

class Teacher extends Person {
  disciplines: string[] = [];
  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }
  sayHello(): string {
    const parentMethod = super.sayHello();
    return `${parentMethod}, ${this.disciplines}`;
  }
}

const abror: Teacher = new Teacher("dvd", 50, ["jasubek", "Otelbayev"]);

console.log(abror.sayHello());
