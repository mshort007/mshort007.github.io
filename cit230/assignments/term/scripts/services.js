var servicesRequest = new XMLHttpRequest();
var servicesLocation = 'data/services.json';
servicesRequest.open('GET', servicesLocation, true);
servicesRequest.send();

servicesRequest.onload =  function () {
    var servicesData = JSON.parse(servicesRequest.responseText);
    console.log(servicesData);

    var servicesTable = "";

    // Start Table
    servicesTable += "<table>"

    // Loop to Generate Table Items

    // End Table
    servicesTable += "</table>"

    document.getElementById('servicesTable').innerHTML = servicesTable;
}
