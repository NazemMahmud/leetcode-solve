/**
 * Problem link: https://leetcode.com/problems/find-original-array-from-doubled-array
 * 2007. Find Original Array From Doubled Array
 *
 * An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
 * Given an array changed, return original if changed is a doubled array.
 * If changed is not a doubled array, return an empty array.
 * The elements in original may be returned in any order.
 *
 * Input: changed = [1,3,4,2,6,8]
 * Output: [1,3,4]
 * Explanation: One possible original array could be [1,3,4]:
 * - Twice the value of 1 is 1 * 2 = 2.
 * - Twice the value of 3 is 3 * 2 = 6.
 * - Twice the value of 4 is 4 * 2 = 8.
 * Other original arrays could be [4,3,1] or [3,1,4].
 *
 * Input: changed = [6,3,0,1]
 * Output: []
 * Explanation: changed is not a doubled array.
 *
 * Input: changed = [1]
 * Output: []
 * Explanation: changed is not a doubled array.
 *
 * Solution: Array, Hash
 *
 * Next: Array of Doubled Pairs
 * Recover the Original Array
 */

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    /**
     * Steps:
     * sort the array
     * hash counter for each element
     * For each sorted element:
     *  If the hash count for, original and double exists
     *      Push into another array,
     *      Until: hash count for original item reach to 0 and original_item_count <= double item count
     *          reduce both original item & double item count
     *
     * If new array length == half of original length , Y || []
     */

    const original = [];
    const hashCount = {};
    const len = changed.length;
    changed.sort((a,b) => a -b);

    for(let i=0; i<len; i++) {
        hashCount[changed[i]] = hashCount[changed[i]] ? hashCount[changed[i]] + 1 : 1;
    }
    if (hashCount[0] > 0 && hashCount[0] % 2) {
        return [];
    }

    for(let i=0; i<len; i++) {
        const double = changed[i] * 2;
        if ( hashCount[changed[i]]  > 0 && hashCount[double]  > 0) {
            while (hashCount[changed[i]] > 0 && hashCount[changed[i]] <= hashCount[double]) {
                original.push(changed[i]);

                hashCount[changed[i]] = hashCount[changed[i]] - 1;
                hashCount[double] = hashCount[double] - 1;
            }

        }
    }

    return original.length == len/2 ? original : [];
};



console.log("result 1: ", findOriginalArray([1,3,4,2,6,8])); // 1 3 4
console.log("result 1: ", findOriginalArray([4,4,2,8,8,2,1])); //
console.log("result 2: ", findOriginalArray([4,4,2,8,8,1])); // 1 4 4
console.log("result 3: ", findOriginalArray([6,3,1,1])); //
console.log("result 4: ", findOriginalArray([6,3,0,1])); //
console.log("result 5: ", findOriginalArray([1])); //
console.log("result 6: ", findOriginalArray([0,0,0,0])); // [0 0]
console.log("result 6: ", findOriginalArray([1,4,2,1])); // [0 0]
//
// 1 = 2 * 1 = 2
