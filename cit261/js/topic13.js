function toggleAnimTwo() {
	var curText = document.getElementById("buttonAnimTwo").innerHTML;
	if (curText == "Start") {
		document.getElementById("buttonAnimTwo").innerHTML = "Stop";
		document.getElementById("animTwo").style.animationPlayState = "running";	
	} else {
		document.getElementById("buttonAnimTwo").innerHTML = "Start";
		document.getElementById("animTwo").style.animationPlayState = "paused";	
	}
}
