/**
 * Problem link: https://leetcode.com/problems/integer-to-roman/
 *
 * 12: Integer to Roman
 * Soln: hash, math
 */


/**
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbol = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    let roman = '';
    for (const item in symbol)
    {
        while (num >= symbol[item]) {
            roman += item;
            num -= symbol[item];
        }
    }

    return roman;

};

console.log('res 1: ', intToRoman(3));
console.log('res 2: ', intToRoman(58));
console.log('res 3: ', intToRoman(1994));
