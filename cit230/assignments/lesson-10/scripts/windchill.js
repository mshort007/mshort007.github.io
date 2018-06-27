function calculateWindchill(avg, speed) {
    return 35.74 + 0.6215 * avg - 35.74 * Math.pow(speed,0.16) + 0.4275 * avg * Math.pow(speed,0.16);
}
