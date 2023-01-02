/**
 * Problem link: https://leetcode.com/problems/detect-capital
 * 520-Detect Capital
 * Solution: String
 */

/**
 *  True cases:
 *  * All letters in this word are capitals, like "USA".
 *  * All letters in this word are not capitals, like "leetcode".
 *  * Only the first letter in this word is capital, like "Google".
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const len = word.length;
    const substr = word.substring(1, len);

    if (word === word.toUpperCase()) { return true; }
    else if (word[0] === word[0].toUpperCase() && substr === substr.toLowerCase()) {
        return true;
    }
    else if (word === word.toLowerCase()) { return true; }

    return false;
};


console.log('result of USA: ', detectCapitalUse("USA"));
console.log('result of leetcode: ', detectCapitalUse("leetcode"));
console.log('result of Google: ', detectCapitalUse("Google"));
console.log('result of FlaG: ', detectCapitalUse("FlaG")); // false
