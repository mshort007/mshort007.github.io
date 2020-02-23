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

function isArray(a_array) {
	var result = "false";
	
	if (a_array.constructor.toString().indexOf("Array") > -1) {
		result = "true";
	}
	
	return result;
}