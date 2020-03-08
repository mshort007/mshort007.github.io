var elements;

function elementAppend() {
	clearOutput();
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', 'box');
	newDiv.setAttribute('style', 'background-color:' + getColor(elements));
	newDiv.textContent = "Child [" + elements + "]";
	document.getElementById('elementAppendRemove').appendChild(newDiv);
	document.getElementById('appendRemoveOutput').innerHTML = "Appended Child Element [" + elements + "]";
	elements++;
	displayElementCount()
}

function elementRemove() {
	clearOutput();
	if (elements > 0) {
		let elementToRemove = elements - 1;
		let parent = document.getElementById('elementAppendRemove');
		parent.removeChild(parent.childNodes[elementToRemove]);
		document.getElementById('appendRemoveOutput').innerHTML = "Removed Child Element [" + elementToRemove + "]";
		elements--;
	} else {
		document.getElementById('appendRemoveOutput').innerHTML = "No Child Elements to Remove!";
	}
	displayElementCount();	
}

function elementRemoveAll() {
	while (elements > 0) {
		elementRemove();
	}
	document.getElementById('appendRemoveOutput').innerHTML = "Removed All Child Elements!";
}

function elementInsertBefore() {
	clearInsertOutput();
	let parent = document.getElementById('elementInsertBefore');
	let newDiv = document.createElement('div');
	let location = parent.children.length;
	newDiv.setAttribute('class', 'box');
	newDiv.setAttribute('style', 'background-color:lime');
	newDiv.textContent = "Inserted";
	parent.insertBefore(newDiv, parent.childNodes[location]);
	document.getElementById('insertBeforeOutput').innerHTML = "Inserted Element";
}

function elementClearInserted() {
	let parent = document.getElementById('elementInsertBefore');
	while (parent.children.length > 2) {
		parent.removeChild(parent.childNodes[parent.children.length-1]);
	}
	document.getElementById('insertBeforeOutput').innerHTML = "Removed All Inserted Elements!";
}

function clearOutput() {
	document.getElementById('appendRemoveOutput').innerHTML = "";
}

function clearInsertOutput() {
	document.getElementById('insertBeforeOutput').innerHTML = "";
}

function displayElementCount() {
	document.getElementById('elementAppendRemoveCount').innerHTML = elements;
}

function getColor(number) {
	let colors = [ "red", "orange", "gold", "green", "blue", "purple", "grey", "black" ];
	return colors[(number % colors.length)];
}

onload = function() {
	elements = 0;
	displayElementCount();
	document.getElementById('appendRemoveOutput').innerHTML = "None";
	
	document.getElementById('insertBeforeOutput').innerHTML = "None";
}