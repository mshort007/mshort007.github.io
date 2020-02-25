function getInfo1() {
	var WeatherRequest = new XMLHttpRequest();
	// Use on apiURL for local testing and the other for when hosted on github
	//var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5346827&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';
	var apiURL = '//api.openweathermap.org/data/2.5/weather?id=5346827&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';

	WeatherRequest.open('GET', apiURL, true);
	WeatherRequest.send();

	WeatherRequest.onload = function () {
		var weatherData = JSON.parse(WeatherRequest.responseText);
		//console.log(weatherData);

		document.getElementById('location').innerHTML = "<b>Location: </b>" + weatherData.name;
		document.getElementById('temp').innerHTML = "<b>Current Temp: </b>" + weatherData.main.temp + " F";
		document.getElementById("info1Output").innerHTML = "";
	}
}

function clearInfo1() {
	document.getElementById('location').innerHTML =  "<b>Location: </b> Unknown";
	document.getElementById('temp').innerHTML = "<b>Current Temp: </b> Unknown";
	document.getElementById("info1Output").innerHTML = "Press Get Info to Execute XMLHttpRequest to obtain JSON data";
}


onload = clearInfo1();