'use strict';

function display(object) {
	console.log(object);
}

function registerUser(firstName, lastName,age) {
	let person = {
		firstName,
		lastName,
		age,
		isAdult() {return this.age >= 18}
	};

	display(person);
	display(person.isAdult());

	for (let propertyName in person) {
		display(propertyName);
	}

	display(Object.keys(person));

	// Object.keys() and the for... in accomplish the same objective
}

registerUser("Antonio", "Santiago", 17);

