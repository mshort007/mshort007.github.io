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



function isArray(a_array) {
	var result = "false";
	
	if (a_array.constructor.toString().indexOf("Array") > -1) {
		result = "true";
	}
	
	return result;
}