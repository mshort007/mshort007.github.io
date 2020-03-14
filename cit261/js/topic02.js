var personObj;
var voterObj;
var candidateObj;

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

function createPerson() {
	personObj = new person(	document.getElementById("firstName").value,
						document.getElementById("lastName").value,
						document.getElementById("gender").value,
						document.getElementById("age").value);
	document.getElementById("personOutput").innerHTML = "Created person Object";
}

function greetPerson() {
	var varType = getType(personObj);
	if (varType == "undefined") {
		document.getElementById("personOutput").innerHTML = "Please Create Person Object before requesting greeting!"
	} else {
		document.getElementById("personOutput").innerHTML = personObj.greeting();
	}
}

class voter extends person {
	constructor(firstName, lastName, gender, age, state, assemblyDistrict, senateDistrict){
		super(firstName, lastName, gender, age);
		this.state = state;
		this.assemblyDistrict = assemblyDistrict;
		this.senateDistrict = senateDistrict;
	}

	greeting() {
		return "I need to vote responsibly!";
	}
	
	getState() {
		return this.state;
	}
	
	getAssemblyDistrict() {
		return this.assemblyDistrict;
	}
	
	getSenateDistrict() {
		return this.senateDistrict;
	}
}

function createVoter() {
	voterObj = new voter(	document.getElementById("firstName").value,
							document.getElementById("lastName").value,
							document.getElementById("gender").value,
							document.getElementById("age").value,
							document.getElementById("state").value,
							document.getElementById("aDistrict").value,
							document.getElementById("sDistrict").value);
	document.getElementById("voterOutput").innerHTML = "Created voter Object";
}

function greetVoter() {
	var varType = getType(voterObj);
	if (varType == "undefined") {
		document.getElementById("voterOutput").innerHTML = "Please Create voter Object before requesting greeting!"
	} else {
		document.getElementById("voterOutput").innerHTML = voterObj.greeting();
	}
}

class candidate extends person {
	constructor(firstName, lastName, gender, age, state, representation, district, party){
		super(firstName, lastName, gender, age);
		this.state = state;
		this.representation = representation;
		this.district = district;
		this.party = party;
	}
	
	greeting() {
		return "Vote for me, I will represent you and push for important changes!"
	}

	getState() {
		return this.state;
	}
	
	getRepresentation() {
		return this.representation;
	}
	
	getDistrict() {
		return this.district;
	}
	
	getParty() {
		return this.party;
	}
}

function createCandidate() {
	candidateObj = new candidate(document.getElementById("firstName").value,
							document.getElementById("lastName").value,
							document.getElementById("gender").value,
							document.getElementById("age").value,
							document.getElementById("cState").value,
							document.getElementById("representation").value,
							document.getElementById("district").value,
							document.getElementById("party").value);
	document.getElementById("candidateOutput").innerHTML = "Created candidate Object";
}

function greetCandidate() {
	var varType = getType(candidateObj);
	if (varType == "undefined") {
		document.getElementById("candidateOutput").innerHTML = "Please Create candidate Object before requesting greeting!"
	} else {
		document.getElementById("candidateOutput").innerHTML = candidateObj.greeting();
	}
}

function prefillVoter() {
	// Base Class Values
	document.getElementById("firstName").value = "Michael";
	document.getElementById("lastName").value = "Short";
	document.getElementById("gender").value = "Male";
	document.getElementById("age").value = "40";

	// Voter Class Values
	document.getElementById("state").value = "California";
	document.getElementById("aDistrict").value = "75";
	document.getElementById("sDistrict").value = "38";
}

function prefillCandidate() {
	// Base Class Values
	document.getElementById("firstName").value = "Brian";
	document.getElementById("lastName").value = "Jones";
	document.getElementById("gender").value = "Male";
	document.getElementById("age").value = "51";
	
	// Candidate Class Values
	document.getElementById("cState").value = "CA";
	document.getElementById("representation").value = "Senate";
	document.getElementById("district").value = "38";
	document.getElementById("party").value = "Republican";
}

function reset() {
	// Base Class Values
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("age").value = "";

	// Voter Class Values
	document.getElementById("state").value = "";
	document.getElementById("aDistrict").value = "";
	document.getElementById("sDistrict").value = "";
	
	// Candidate Class Values
	document.getElementById("cState").value = "";
	document.getElementById("representation").value = "";
	document.getElementById("district").value = "";
	document.getElementById("party").value = "";
	
	// Reset Object Variables
	personObj = undefined;
	voterObj = undefined;
	candidateObj = undefined;
	
	// Reset Output Fields
	document.getElementById("personOutput").innerHTML = "";
	document.getElementById("voterOutput").innerHTML = "";
	document.getElementById("candidateOutput").innerHTML = "";
}

function getType(a_variable) {
	return typeof a_variable;
}