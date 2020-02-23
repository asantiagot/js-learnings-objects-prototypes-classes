'use strict'; 

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName () {
        return this.firstName + ' ' + this.lastName;
    }
    // IMPORTANT NOTE: when creating a getter, the property it refers to is created with the attribute enumerable set to false by default

    set fullName(fullName) {
        let nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }

    // IMPORTANT NOTE: getters and setters live in the Prototype
        // other properties (e.g. firstName, lastName) live in the Person Object's instances

    isAdult() {
        return this.age >= 18;
    }
}

let me = new Person('Antonio', 'Santiago', 26);
me.fullName = 'Jose Torres';
console.log(me.fullName);

Object.defineProperty(me, 'fullName', { enumerable: true });
console.log(me);


// INHERITANCE
class Student extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.enrolledCourses = [];
    }

    enroll (courseName) {
        this.enrolledCourses.push(courseName);
    }
    
    getCourses () {
        return `${this.fullName} enrolled courses: ${this.enrolledCourses.join(', ')}`;
    }

    static fromPerson(person) {
        return new Student(person.firstName, person.lastName);
    }
    
}

// Student.fromPerson = function(person) {      // alternative to declaring a static method inside of the Class declaration
//     return new Student(person.firstName, person.lastName, person.age);
// }

let antonio = new Student('Antonio', 'Santiago');
let mario = new Person('Mario', 'Bros');
mario = Student.fromPerson(mario);

antonio.enroll('Algoritmos');
antonio.enroll('Ingeniería de Software');

mario.enroll('videojuegos');

// console.log(antonio.getCourses());

console.log(antonio);
console.log(mario);