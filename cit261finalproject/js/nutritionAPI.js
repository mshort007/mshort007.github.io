// The use of localStorageSupported() will come from global.js

var itemSearchAPI = "//trackapi.nutritionix.com/v2/search/item";
//var itemSearchAPI = "https://trackapi.nutritionix.com/v2/search/item";
var appId = "0179d55a";
var appKey = "d674e8619657d62a79ee68f55cfc451d";

function doItemSearch() {
    let myRequest = new XMLHttpRequest();
    // This will come from page, but first we need to have it working with a well known product
//	let searchQuery = "047500010832";
    let searchQuery = document.getElementById("upcInput").value;
    let requestUrl = itemSearchAPI + '?upc=' + searchQuery + '&claims=false';

    if (isOnlyNumbers(searchQuery) && isSearchLengthValid(searchQuery.length)) {
        myRequest.open('GET', requestUrl, true);
        myRequest.setRequestHeader('x-app-id', appId);
        myRequest.setRequestHeader('x-app-key', appKey);
        myRequest.send();

        myRequest.onload = function() {
            let myResponse = JSON.parse(myRequest.responseText);
            // Lets see if this worked so we can pick it apart.
            console.log(myResponse);
            if (containsData(myResponse.message) && containsData(myResponse.id)) {
                // A response with id and message data from the API is an error
                document.getElementById('nutritionalInfoOutput').innerHTML = "Result: " + myResponse.message;
            } else {
                //
                document.getElementById('nutritionalInfoOutput').innerHTML = "Processing...";
                setLastQuery(searchQuery);
                processResponse(myResponse);
            }
        }
    }
}

function clearItemSearch() {
    document.getElementById('upcInput').value = "";
    document.getElementById('nutritionalInfoOutput').innerHTML = "";
    clearLastQuery();
}

function isOnlyNumbers(a_input) {
    result = false;

    let regexOnlyNumbers = /^[0-9]+$/;
    if (a_input.match(regexOnlyNumbers)){
            result = true;
    }

    return result;
}

function isSearchLengthValid(a_size) {
    result = false;

    if (a_size > 8) {
        result = true;
    }

    return result;
}

function containsData(a_data) {
    let result = false;

    if(a_data !== null && a_data !== undefined) {
        if (a_data.length) {
            result = true;
        }
    }

    return result;
}

function processResponse(a_response) {
    return true;
}

function setLastQuery(a_query) {
    if (localStorageSupported()) {
        localStorage.setItem('lastValidUpcQuery', a_query);
    }
}

function getLastQuery() {
    let result = "";
    if (localStorageSupported()) {
        result = localStorage.getItem('lastValidUpcQuery');
    }

    return result;
}

function clearLastQuery() {
    if (localStorageSupported()) {
        localStorage.removeItem('lastValidUpcQuery');
    }
}

onload = function() {
    let lastQuery = getLastQuery();
    if (containsData(lastQuery)) {
        document.getElementById('upcInput').value = lastQuery;
    }
}
