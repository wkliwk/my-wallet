'use strict';

const uuid = require('uuid')
// @flow
 class User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  expireTime: number;
  createdAt: number;
  updatedAt: number;
  
  constructor(name: string, email: string, firstName: string, accessToken: string, expireTime: number) {
    const now = new Date();
    const currentTimestamp = now.getTime();
    
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accessToken = accessToken;
    this.expireTime = expireTime;
    this.createdAt = currentTimestamp;
    this.updatedAt = currentTimestamp;
  }
}

module.exports = 'user';

// class User {
//     constructor(email, firstName, lastName, accessToken, expireTime, createdAt, updateAt) {

//     }

// }

// class Student {
//     constructor(name, age, id) {
//         // always initialize all instance properties
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//     getStudentName() {
//         return this.name;
//     }
//     getStudentAge() {
//         return this.age;
//     }
//     getStudentId() {
//         return this.id;
//     }
// }

// class Person {
//     constructor() {
//       this.id = 'id_1';
//     }
//     set name(name) {
//       this._name = name.charAt(0).toUpperCase() + name.slice(1);
//     }
//     get name() {
//       return this._name;
//     }
//     sayHello() {
//       console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
//     }
// }

  
// // Example 1: Creating a new class (declaration-form)
// // ===============================================================

// // A base class is defined using the new reserved 'class' keyword
// class Polygon {
//   // ..and an (optional) custom class constructor. If one is
//   // not supplied, a default constructor is used instead:
//   // constructor() { }
//   constructor(height, width) {
//     this.name = 'Polygon';
//     this.height = height;
//     this.width = width;
//   }

//   // Simple class instance methods using short-hand method
//   // declaration
//   sayName() {
//     ChromeSamples.log('Hi, I am a ', this.name + '.');
//   }

//   sayHistory() {
//     ChromeSamples.log('"Polygon" is derived from the Greek polus (many) ' +
//       'and gonia (angle).');
//   }

//   // We will look at static and subclassed methods shortly
// }

// // Classes are used just like ES5 constructor functions:
// let p = new Polygon(300, 400);
// p.sayName();
// ChromeSamples.log('The width of this polygon is ' + p.width);

// // Example 2: Creating a new class (expression-form)
// // ===============================================================

// // Our Polygon class above is an example of a Class declaration.
// // ES6 classes also support Class expressions - just another way
// // of defining a new class. For example:
// const MyPoly = class Poly {
//   getPolyName() {
//     ChromeSamples.log('Hi. I was created with a Class expression. My name is ' +
//       Poly.name);
//   }
// };