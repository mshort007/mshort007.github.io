function getTodaysDate(date) {
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
    var days = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
  ];

    var weekday = date.getDay();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return days[weekday] + ',' + String.fromCharCode(160) + day + String.fromCharCode(160) + monthNames[monthIndex] + String.fromCharCode(160) + year;
}

function replaceDate() {
    document.getElementById("currentdate").textContent = getTodaysDate(new Date());
}

setTimeout(replaceDate, 2000);
