function calculateWindchill(avg, speed) {
    return 35.74 + 0.6215 * avg - 35.74 * Math.pow(speed,0.16) + 0.4275 * avg * Math.pow(speed,0.16);
}

function calculateWindspeed() {
    var high = parseInt(document.getElementById("dailyhigh").textContent);
    var low = parseInt(document.getElementById("dailylow").textContent);
    var wind = parseInt(document.getElementById("windspeed").textContent);
    if (Number.isInteger(high) && Number.isInteger(low) && Number.isInteger(wind)) {
        var average = (high + low) / 2;
        document.getElementById("windchill").textContent =
            Math.round(calculateWindchill(average, wind)) +
            String.fromCharCode(176)+ 'F';
    }
}
// Allow a moment for data in page to be populated before calculating
// windspeed using said values.
setTimeout(calculateWindspeed, 2000);
