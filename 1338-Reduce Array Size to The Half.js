/**
 * Problem link: https://leetcode.com/problems/reduce-array-size-to-the-half
 * 1338: Reduce Array Size to The Half
 *
 * Input: arr = [3,3,3,3,5,5,5,2,2,7]
 * Output: 2
 *
 * Solution: Hash, Sort, Greedy
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    /**
     * find frequency of every number
     * sort them
     * subtract them until it is reduced to array size <=half size
     */

    let frequency = Array();

    for (const item of arr) {
        frequency[item] = frequency[item] + 1 || 1;
    }
    frequency = Object.values(frequency);
    frequency = frequency.sort();
    let size = 0;
    let len = 0;
    const halfLen = arr.length / 2;
    for (let item=frequency.length - 1; item>=0 ; item--) {
        size++;
        len += frequency[item];
        if (len >= halfLen) {
            return size;
        }
    }
    return size;
}



console.log("result 1: ", minSetSize([7,7,7,7,7,7])); // 1
console.log("result 2: ", minSetSize([3,3,3,3,5,5,5,2,2,7])); // 2
