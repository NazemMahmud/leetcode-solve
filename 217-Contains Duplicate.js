/**
 * Problem link: https://leetcode.com/problems/contains-duplicate
 * Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Solution: Set, Hash
 * TODO NEXT:
 * * E: https://leetcode.com/problems/contains-duplicate-ii/
 * * H: https://leetcode.com/problems/contains-duplicate-iii/
 * * E: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 1st way
    const set = new Set(nums);
    if (set.size == nums.length) {
        return false;
    }
    return true;

    // 2nd way: hash: it takes more time
    /*const hash = {};
    for (let i=0; i< nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] =1;
        }
    }
    return false;*/
}

console.log("result 0: ", containsDuplicate([20,20,1,1,1,20,20]));
console.log("result 1: ", containsDuplicate([1,2,3,1]));
console.log("result 2: ", containsDuplicate( [1,1,1,3,3,4,3,2,4,2]));
console.log("result 3: ", containsDuplicate( [1,2,3,4]));
