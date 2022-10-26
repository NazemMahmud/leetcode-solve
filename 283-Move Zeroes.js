/**
 * Problem link: https://leetcode.com/problems/move-zeroes
 * 283-Move Zeroes
 * Solution: Array, pointer
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note: you must do this in-place without making a copy of the array.
 *
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Input: nums = [0]
 * Output: [0]
 *

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0;
    for(let i=0; i<nums.length; i++ ) {
        if (nums[i] == 0 ) {
            pos = pos+1;
        }
        else if(pos > 0) {
            nums[i-pos] = nums[i];
            nums[i] = 0;
        }
    }

    return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesInitialIdea = function(nums) {
    const len = nums.length;
    if (len == 1) {
        return nums;
    }

    let pos = -1;
    for(let i=0; i<len; i++ ) {
        if (nums[i] != 0 & pos > -1) {
            [nums[pos], nums[i]] = [nums[i], nums[pos]]
            pos = pos+1;
        } else if(nums[i] == 0 & nums[i] != nums[i-1]) {
            pos = i;
        }
    }

    return nums;
};

console.log("result 1: ", moveZeroes([0,1,0,3,12])); [1,3,12,0,0]
console.log("result 2: ", moveZeroes ([0])); // [0]
