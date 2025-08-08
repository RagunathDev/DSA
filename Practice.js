
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
function value(r) {
    if (r === 'I') 
        return 1;
    if (r === 'V') 
        return 5;
    if (r === 'X') 
        return 10;
    if (r === 'L') 
        return 50;
    if (r === 'C') 
        return 100;
    if (r === 'D') 
        return 500;
    if (r === 'M') 
        return 1000;
    return -1;
}

function romanToInt(s) {
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = value(s[i]);

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }
    return total;
}

var romanNumber2 = "MCMXCIV";
console.log(romanToInt(romanNumber2)); // Output: 1994
var romanNumber = "III";
console.log(romanToInt(romanNumber)); 
var romanNumber1 = "LVIII";
console.log(romanToInt(romanNumber1)); 
