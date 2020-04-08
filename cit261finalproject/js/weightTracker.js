// The use of localStorageSupported() will come from global.js
// The use of containsData(a_data) will come from global.js

var weightDataArray = [];

function recordWeight() {
    if (localStorageSupported()) {
        //get data from field, make sure it is a number
        // fix to 2 decimal places,
        // get current date/time
        // create an object with the weight and date fields
        // find a way to get it onto the array push, etc.
        // make sure to only track 10 entries
        // write array to local storage DD MON YYYY

        // generate table

        document.getElementById('weightTrackInfo').innerHTML = "record";
        let result = false;
    }
}

function clearLastRecord() {
    if (localStorageSupported()) {
        let weightArray = localStorage.getItem("weightArray");
        if (containsData(weightArray)) {
            weightDataArray = JSON.parse(weightArray);
            if (weightDataArray.length > 0){
                weightDataArray.pop();
                localStorage.setItem('weightArray', JSON.stringify(weightDataArray));
                document.getElementById('weightTrackInfo').innerHTML = "Last Record Cleared";
                //TODO: generate table instead of above message
            } else {
                document.getElementById('weightTrackInfo').innerHTML = "No Records Exist";
            }
        } else {
            document.getElementById('weightTrackInfo').innerHTML = "Records Appear Corrupted";
        }
    }
}

function generateTable() {
    let result = false;
}

function initializeStoredData() {
    let result = false;
    if (localStorageSupported()) {
        localStorage.removeItem('weightArray');
        localStorage.setItem('weightArray', '[]');
        result = true;
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "Error: Unable to Initialize Local Storage";
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
                document.getElementById('weightTrackInfo').innerHTML = "Local Storage Initialized";
            }
        }
    } else {
        document.getElementById('weightTrackInfo').innerHTML = "Error: Local Storage Not Supported";
    }
}
