var itemSearchAPI = "//trackapi.nutritionix.com/v2/search/item";
//var itemSearchAPI = "https://trackapi.nutritionix.com/v2/search/item";
var appId = "0179d55a";
var appKey = "d674e8619657d62a79ee68f55cfc451d"

function doItemSearch() {
	let myRequest = new XMLHttpRequest();
	// This will come from page, but first we need to have it working with a well known product
	let searchQuery = "0047500010832";
	let requestUrl = itemSearchAPI + '?upc=' + searchQuery + '&claims=false';
	
	myRequest.open('GET', requestUrl, true);
	myRequest.setRequestHeader('x-app-id', appId);
	myRequest.setRequestHeader('x-app-key', appKey);
	myRequest.send();
	
	myRequest.onload = function() {
		let myResponse = JSON.parse(myRequest.responseText);
		// Lets see if this worked so we can pick it apart.
		console.log(myResponse);
	}
}