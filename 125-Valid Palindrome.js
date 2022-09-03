/**
 * Problem link: https://leetcode.com/problems/valid-palindrome
 * 125. Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Solution: Two Pointers
 */


/**
 * Slower
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var alphanum = s.replace(/[\W_]/g, '');
    if (!alphanum.length) {
        return true;
    }
    alphanum = alphanum.toLowerCase();
    var i = 0, j = alphanum.length - 1;
    while (i<=j) {
        if (alphanum[i] != alphanum[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeFaster = function(s) {
    let i = 0, j = s.length - 1;

    function charOrDigit(i) {
        return (
            ('0' <= s[i] && s[i] <= '9')
            || ('A' <= s[i] && s[i] <= 'Z')
            || ('a' <= s[i] && s[i] <= 'z')
        );
    }

    while (i < j) {
        if (!charOrDigit(i)) {
            i++;
        } else if (!charOrDigit(j)) {
            j--;
        } else {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
    }

    return true;
};

// another solution to use stack;
/**
 * var alphanum = s.replace(/[\W_]/gi, '').toLowerCase().split('');
 * 1st loop: stack.push(each alphanum)
 * 2nd loop: stack.pop() != alphanum[i] return false [0<=i<alphanum.length]
 */

console.log("result 1: ", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("result 1: ", isPalindrome(" ")); // true
console.log("result 2: ", isPalindrome( "race a car")); // false
console.log("result 2: ", isPalindrome( "ab_a? #$%^&*()_+")); // true
