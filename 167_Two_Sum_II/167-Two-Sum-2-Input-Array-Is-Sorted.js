
/**
 * Problem link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 * 167-Two Sum II - Input Array Is Sorted
 * Solution: Array, hashmap, two pointer, binary search
 * using two pointer: Number is already sorted. So, go from start and the end
 *
 * Runtime - 53ms - Beats 91.94%
 * Memory - 42.35mb - Beats 91.24%
 *
 * Next: 653. Two Sum IV - Input is a BST - e
 * 653. Two Sum IV - Input is a BST - e
 * 1099. Two Sum Less Than K - e
 */

/**
 * using two pointer
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length;
    let res = numbers[start] + numbers[end];
    while (res !== target) {
        if (res < target) start++;
        else end--;
        res = numbers[start] + numbers[end];
    }

    return [start+1, end+1];
};

console.log('res 1: ', twoSum([2,7,11,15], 9)); // [1,2]
console.log('res 2: ', twoSum([2,3,4], 6)); // [1,3]
console.log('res 3: ', twoSum([-1,0], -1)); // [1,2]
