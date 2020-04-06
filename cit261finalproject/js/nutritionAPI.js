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
                // Otherwise we should have good data, process it.
                document.getElementById('nutritionalInfoOutput').innerHTML = "Processing...";
                setLastQuery(searchQuery);
                document.getElementById('nutritionalInfoOutput').innerHTML = processResponse(myResponse);
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
        if (typeof a_data == 'number') {
            result = true;
        }
    }

    return result;
}

function processResponse(a_response) {
    let htmlOutput = "";

    // Assemble Food Item Brand and Name
    htmlOutput += "<p id=\"upcProductTitle\">";
    let bBrand = containsData(a_response.foods[0].brand_name);
    let bName = containsData(a_response.foods[0].food_name);
    if (bBrand && bName) {
        htmlOutput += a_response.foods[0].brand_name + " <br> " + a_response.foods[0].food_name;
    } else if(bBrand) {
        htmlOutput += a_response.foods[0].brand_name;
    } else if(bName) {
        htmlOutput += a_response.foods[0].food_name;
    }
    htmlOutput += "</p>";

    // Show a thumbnail of the image if one exists
    if (containsData(a_response.foods[0].photo.thumb)) {
        htmlOutput += "<img src=\"" + a_response.foods[0].photo.thumb + "\" id=\"upcProductThumb\">";
    }

    // Create a Table to Display Nutritional Info
    htmlOutput += "<p id=\"upcProductNutritionInfo\"><u>NUTRITION FACTS</u><br>";

    if (containsData(a_response.foods[0].serving_qty) &&
        containsData(a_response.foods[0].serving_unit) &&
        containsData(a_response.foods[0].serving_weight_grams)) {
        htmlOutput += "Serving Size: " + (a_response.foods[0].serving_qty).toFixed(2) + " " +
            a_response.foods[0].serving_unit + " (" +
            a_response.foods[0].serving_weight_grams + "g)<br>";
    }

    htmlOutput += "<table id=\"nutriFactsTable\">";

    if (containsData(a_response.foods[0].nf_calories)) {
        htmlOutput += "<tr><td>Calories:</td><td>" + a_response.foods[0].nf_calories + "</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_total_fat)) {
        htmlOutput += "<tr><td>Total Fat:</td><td>" + a_response.foods[0].nf_total_fat + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_saturated_fat)) {
        htmlOutput += "<tr><td>Saturated Fat:</td><td>" + a_response.foods[0].nf_saturated_fat + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_cholesterol)) {
        htmlOutput += "<tr><td>Cholesterol:</td><td>" + a_response.foods[0].nf_cholesterol + "mg</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_sodium)) {
        htmlOutput += "<tr><td>Sodium:</td><td>" + a_response.foods[0].nf_sodium + "mg</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_total_carbohydrates)) {
        htmlOutput += "<tr><td>Total Carbohydrates:</td><td>" + a_response.foods[0].nf_total_carbohydrates + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_dietary_fiber)) {
        htmlOutput += "<tr><td>Dietary Fiber:</td><td>" + a_response.foods[0].nf_dietary_fiber + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_sugars)) {
        htmlOutput += "<tr><td>Sugars:</td><td>" + a_response.foods[0].nf_sugars + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_protein)) {
        htmlOutput += "<tr><td>Protein:</td><td>" + a_response.foods[0].nf_protein + "g</td></tr>";
    }
    if (containsData(a_response.foods[0].nf_potassium)) {
        htmlOutput += "<tr><td>Potassium:</td><td>" + a_response.foods[0].nf_potassium + "mg</td></tr>";
    }

    htmlOutput += "</table></p>";

    return htmlOutput;
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
