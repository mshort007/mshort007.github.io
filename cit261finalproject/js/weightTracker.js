// The use of localStorageSupported() will come from global.js
// The use of containsData(a_data) will come from global.js

var weightDataArray = [];
var weightMaxRecords = 10;
var weightDecimalPlaces = 2;

function recordWeight() {
    if (localStorageSupported()) {
        let wInput = document.getElementById('weightInput').value;
        if (isValidWeightNumber(wInput)) {
            wInput = Number(wInput).toFixed(weightDecimalPlaces);
            document.getElementById('weightInput').value = wInput;
            let date = new Date();
            let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
            let datePadded = date.getDate().toString();
            if (datePadded.length < 2) {
                datePadded = "0" + datePadded;
            }
            let dateString = datePadded + "-" + months[date.getMonth()] + "-" + date.getFullYear();

            let newRecord = { "date": dateString, "weight": wInput };

            let weightArray = localStorage.getItem("weightArray");
            if (containsData(weightArray)) {
                weightDataArray = JSON.parse(weightArray);
            }
            weightDataArray.push(newRecord);
            while (weightDataArray.length > weightMaxRecords) {
                weightDataArray.shift();
            }
            localStorage.setItem('weightArray', JSON.stringify(weightDataArray));
            generateTable();
        } else {
            document.getElementById('weightTrackInfo').innerHTML = "Invalid Value!";
        }
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "No LocalStorage!";
    }
}

function isValidWeightNumber(a_input) {
    result = false;

    let regexDecimalPointNumbers = /^[0-9]+(\.[0-9]+)?$/;

    if (a_input.match(regexDecimalPointNumbers)){
        result = true;
    }

    return result;
}

function clearLastRecord() {
    if (localStorageSupported()) {
        let weightArray = localStorage.getItem("weightArray");
        if (containsData(weightArray)) {
            weightDataArray = JSON.parse(weightArray);
            if (weightDataArray.length > 0){
                weightDataArray.pop();
                localStorage.setItem('weightArray', JSON.stringify(weightDataArray));
                generateTable();
            } else {
                document.getElementById('weightTrackInfo').innerHTML = "No Records Exist";
            }
        } else {
            document.getElementById('weightTrackInfo').innerHTML = "Records Appear Corrupted";
        }
    }
}

function generateTable() {
    if (localStorageSupported()) {
        let weightArray = localStorage.getItem("weightArray");
        if (containsData(weightArray)) {
            weightDataArray = JSON.parse(weightArray);
            if (weightDataArray.length > 0){
                // Generate Table
                let htmlOutput = "<p><table id=\"weightTable\">";
                htmlOutput += "<tr><th>Date</th><th>Weight</th></tr>";
                let tableIter = 0;
                while (tableIter < weightDataArray.length) {
                    htmlOutput += "<tr><td>" + weightDataArray[tableIter].date + "</td><td>" + weightDataArray[tableIter].weight + "</td></tr>";
                    tableIter++;
                }
                htmlOutput += "</table></p>";
                document.getElementById('weightTrackInfo').innerHTML = htmlOutput;
            } else {
                document.getElementById('weightTrackInfo').innerHTML = "No Records Exist";
            }
        } else {
            document.getElementById('weightTrackInfo').innerHTML = "Records Appear Corrupted";
        }
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "No LocalStorage!";
    }
}

function initializeStoredData() {
    let result = false;
    if (localStorageSupported()) {
        localStorage.removeItem('weightArray');
        localStorage.setItem('weightArray', '[]');
        result = true;
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "No LocalStorage!";
    }
    return result;
}


function weightTrackerOnload() {
    if (localStorageSupported()) {
        let weightArray = localStorage.getItem("weightArray");
        if (containsData(weightArray)) {
            weightDataArray = JSON.parse(weightArray);
            generateTable();
        } else {
            if (initializeStoredData()) {
                document.getElementById('weightTrackInfo').innerHTML = "LocalStorage Initialized";
            }
        }
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "No LocalStorage!";
    }
}
