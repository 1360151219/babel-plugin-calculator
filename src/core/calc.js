function decimalLength(decimal) {
    var splitArray = decimal.toString().split(".");
    if (splitArray.length === 1) {
        return 0;
    }
    return splitArray[1].length;
}
function decimalLenMax(a, b) {
    let aLength = decimalLength(a);
    let bLength = decimalLength(b);
    let max = Math.pow(10, Math.max(aLength, bLength));
    return max;
}

function addCalc(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return a + b;
    }
    let max = decimalLenMax(a, b);
    return (a * max + b * max) / max;
}
function subCalc(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('parmas ' + a + ' and ' + b + ' must be a Number')
    }
    let max = decimalLenMax(a, b)
    return (a * max - b * max) / max
}
function mutiCalc(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('parmas ' + a + ' and ' + b + ' must be a Number')
    }
    let max = decimalLenMax(a, b)
    return ((a * max) * (b * max)) / max / max
}
function diviCalc(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('parmas ' + a + ' and ' + b + ' must be a Number')
    }
    let max = decimalLenMax(a, b)
    return ((a * max) / (b * max)) / max
}
module.exports = {
    addCalc,
    subCalc,
    mutiCalc,
    diviCalc
}