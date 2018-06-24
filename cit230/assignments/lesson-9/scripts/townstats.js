var statsRequest = new XMLHttpRequest();
var statsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

statsRequest.open('GET', statsURL, true);
statsRequest.send();

statsRequest.onload = function () {
    var townStats = JSON.parse(statsRequest.responseText);
    //console.log(townStats);

    var i;
    for (i = 0; i < townStats.towns.length; i++) {
        if (townStats.towns[i].name == "Franklin") {
            document.getElementById('frMotto').innerHTML = townStats.towns[i].motto;
            document.getElementById('frFounded').innerHTML = townStats.towns[i].yearFounded;
            document.getElementById('frPopulation').innerHTML = townStats.towns[i].currentPopulation;
            document.getElementById('frRainfall').innerHTML = townStats.towns[i].averageRainfall;
        } else if (townStats.towns[i].name == "Greenville") {
            document.getElementById('grMotto').innerHTML = townStats.towns[i].motto;
            document.getElementById('grFounded').innerHTML = townStats.towns[i].yearFounded;
            document.getElementById('grPopulation').innerHTML = townStats.towns[i].currentPopulation;
            document.getElementById('grRainfall').innerHTML = townStats.towns[i].averageRainfall;
        } else if (townStats.towns[i].name == "Springfield") {
            document.getElementById('spMotto').innerHTML = townStats.towns[i].motto;
            document.getElementById('spFounded').innerHTML = townStats.towns[i].yearFounded;
            document.getElementById('spPopulation').innerHTML = townStats.towns[i].currentPopulation;
            document.getElementById('spRainfall').innerHTML = townStats.towns[i].averageRainfall;
        } else {
            continue;
        }
    }
} // end of statsRequest.onload function
