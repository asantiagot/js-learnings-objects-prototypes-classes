'use strict';

// There are three basic Object Property Attributes in JS: Writable, Enumberable and Configurable
let person = {
    name: {
        firstName: 'Antonio',
        lastName: 'Santiago'
    },
    age: 26,
    profession: 'Developer',
    hobbies: ['tennis', 'music']
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));

// To change a Property attribute, use Object.defineProperty(<Object>, <property>, <attribute: attribute value>)

// WRITABLE //
// Object.defineProperty(person, 'name', {writable: false});
//person.name = 'Kris';      // returns TypeError: Cannot assign to read only property 'name' of object '#<Object>'

// however we can do the following
person.name.firstName = 'Jose';
console.log(Object.getOwnPropertyDescriptor(person, "name"));

// Also, we can use Object.freeze(Object.attribute) to 'freeze' any Object attribute
Object.freeze(person.name);
// person.name.firstName = 'Jose Antonio';  // returns TypeError: Cannot assign to read only property 'firstName' of object '#<Object>'


// ENUMERABLE //
Object.defineProperty(person, 'profession', {enumerable: false });
for (let propName in person) {
    console.log(propName);
}

console.log(Object.keys(person));       // ['name', 'age', 'hobbies']

// CONFIGURABLE //
Object.defineProperty(person, 'hobbies', { configurable: false });
// Object.defineProperty(person, 'hobbies', { enumerable: false });    // returns TypeError: Cannot redefine property: hobbies
Object.defineProperty(person, 'hobbies', { writable: false });

person.hobbies.push('anime');       // works as we are not reassigning the memory reference
// person.hobbies = ['anime']       // will not work due to the change in the Writable attribute. This will attempt to change the memory reference

console.log(person.hobbies);

console.log("for... in")
for (let prop in person.hobbies) {
    console.log(person.hobbies[prop]);
}

console.log("for loop with iterator")
for (let i=0; i<person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
}


// PROPERTY ATTRIBUTES SUMMARY //
// The Writable attribute defines whether the value can be changed from its initial value
// The Enumberable attribute allows the property to be enumerated in a loop, using Object.keys or Serialized with JSON.stringify
// The Configurable attribute allows/disallows further redefining properties of an Object. Has no effect on the Writable attribute
