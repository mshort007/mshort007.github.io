function activateNav() {
    var urlString, urlArray, pageHREF, menu, i, currentURL, prefixArray, prefix;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    pageHREF = urlArray[urlArray.length - 1];
    prefixArray = pageHREF.split('.');
    prefix = prefixArray[0];

    if (pageHREF !== "") {
        menu = document.querySelectorAll('ul#navMenu li a');
        for (i = 0; i < menu.length; i++) {
            currentURL = (menu[i].getAttribute('href'));
            menu[i].className = '';
            if (currentURL === pageHREF) {
                menu[i].className = 'active';

                // Set Nav Banner in here, since this will execute only once.
                // Outside of here would cause it to execute multiple times.
                var imgSrc = "images/" + prefix + "-md.jpg";
                var imgAlt = prefix + " Weather Banner";
                imgAlt = imgAlt.toUpperCase();
                var srcSet = "images/" + prefix + "-sm.jpg 600w, " +
                             "images/" + prefix + "-md.jpg 1024w, " +
                             "images/" + prefix + "-lg.jpg 1920w";

                document.getElementById('navBanner').src = imgSrc;
                document.getElementById('navBanner').alt = imgAlt;
                document.getElementById('navBanner').srcset = srcSet;
            }
        }
    }
}
// Delay before setting so that nav element has time to load.
setTimeout(activateNav, 250);
