// class: blueprint ==> object
// const obj = { name: 'john', age: 20, address: '' };
// const obj1 = { name: 'ann', age: 20, address: '' };
// const obj2 = { name: 'jack', age: 20, address: '' };
// const obj3 = { name: 'ben', age: 20, address: '' };

// type Address = { road: string; province: string };

// class Person {
//   // field/property
//   readonly name: string;
//   age: number = 50;
//   address: Address;

//   // method
//   constructor(a: string, b?: number, c?: Address) {
//     this.name = a;
//     // this.age = b;
//     // this.address = c;
//     console.log('constructor run');
//   }

//   sayHi(): void {
//     console.log(this.name);
//     console.log('Hi');
//     this.sayHello('asasas');
//   }

//   sayHello(message: string): void {
//     console.log(message);
//   }
// }

// inheritance
// Policeman called child class
// Person called parent class
// class Policeman extends Person {
//   // name: string;
//   // age: number;
//   // address: Address;
//   rank: string;

//   constructor() {
//     super('test', 60);
//     // super.sayHi()
//   }

//   sayHi() {
//     console.log('Hi from child class');
//     // this.sayHello('aaaaaaaa');
//   }

//   sayHello(): void {
//     console.log('Hello Child class');
//   }
// }

// const police1 = new Policeman('jame');
// police1.sayHi();
// police1.sayHello('aa');
// console.log(police1 instanceof Person);

// HttpException extends Error

// instantiate
// constructor('test')
// const p1 = new Person('test'); // { name, age, address }, p1 called instance of class Person
// // const p2 = new Person('blabla'); // { name, age, address }
// p1.sayHi();
// p1.sayHello('Greeting');
// p1.name = 'newname';
// // p1.address
// // p1.name

// const d = new Date(); // d instance of Date
// console.log(d instanceof Date); // true
// const err = new Error('dfdkfdkfdf');
// console.log(err instanceof Date); // false

// class NotFoundException extends Error {
//   statusCode: number;
//   // message: string;

//   constructor(m: string, s: number) {
//     super(m);
//     this.statusCode = s;
//   }
// }

// const nf = new NotFoundException('Product not found', 404);

// Access modifier: public, private, protected
class Person {
  private name: string;
  private age = 50;
  constructor(name: string) {
    this.name = name;
  }

  public print() {
    console.log(this.name);
    console.log(this.age);
  }

  protected test() {}
}

class Lawyer extends Person {
  static runningId: number = 0;
  static getRunningId() {
    console.log('muamua');
  }

  public degree: string;
  constructor(degree: string, name: string) {
    super(name);
    this.degree = degree;
  }

  private sayHi() {
    // console.log(this.name);
    // console.log(this.age);
  }

  public test() {}
}

console.log(Lawyer.runningId);
// const l1 = new Lawyer('dggggg', 'nammmmm');
// l1.runningId

// console.log(l1.name);
// console.log(l1.age);
// l1.sayHi();

// const p = new Person('assa');
// p.print();
// p.age;
// p.name;

// Date.now(); // millisecond timestamt 1/1/1970
// const d = new Date('2025-01-01');
// d.getTime();
