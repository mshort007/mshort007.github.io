
var JSONString = '{ "year": 2012, "make": "Volkswagen", "model": "Jetta Sportswagen TDI", "color": "Tornado Red", "milage": 51234 }';
var parsedObject = JSON.parse(JSONString);
var bigFamily = { father:"Dad", mother:"Mom", child1:"Michael", child2:"Ian", child3:"Mia", child4:"Linda", child5:"Jacob", child6:"Keith" }; 
var parsedObjectContent = "";
var rawObjectContent = "";

// JSON Parse 
document.getElementById("rawString").innerHTML = JSONString;

//prepare and output contents of parsedObject
for (x in parsedObject) {
	parsedObjectContent += "parsedObject[" + x + "] = [" + parsedObject[x] + "]<br>";
}
document.getElementById("parsedString").innerHTML = parsedObjectContent;


// JSON Stringify

//prepare and output contents of bigFamily
for (x in bigFamily) {
	rawObjectContent += "bigFamily[" + x + "] = [" + bigFamily[x] + "]<br>";
}
document.getElementById("rawObject").innerHTML = rawObjectContent;

//output the stringified version of object bigFamily
document.getElementById("stringifiedObject").innerHTML = JSON.stringify(bigFamily);
