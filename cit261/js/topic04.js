function getInfo() {
	let location = document.getElementById('locations').value;
	var WeatherRequest = new XMLHttpRequest();
	// Use one apiURL for local testing and the other for when hosted on github
	let apiURL = '//api.openweathermap.org/data/2.5/weather?id=' + location + '&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';
	//let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=' + location + '&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';

	WeatherRequest.open('GET', apiURL, true);
	WeatherRequest.send();

	WeatherRequest.onload = function () {
		let weatherData = JSON.parse(WeatherRequest.responseText);
		//console.log(weatherData);

		document.getElementById('location').innerHTML = "<b>Location: </b>" + weatherData.name;
		document.getElementById('temp').innerHTML = "<b>Current Temp: </b>" + weatherData.main.temp + " F";
		document.getElementById('infoOutput').innerHTML = "";
	}
}

function clearInfo() {
	document.getElementById('location').innerHTML =  "<b>Location: </b> Unknown";
	document.getElementById('temp').innerHTML = "<b>Current Temp: </b> Unknown";
	document.getElementById('infoOutput').innerHTML = "Press Get Info to Execute XMLHttpRequest to obtain JSON data";
}


onload = clearInfo();