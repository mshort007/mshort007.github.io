var WeatherRequest = new XMLHttpRequest();
var apiURL;
var splitUrlArray = (document.location.href).split('/');
var currentPage = splitUrlArray[splitUrlArray.length - 1];

if (currentPage === "franklin.html") {
    apiURL = '//api.openweathermap.org/data/2.5/weather?id=4156210&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';
} else if (currentPage === "greenville.html") {
    apiURL = '//api.openweathermap.org/data/2.5/weather?id=5564488&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';
} else if (currentPage === "springfield.html") {
    apiURL = '//api.openweathermap.org/data/2.5/weather?id=5093030&APPID=dd14403260f2bc5da5d473915847cf4f&units=imperial';
}
WeatherRequest.open('GET', apiURL, true);
WeatherRequest.send();

WeatherRequest.onload = function () {
    var weatherData = JSON.parse(WeatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('condition').innerHTML = weatherData.weather[0].description;
    document.getElementById('dailyhigh').innerHTML = weatherData.main.temp_max;
    document.getElementById('dailylow').innerHTML = weatherData.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

} // end of frWeatherRequest.onload function

// Franklin: 4156210
// Springfield: 5093030
// Greenville: 5564488


