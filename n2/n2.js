function convertToRoman(num) {
    let numerais = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100],
        ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9],
        ["V", 5], ["IV", 4], ["I", 1]
    ];
    let result = '';

    for (let i = 0; i < numerais.length; i++) {
        while (num >= numerais[i][1]) {
            num -= numerais[i][1];
            result += numerais[i][0];
        }
    }
    return result;
}

console.log(convertToRoman(36));
