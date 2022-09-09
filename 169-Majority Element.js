/**
 * Problem link: https://leetcode.com/problems/majority-element
 * 169. Majority Element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than [n/2] times. You may assume that the majority element always exists in the array.
 *
     * Solution: Hashing, Sorting, Boyer-Moore Voting Algorithm
 */

/**
 * Note:
 *
 * hashmap: easier
 * Voting algo: interesting things to learn
 */

// TODO: there are some other ways, will implement later

/**
 * Sort: As it is saying majority is len/2, so sort & find out len/2 position's value :D
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementBySorting = function(nums) {
    nums.sort();
    return (nums[parseInt(nums.length/2)]);
};

var majorityElementByHashing = function(nums) {
    const hash ={};
    for(let num of nums) {
        hash[num] = hash[num] ? hash[num]+1 : 1 ;
    }
    let max = Math.max(...Object.values(hash));

    for(let key in hash) {
        if (hash[key] === max) {
            return key;
        }
    }
};

// console.log("result 1: ", majorityElementBySorting([3,2,3]));
// console.log("result 2: ", majorityElementBySorting([2,2,1,1,1,2,2]));

// console.log("result 1: ", majorityElementByHashing([3,2,3]));
console.log("result 2: ", majorityElementByHashing([20,20,1,1,1,20,20]));
