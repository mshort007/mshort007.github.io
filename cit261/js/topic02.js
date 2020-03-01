
class person {
	constructor(firstName, lastName, gender, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	
	}

	getFirst() {
		return this.firstName;
	}
	
	getLast() {
		return this.lastName;
	}
	
	getName() {
		return this.firstName + " " + this.lastName;
	}

	getGender() {
		return this.gender;
	}

	getAge() {
		return this.age;
	}
	
	greeting() {
		return "Hello Everyone!";
	}
}

class voter extends person {
	constructor(firstName, lastName, gender, age, state, assemblyDisctrict, senateDistrict){
		super(firstName, lastName, gender, age);
	}
	this.state = state;
	this.assemblyDistrict = assemblyDistrict;
	this.senateDistrict = senateDistrict;

	greeting() {
		return "I need to vote responsibly!";
	}
}

class candidate extends person {
	constructor(firstName, lastName, gender, age, state, representation, district, party){
		super(firstName, lastName, gender, age);
	}
	this.representation = representation;
	this.district = district;
	this.party = party;
	
	greeting() {
		return "Vote for me, I will represent you and push for important changes!"
	}	
}