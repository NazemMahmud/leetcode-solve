/**
 * Problem link: https://leetcode.com/problems/unique-morse-code-words
 * 804: Unique Morse Code Words
 *
 * Solution: Hashmap, Set
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    };
    const res = new Set();
    for (const word of words) {
        let encode = '';
        for(let ch of word) {
             encode += morse[ch];
        }
        res.add(encode);
    }
    return res.size;
};

const words1 = ["gin","zen","gig","msg"];
const words2 = ["a"];
console.log("result 1: ", uniqueMorseRepresentations(words1));
console.log("result 2: ", uniqueMorseRepresentations(words2));
