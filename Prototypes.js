'use strict'; 

// WHAT IS A PROTOTYPE?
// A Prototype is an Object that exists on every Function in Javascript
// A Prototype, whether a Function/Object Prototype, is actually an instance of an Object in memory
// When a function is created, a new Prototype Object is created in memory and attached to the function
// If that function is used as a constructor with the 'new' keyword, the new object created has a __proto__ 
    // property that is pointing to the same Object in memory that is the Function's prototype

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.age = 29;      // Adding a new Property to Person's Prototype

console.log(Object.getPrototypeOf(Person));     // [Function]       -- WHY?

let me = new Person('Jose', 'Santiago');
console.log(Object.getPrototypeOf(me));         // Person { age: 29 }

console.log(Object.getPrototypeOf(me) === Person.prototype)     // returns true. In JS, if two Objects are equal, it means that they're the same Object instance in memory
console.log(Object.getPrototypeOf(me) === me.__proto__);
me.__proto__.team = 'Cruza';        // Adding a new Property to me's Prototype

console.log(Person.prototype);      // Person { age: 29, team: 'Cruza' }, returns the Prototype Object because we're accessing the Function property 'prototype' 
console.log(me.prototype);          // undefined, because Objects DO NOT have a 'prototype' property

console.log(me.__proto__);          // Person { age: 29, team: 'Cruza' }