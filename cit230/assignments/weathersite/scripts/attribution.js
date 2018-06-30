function attribution() {
    var i, found = false;
    var urlArray = (document.location.href).split('/');
    var pageName = urlArray[urlArray.length - 1];
    var attribPages = ["franklin.html", "greenville.html", "springfield.html"];

    for (i=0;i < attribPages.length ; i++) {
        if (pageName === attribPages[i]) {
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById('requiredAttrib').className = 'hidden';
    }
}
// Delay so other items can load fully before running.
setTimeout(attribution, 2500);
