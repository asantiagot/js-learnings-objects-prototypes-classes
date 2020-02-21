function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

let me = new Person("Antonio", "Santiago", 26);

console.log(me);

// KEY LEARNINGS //
// this always refer to an Object. The object it refers to depends on the context of the code executing at the time 
