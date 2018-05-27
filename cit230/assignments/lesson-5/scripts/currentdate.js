function getTodaysDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + String.fromCharCode(160) + monthNames[monthIndex] + String.fromCharCode(160) + year;
}

