
function setHeight(inVal) {
	height = "200px";
	
	switch (inVal) {
		case 0:
			height = "100px";
			break;
		case 1:
		default:
			height = "200px";
			break;
		case 2:
			height = "300px";
			break;
	}
	document.getElementById('manipulatedDiv').style.height = height;
	document.getElementById('manipulateOutput').innerHTML = "Setting Height to " + height;
}

function setWidth(inVal) {
	width = "50%";
	
	switch (inVal) {
		case 0:
			width = "25%";
			break;
		case 1:
		default:
			width = "50%";
			break;
		case 2:
			width = "75%";
			break;
	}
	document.getElementById('manipulatedDiv').style.width = width;
	document.getElementById('manipulateOutput').innerHTML = "Setting Width to " + width;
}

function color(value) {
	let colorName = "unknown"
	switch(value) {
		case 0:
			colorName = "red";
			break;
		case 1:
			colorName = "orange";
			break;		
		case 2:
			colorName = "yellow";
			break;		
		case 3:
			colorName = "green";
			break;		
		case 4:
			colorName = "blue";
			break;		
		case 5:
			colorName = "purple";
			break;		
		case 6:
			colorName = "black";
			break;		
		default:
			console.log("Error: Invalid value passed to color()");
	}

	if (colorName != "unknown") {
		document.getElementById('manipulatedDiv').style.backgroundColor = colorName;
		document.getElementById('manipulateOutput').innerHTML = "Setting Color to " + colorName;
	}
}

function setRadius(inVal) {
	radius = "0px";
	
	switch (inVal) {
		case 0:
		default:
			radius = "0px";
			break;
		case 1:
			radius = "10px";
			break;
		case 2:
			radius = "20px";
			break;
		case 3:
			radius = "30px";
			break;
		case 4:
			radius = "40px";
			break;
	}
	document.getElementById('manipulatedDiv').style.borderRadius = radius;
	document.getElementById('manipulateOutput').innerHTML = "Setting Border Radius to " + radius;
}