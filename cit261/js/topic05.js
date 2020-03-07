function localStorage1() {
	let output = "";
	output += "localStorage supported: [" + localStorageSupported() + "]<br><br>";
	
	// Only Attempt if localStorage API is supported
	if (localStorageSupported()) {
		// Simple Data
		let lastVisitDate = new Date().toString();
		
		// Arrays
		let billingAddress = [];
		billingAddress[0] = "Michael Short";
		billingAddress[1] = "123 Any Street"
		billingAddress[2] = "New York, NY, 10101"
		
		// Associative Arrays
		let shippingAddress = [];
		shippingAddress['street1'] = "123 Any Street";
		shippingAddress['city'] = "New York";
		shippingAddress['state'] = "NY";
		shippingAddress['postalCode'] = "10101";
		
		// Objects
		let shoppingCart = { item:"Baby Formula", size: "24 oz", qty:3 };

		// We have Data, lets Store it.		
		output += "Storing localStorage Data: <br><br>";
		
		// Storing a string
		output += "&nbsp&nbsp&nbsp&nbsp&nbsplastVisit<br>";
		localStorage.lastVisit = lastVisitDate;
		
		// This Array can be stringified and stored
		output += "&nbsp&nbsp&nbsp&nbsp&nbspbillingAddress<br>";
		localStorage.billingAddress = JSON.stringify(billingAddress);
		
		// This Associative Array cannot be stringified and stored, each element must be stored individually
		// an attempt to stringify this array will result in an empty string
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshippingAddress<br>";
		localStorage.SAstreet1 = JSON.stringify(shippingAddress['street1']);
		localStorage.SAcity = JSON.stringify(shippingAddress['city']);
		localStorage.SAstate = JSON.stringify(shippingAddress['state']);
		localStorage.SApostalCode = JSON.stringify(shippingAddress['postalCode']);
		
		// This Object can be stringified and stored		
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshoppingCart<br>";
		localStorage.shoppingCart = JSON.stringify(shoppingCart);
		
		output += "<br>Storing sessionStorage Data: <br><br>";
		
		// This is is how we only store something temporarily for this session.
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData<br>";
		sessionStorage.tmpData = "This data will only be stored for the current session!";
		
		// Store temp data using the setItem method
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData2 (using setItem)<br>";
		sessionStorage.setItem("tmpData2", "This data was stored with the setItem method!");
		output += "<br>Done!<br>";
		
		document.getElementById('ls1Output').innerHTML = output;
	}
}

function localStorage2() {
	let output = "";
	output += "localStorage supported: [" + localStorageSupported() + "]<br><br>";
	
	// Only Attempt if localStorage API is supported
	if (localStorageSupported()) {
		// Lets get the data out.		
		output += "Retrieving Data: <br><br>";
		
		// Retrieve a String
		output += "&nbsp&nbsp&nbsp&nbsp&nbsplastVisit<br>";
		let lastVisitDate = localStorage.lastVisit;
		
		// Retrieve an Array
		output += "&nbsp&nbsp&nbsp&nbsp&nbspbillingAddress<br>";
		let billingAddress = JSON.parse(localStorage.billingAddress);
		
		// Retrieve an Associative Array
		// Because an Associative Array will not store easily as an Array or Object
		// To reconstruct, each item must be separately retrieved and stored. 
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshippingAddress<br>";
		let shippingAddress = [];
		shippingAddress['street1'] = JSON.parse(localStorage.SAstreet1);
		shippingAddress['city'] = JSON.parse(localStorage.SAcity);
		shippingAddress['state'] = JSON.parse(localStorage.SAstate);
		shippingAddress['postalCode'] = JSON.parse(localStorage.SApostalCode);
		
		// Retrieve an Object
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshoppingCart<br>";
		let shoppingCart = Object(JSON.parse(localStorage.shoppingCart));

		// Get sessionData
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData<br>";
		let tmpData = sessionStorage.tmpData;
		
		// Get ssessionData using getItem
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData2<br>";
		let tmpData2 = sessionStorage.getItem('tmpData2');

		output += "<br>Done!<br><br>";

		// Display what we were able to retrieve
		output += "<b>Data Read:</b><br><br>";
		
		// Display the String
		output += "lastVisitDate: " + lastVisitDate + "<br><br>";
		
		// Display the Array
		output += "billingAddress: <br><br>";
		for (let x = 0; x < billingAddress.length; x++) {
			output += "   billingAddress[" + x + "]:  " + billingAddress[x] + "<br>";
		}
		output += "<br>";

		// Display the Associative Array
		output += "shippingAddress: <br><br>";
		for (let a in shippingAddress) {
			output += "  shippingAddress[" + a + "]: " + shippingAddress[a] + "<br>";
		}
		output += "<br>";
		
		// Display the object
		output += "shoppingCart: <br><br>";
		for (let b in shoppingCart) {
			output += "   shoppingCart " + b + ": " + shoppingCart[b] + "<br>";
		}
		output += "<br>";
		
		// Display tmpData
		output += "tmpData: " + tmpData + "<br><br>";

		// Display tmpData2
		output += "tmpData2: " + tmpData2 + "<br><br>";
		
		document.getElementById('ls2Output').innerHTML = output;		
	}
}

function localStorage3() {
	let output = "";
	output += "Clearing out localStorage<br><br>";
	
	// Only Attempt if localStorage API is supported
	if (localStorageSupported()) {
		// Lets remove the localStorage and sessionStorage Keys that we use.		
		output += "Removing localStorage Keys: <br><br>";
		
		// lastVisit
		output += "&nbsp&nbsp&nbsp&nbsp&nbsplastVisit<br>";
		localStorage.removeItem('lastVisit');
		
		// billingAddress
		output += "&nbsp&nbsp&nbsp&nbsp&nbspbillingAddress<br>";
		localStorage.removeItem('billingAddress');
		
		// shippingAddress
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshippingAddress<br>";
		localStorage.removeItem('SAstreet1');
		localStorage.removeItem('SAcity');
		localStorage.removeItem('SAstate');
		localStorage.removeItem('SApostalCode');
		
		// shoppingCart
		output += "&nbsp&nbsp&nbsp&nbsp&nbspshoppingCart<br>";
		localStorage.removeItem('shoppingCart');
		
		output += "<br>Removing sessionStorage Keys:<br><br>";
		
		// tmpData
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData<br>";
		sessionStorage.removeItem('tmpData');
		
		// tmpData2
		output += "&nbsp&nbsp&nbsp&nbsp&nbsptmpData2<br>";
		sessionStorage.removeItem('tmpData2');		
		
		output += "<br>Done!<br>";

		document.getElementById('ls3Output').innerHTML = output;
	}		
}

function clear1() {
	document.getElementById('ls1Output').innerHTML = "Press Run to Execute Code";
}

function clear2() {
	document.getElementById('ls2Output').innerHTML = "Press Run to Execute Code";
}

function clear3() {
	document.getElementById('ls3Output').innerHTML = "Press Run to Execute Code";
}

function localStorageSupported() {
	var result = false;
	if (typeof(Storage) !== "undefined") {
		result = true;
	}
	return result;
}

onload = function() {
	clear1();
	clear2();
	clear3();
}