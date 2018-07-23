var servicesRequest = new XMLHttpRequest();
var servicesLocation = 'https://mshort007.github.io/cit230/assignments/term/data/services.json';
servicesRequest.open('GET', servicesLocation, true);
servicesRequest.send();

servicesRequest.onload =  function () {
    var servicesData = JSON.parse(servicesRequest.responseText);
    console.log(servicesData);

    var servicesTable = "";

    // Loop to Generate Tables
    var outter, inner;
    for (outter = 0; outter < servicesData.services.length; outter++) {
        servicesTable += "<table class=\"srvTable\">\n"
        servicesTable += "<tr>\n<td class=\"tableHeader\" colspan=\"2\">" + servicesData.services[outter].tableName + "</td>\n</tr>\n"
        for (inner = 0; inner < servicesData.services[outter].tableItems.length; inner++) {
            servicesTable += "<tr>\n";
            servicesTable += "<td>" + servicesData.services[outter].tableItems[inner].serviceName + "</td>\n";
            servicesTable += "<td>" + servicesData.services[outter].tableItems[inner].servicePrice + "</td>\n";
            servicesTable += "</tr>\n"
        }
        servicesTable += "</table>\n"
    }

    document.getElementById('servicesTables').innerHTML = servicesTable;
}
