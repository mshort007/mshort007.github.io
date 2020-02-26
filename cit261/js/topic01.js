function runLoop1() {
	var output = "";
	var x, y;

	for (x = y = 0; x < 10; x++) {
		y += x;
		output += "x is [" + x + "], y is [" + y + "]<br>";
	}
	output += "<br>Final Value for y is [" + y + "]<br>";

	document.getElementById("loop1Output").innerHTML = output;
}

function clearLoop1() {
	document.getElementById("loop1Output").innerHTML = "Press Run to Execute Code";
}

function runLoop2() {
	var output = "";
	var vehicle = { year:1996, make:"Ford", model:"Escort", trim:"LXW", color:"Royal Blue", VIN:"1FRD1X498A23GG48SW", inventoryTag:"17XJ4A"};
	
	for (var x in vehicle) {
		output += vehicle[x] + "<br>";
	}
	
	document.getElementById("loop2Output").innerHTML = output;
}

function clearLoop2() {
	document.getElementById("loop2Output").innerHTML = "Press Run to Execute Code";
}

function runLoop3() {
	var output = "";
	var friends = [ 'Mike', 'Maithe', 'Michael', 'Ian', 'Mia', 'Linda', 'Jacob', 'Keith' ];
	
	for (var x of friends) {
		output += x + "<br>";
	}
	
	document.getElementById("loop3Output").innerHTML = output;
}

function clearLoop3() {
	document.getElementById("loop3Output").innerHTML = "Press Run to Execute Code";
}

function runLoop4() {
	var output = "";
	var x, y;
	x = y = 0;

	while (x < 10) {
		y += x;
		output += "x is [" + x + "], y is [" + y + "]<br>";
		x++;
	}
	
	output += "<br>Final Value for y is [" + y + "]<br>";
	document.getElementById("loop4Output").innerHTML = output;
}

function clearLoop4() {
	document.getElementById("loop4Output").innerHTML = "Press Run to Execute Code";
}

function runLoop5() {
	var output = "";
	var x, y;
	x = y = 0;

	do {
		y += x;
		output += "x is [" + x + "], y is [" + y + "]<br>";
		x++;
	} while (x < 10);
	
	output += "<br>Final Value for y is [" + y + "]<br>";
	document.getElementById("loop5Output").innerHTML = output;
}

function clearLoop5() {
	document.getElementById("loop5Output").innerHTML = "Press Run to Execute Code";
}

function runConditional1() {
	var output = "";
	var num = Math.floor(Math.random() * 11);

	output = "Random Number from 0 to 10: [" + num + "]<br><br>";
	
	if (num > 5) {
		output += "Random Number is Larger than 5!<br>";
	}
	if (num < 5) {
		output += "Random Number is Smaller than 5!<br>";
	}
	if (num == 5) {
		output += "Random Number is 5!<br>";
	}
	
	document.getElementById("conditional1Output").innerHTML = output;	
}

function clearConditional1() {
	document.getElementById("conditional1Output").innerHTML = "Press Run to Execute Code";	
}

function runConditional2() {
	var output = "";
	var num = Math.floor(Math.random() * 11);

	output = "Random Number from 0 to 10: [" + num + "]<br><br>Key:  0-4 = Happy, 5-10 = Sad<br><br>Message:<br>";
	
	if (num < 5) {
		output += "I Feel Happy!<br>";
	} else {
		output += "I Feel Sad!<br>";
	}

	document.getElementById("conditional2Output").innerHTML = output;
}

function clearConditional2() {
	document.getElementById("conditional2Output").innerHTML = "Press Run to Execute Code";	
}

function runConditional3() {
	var output = "";
	var num = Math.floor(Math.random() * 11);

	output = "Random Number from 0 to 10: [" + num + "]<br><br>";
	
	if (num > 5) {
		output += "Random Number is Larger than 5!<br>";
	} else if (num < 5) {
		output += "Random Number is Smaller than 5!<br>";
	} else {
		output += "Random Number is 5!<br>";
	}
	
	document.getElementById("conditional3Output").innerHTML = output;	
}

function clearConditional3() {
	document.getElementById("conditional3Output").innerHTML = "Press Run to Execute Code";	
}

function runConditional4() {
	var output = "";
	var num = Math.floor(Math.random() * 11);

	output = "Random Number from 0 to 10: [" + num + "]<br><br>";
	
	switch (num) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			output += "Random Number is Smaller than 5!<br>";
			break;
		case 5:
			output += "Random Number is 5!<br>";
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			output += "Random Number is Larger than 5!<br>";
			break;
		default:
			output += "Error: It should not be possible to ever get this message.<br>";
	}
	
	document.getElementById("conditional4Output").innerHTML = output;	
}

function clearConditional4() {
	document.getElementById("conditional4Output").innerHTML = "Press Run to Execute Code";	
}

function getWeekday(day) {
	var result = "";
	switch (day) {
		case 0:
			result = "Sunday";
			break;
		case 1:
			result = "Monday";
			break;
		case 2:
			result = "Tuesday";
			break;
		case 3:
			result = "Wednesday";
			break;
		case 4:
			result = "Thursday";
			break;
		case 5:
			result = "Friday";
			break;
		case 6:
			result = "Saturday";
			break;
		default:
			result = "Error: Unable to determine day!";
			break;
	}
	return result;
}

function getWisdom() {
	var num = Math.floor(Math.random() * 11);
	var wisdom = "";
	
	switch (num) {
		case 0:
			wisdom = "A little impatience will spoil great plans.";
			break;
		case 1:
			wisdom = "A journey of a thousand miles begins with a single step."
			break;
		case 2:
			wisdom = "The more acquaintances you have, the less you know them.";
			break;
		case 3:
			wisdom = "Two good talkers are not worth one good listener.";
			break;
		case 4:
			wisdom = "Patience is a bitter plant, but its fruit is sweet.";
			break;
		case 5:
			wisdom = "The best time to plant a tree was 20 years ago. The second best time is today.";
			break;
		case 6:
			wisdom = "A hundred no's are less agonizing than one insincere yes.";
			break;
		case 7:
			wisdom = "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.";
			break;
		case 8:
			wisdom = "A man who cannot tolerate small misfortunes can never accomplish great things.";
			break;
		case 9:
			wisdom = "Genius can be recognized by its childish simplicity.";
			break;
		case 10:
			wisdom = "All things change, and we change with them.";
			break;
		default:
			wisdom = "Error: Something went wrong while seeking wisdom!";
			break;
	}
	return wisdom;
}	

function runFunction1() {
	var output = "";
	output += "Happy " + getWeekday(new Date().getDay()) + "!<br><br>";
	output += "Your Wisdom for Today is: <br><br><i>" + getWisdom() + "</i><br>";
	document.getElementById("function1Output").innerHTML = output;
}

function clearFunction1() {
	document.getElementById("function1Output").innerHTML = "Press Get Wisdom to Execute Code";
}

var greetingMsg = "Hi!";
function runParameter1() {
	greetingMsg = "Hi!";
	var output = "";
	
	output += "Current Greeting: " + greetingMsg + "<br><br>";
	// attempt to set to something invalid
	setGreeting(123);
	output += "Current Greeting: " + greetingMsg + "<br><br>";
	// attempt to set to something valid
	setGreeting("Hello Parameter Seekers!");
	output += "Current Greeting: " + greetingMsg + "<br><br>";

	var x = 1, y = 2, z = 3;
	
	output += "Perform addition by passing parameters to an addition function:<br><br>";
	output += x + " + " + y + " = " + addNumbers(x,y) + "<br><br>";
	output += y + " + " + z + " = " + addNumbers(y,z) + "<br><br>";
	output += z + " + " + x + " = " + addNumbers(z,x) + "<br><br>";
	
	document.getElementById("parameter1Output").innerHTML = output;
}

function clearParameter1() {
	document.getElementById("parameter1Output").innerHTML = "Press Run to Execute Code";	
}
	
function setGreeting(a_strGreeting) {
	// Check if the value passed into the function was a string before setting
	if (typeof a_strGreeting === 'string') {
		greetingMsg = a_strGreeting;
	}
}

function addNumbers(a_val1, a_val2) {
	var result;
	
	result = a_val1 + a_val2;
	
	return result;
}

function runArray1() {
	let output = "";
	let myFriends = [ "Michael", "Maithe", "Mike", "Ian", "Mia", "Linda", "Jacob", "Keith" ];

	
	output += "myFriends is an array? [" + isArray(myFriends) + "]<br><br>";
	
	output += "The array myFriends contains [" + myFriends.length + "] elements.<br><br>";
	
	output += "Contents of myFriends:<br><br>";
	for (let i = 0; i < myFriends.length; i++) {
		output += "myFriends[" + i + "]: [" + myFriends[i] + "]<br>";
	}
	
	document.getElementById("array1Output").innerHTML = output;
}

function clearArray1() {
	document.getElementById("array1Output").innerHTML = "Press Run to Execute Code";	
}

function isArray(a_array) {
	let result = "false";
	
	if (a_array.constructor.toString().indexOf("Array") > -1) {
		result = "true";
	}
	return result;
}

function runAssocArray1() {
	let output = "";
	let myFamilyObj = { father:"Dad", mother:"Mom", child1:"Jack", child2:"Fred", child3:"Hannah", child4:"Jake", child5:"Ralph", child6:"Laura" };
	let i = 0;

	output += "myFamilyObj is: [" + getType(myFamilyObj) + "]<br><br>";		
	output += "myFamilyObj length is: [" + myFamilyObj.length + "]<br><br>";
	output += "myFamily Obj keys: [" + Object.keys(myFamilyObj) + "]<br><br>";
	
//	myFamily["namedIndex1"] = "NamedI1";
//	myFamily["namedIndex2"] = "NamedI2";
//	output += "myFamily is: [" + getType(myFamily) + "]<br><br>";
//	output += "myFamily length is: [" + myFamily.length + "]<br><br>";
//	output += "myFamily keys: [" + Object.keys(myFamily) + "]<br><br>";
	
	for (let n in myFamilyObj) {
		output += "myFamilyObj[" + n + "] = [" + myFamilyObj[n] + "]<br>";
		
	}
//	output += "myFamily is an array? [" + isArray(myFamily) + "]<br><br>";
//	
//	output += "The array myFamily contains [" + myFamily.length + "] elements.<br><br>";
//	
//	output += "Contents of myFamily:<br><br>";
//	for (i = 0; i < myFamily.length; i++) {
//		output += "myFamily[" + i + "]: [" + myFamily[i] + "]<br>";
//	}
	
	document.getElementById("assocArray1Output").innerHTML = output;
}

function clearAssocArray1() {
	document.getElementById("assocArray1Output").innerHTML = "Press Run to Execute Code";	
}

function getType(a_variable) {
	return typeof a_variable;
}

