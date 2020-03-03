var JSONString = '{ "year": 2012, "make": "Volkswagen", "model": "Jetta Sportswagen TDI", "color": "Tornado Red", "milage": 51234 }';
var bigFamily = { father:"Dad", mother:"Mom", child1:"Michael", child2:"Ian", child3:"Mia", child4:"Linda", child5:"Jacob", child6:"Keith" }; 

// JSON Parse 
function parseString() {
	// Parse JSON String
	let parsedObjectContent = "";
	let parsedObject = JSON.parse(JSONString);	

	//Format and output contents of parsedObject
	for (x in parsedObject) {
		parsedObjectContent += "Object[" + x + "] = " + parsedObject[x] + "<br>";
	}
	
	document.getElementById("parsedString").innerHTML = parsedObjectContent;
}

function clearParse() {
	document.getElementById("parsedString").innerHTML = "Press Parse to Parse String into Object";
}

// JSON Stringify
function stringifyObject() {
	//output the stringified version of object bigFamily
	document.getElementById("stringifiedObject").innerHTML = JSON.stringify(bigFamily);
}

function clearStringify() {
	document.getElementById("stringifiedObject").innerHTML = "Press Stringify to turn Object into JSON Text";
}

// Page Prep
onload = function(){
	clearParse();
	clearStringify();
	
	// Populate Raw JSON String on page 
	document.getElementById("rawString").innerHTML = JSONString;
	
	// Populate Object Contents
	let rawObjectContent = "";
	for (x in bigFamily) {
		rawObjectContent += "Object[" + x + "] = " + bigFamily[x] + "<br>";
	}
	document.getElementById("rawObject").innerHTML = rawObjectContent;
}