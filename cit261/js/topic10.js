function canvasPainter() {
	let c = document.getElementById("funCanvas");
	let context = c.getContext("2d");
	let gradient = context.createLinearGradient(0, 0, 200, 200);
	
	// Create and Fill Gradient
	gradient.addColorStop(0, "red");
	gradient.addColorStop(1, "blue");
	context.fillStyle = gradient;
	context.fillRect(0,0,300,200);
	
	// Add Hello Canvas! Text
	context.font = "25px Times New Roman";
	context.fillStyle  = "yellow";
	context.fillText("Hello Canvas!", c.width/4, c.height - (c.height/4));
	
	// Draw circles to create a target shape
	let xloc = c.width/2;
	let yloc = (c.height/8) * 3;
	
	context.beginPath();
	context.arc(xloc, yloc, 40, 0, 2 * Math.PI);
	context.fillStyle = "red";
	context.fill();
	
	context.beginPath();
	context.arc(xloc, yloc, 30, 0, 2 * Math.PI);
	context.fillStyle = "green";
	context.fill();
	
	context.beginPath();
	context.arc(xloc, yloc, 20, 0, 2 * Math.PI);
	context.fillStyle = "yellow";
	context.fill();
	
	context.beginPath();
	context.arc(xloc, yloc, 10, 0, 2 * Math.PI);
	context.fillStyle = "grey";
	context.fill();
}

onload = canvasPainter();