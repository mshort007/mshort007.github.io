function activateNav() {
    var urlString, urlArray, menu, i, currentFile, page;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    page = urlArray[urlArray.length - 1];

    if (page !== "") {
        menu = document.querySelectorAll('ul#navMenu li a');
        for (i = 0; i < menu.length; i++) {
            currentFile = (menu[i].getAttribute('href'));
            menu[i].className = '';
            if (currentFile === page) {
                menu[i].className = 'active';
            }
        }
    }
}

// Delay before setting so that nav element has time to load.
setTimeout(activateNav, 250);
