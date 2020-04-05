function localStorageSupported() {
    let result = false;

    if (typeof(Storage) !== "undefined") {
        result = true;
    }

    return result;
}
