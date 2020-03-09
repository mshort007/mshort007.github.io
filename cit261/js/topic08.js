function toggleAnimation() {
	var curText = document.getElementById("animationButton").innerHTML;
	if (curText == "Start") {
		document.getElementById("animationButton").innerHTML = "Stop";
		let animations = document.getElementsByClassName("animation");
		for (let z of animations) {
			z.style.animationPlayState = "running";	
		}
	} else {
		document.getElementById("animationButton").innerHTML = "Start";
		let animations = document.getElementsByClassName("animation");
		for (let z of animations) {
			z.style.animationPlayState = "paused";	
		}
	}
}

function addTransition() {
	document.getElementById("transitionDiv").className = "transition";
}

function removeTransition() {
	document.getElementById("transitionDiv").className = "noTransition";
}

// The addTransition and removeTransition methods were originally written to toggle the transition class
// but after some thought, it would not be correct to have it activate with onmouseenter and onmouseleave
// since users may have a mobile device. This function performs the toggle and is activated with onclick.
function toggleTransition() {
	let currentClass = document.getElementById("transitionDiv").className;
	if (currentClass == "noTransition") {
		document.getElementById("transitionDiv").className = "transition";
	} else {
		document.getElementById("transitionDiv").className = "noTransition";
	}
} 