/**
 * Problem link: https://leetcode.com/problems/single-number
 * 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * NOTE: If there is only one unique number in an array, bitwise manipulation (XOR) can work
 * Logic:
 * A^A=0
 * A^B^A=B
 * (A^A^B) = (B^A^A) = (A^B^A) = B This shows that position doesn't matter.
 *
 * Solution: Bitwise manipulation
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = 0;
    for (var i=0; i<nums.length ; i++)
    {
        res = res ^ nums[i];
    }

    return res;
};

/**
 * Normally i would do like this,
 * @param nums
 * @returns {number}
 */
var singleNumberHash = function(nums) {
    // worse
    /*var hash = new Map();
    for (let i=0; i<nums.length ; i++)
    {
       if (hash.has(nums[i])) {
           hash.set(nums[i], hash.get(nums[i]) + 1);
       } else {
           hash.set(nums[i], 1);
       }
    }

    for (let [key, value] of hash)
    {
        if (value === 1) {
            return key;
        }
    }*/

    // FAR MORE WORSE
    var hash = [];
    for (let i=0; i<nums.length ; i++)
    {
        if (hash[nums[i]]) {
            delete hash[nums[i]];
        } else {
            hash[nums[i]] =  1;
        }
    }

    return Object.keys(hash)[0];
};


console.log("result 1: ", singleNumber ([2,2,1])); // 1
console.log("result 2: ", singleNumber ([4,1,2,1,2])); // 4
console.log("result 2: ", singleNumber ([1])); // 1
