var currentColor = 0;

function getDate() {
	let date = new Date();
	let result = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
	
	document.getElementById("animatedDate").innerHTML = result;
}

function toggleAnimation() {
	let curState = document.getElementById("animatedDate").style.animationPlayState;
	if (curState == "paused") {
		document.getElementById("animatedDate").style.animationPlayState = "running";
	} else if (curState == "running") {
		document.getElementById("animatedDate").style.animationPlayState = "paused";
	} else {
		document.getElementById("animatedDate").style.animationPlayState = "running";
	}
}

function switchColor() {
		currentColor++;
		document.getElementById("colorChange").style.backgroundColor = getColor(currentColor%10);
}

function getColor(curColor) {
	let result = "";
	
	switch(curColor) {
		case 0:
			result = "white";
			break;
		case 1:
			result = "red";
			break;
		case 2:
			result = "blue";
			break;
		case 3:
			result = "orange";
			break;
		case 4:
			result = "purple";
			break;
		case 5:
			result = "yellow";
			break;
		case 6:
			result = "green";
			break;
		case 7:
			result = "silver";
			break;
		case 8:
			result = "pink";
			break;
		case 9:
		default:
			result = "black";
			break;
	}
	
	return result;
}

function touchStart() {
	document.getElementById("touchStartEndStatus").innerHTML = "Touch Start Detected";
}

function touchEnd() {
	document.getElementById("touchStartEndStatus").innerHTML = "Touch End Detected";
	document.getElementById("xyCoordinates").innerHTML = " (N/A, N/A)";
}

function touchMove(myEvent) {
	let xCoordinate = myEvent.touches[0].clientX;
	let yCoordinate = myEvent.touches[0].clientY;
	xCoordinate = Math.trunc(xCoordinate);
	yCoordinate = Math.trunc(yCoordinate);
	document.getElementById("xyCoordinates").innerHTML = " (" + xCoordinate + ", " + yCoordinate + ")";
	console.log(myEvent);
}

onload = function() {
	getDate();
	
}