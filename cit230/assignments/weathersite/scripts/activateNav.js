function hideNavBanner(prefix) {
    var i, urlArray, found, pageName;
    urlArray = (document.location.href).split('/');
    pageName = urlArray[urlArray.length - 1];
    var navBannerPages = ["franklin.html", "greenville.html", "springfield.html"];
    found = false;

    for (i = 0; i < navBannerPages.length; i++) {
        if (pageName === navBannerPages[i]) {
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById('navBanner').className = 'hidden';
    } else {
        // Set Nav Banner <img> src, alt, and srcset.
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
                hideNavBanner(prefix);
            }
        }
    }
}

// Delay before setting so that nav element has time to load.
setTimeout(activateNav, 250);
