function localStorageSupported() {
    let result = false;

    if (typeof(Storage) !== "undefined") {
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
