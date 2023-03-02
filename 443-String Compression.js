/**
 * Problem link: https://leetcode.com/problems/string-compression
 * 443-String Compression
 * Solution: string, Array, Two Pointers
 *
 * Next question
 * 444. Sequence Reconstruction - m
 * More challenges
 * 38. Count and Say - m
 * 271. Encode and Decode Strings - m
 * 604. Design Compressed String Iterator - e
 */

/**
 * @return {number}
 * @param chars
 * @returns {*}
 */
var compress = function(chars) {
    let i=0; // pointer to go through array
    let j=0; // pointer to update the array
    while(i<chars.length) {
        let count = 1;
        // count for duplicate values
        while (i<chars.length-1 && chars[i] == chars[i+1]) {
            i++;
            count++;
        }
        chars[j] = chars[i]; // replace 1st index with the character
        j++;
        // if count > 9, it has to divide single character string and push into array
        if (count > 1) {
            let counterStr = "" + count;
            for(let k=0; k<counterStr.length; k++) {
                chars[j] = counterStr[k];
                j++;
            }
        }

        i++;
    }
    // if updated array length (index number = j), is less than original length, then the extra indices need to remove
    if (j<chars.length) { chars.splice(j, chars.length - j); }
    return chars.length;
};



console.log('res 1: ', compress(["a","a","b","b","c","c","c"])); // 6
console.log('res 2: ', compress(["a"])); //  1
console.log('res 3: ', compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])); // 4

/**
Example 1:
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Example 2:
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.

Example 3:

Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
*/
