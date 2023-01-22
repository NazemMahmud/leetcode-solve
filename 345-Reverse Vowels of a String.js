/**
 * Problem link: https://leetcode.com/problems/reverse-vowels-of-a-string
 * 345-Reverse Vowels of a String
 * Solution: String, Two pointers
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * Next: 346. Moving Average from Data Stream
 * More challenges
 * 1119. Remove Vowels from a String
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let end = s.length, res = s.split(""), rev=[];
    const vowels = "aeiouAEIOU";
    for(let i=0; i<end; i++) {
        if(vowels.includes(res[i])){
            rev.push(res[i]);
        }
    }
    for(let i=0; i<end; i++) {
        if(vowels.includes(res[i])){
            res[i] = rev.pop();
        }
    }

    return res.join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels2 = function(s) {
    let start = 0, end = s.length - 1, res = s.split("");
    const vowels = "aeiouAEIOU"
    while(start < end) {
        while(start < end && !vowels.includes(s[start])){
            start++;
        }
        while(start < end && !vowels.includes(s[end])){
            end--;
        }

        [res[start], res[end]] = [res[end], res[start]];
        start++; end--;
    }

    return res.join("");
};

console.log('result 0: ', reverseVowels("hello")); // "holle"
console.log('result 1: ', coinChange("leetcode")); // "leotcede"
