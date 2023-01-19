/**
 * Problem link:https://leetcode.com/problems/subarray-sums-divisible-by-k
 * 974-Subarray Sums Divisible by K
 * Solution: Array, Prefix Sum, Hashmap
 * Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
 * A subarray is a contiguous part of an array.
 *
 * Next question 945. 975. Odd Even Jump - h
 * More challenges
 * 560. Subarray Sum Equals K - m
 * 1590. Make Sum Divisible by P - m
 * 2364. Count Number of Bad Pairs - m
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = new Array(k).fill(0);
    map[0] = 1;
    let sum = 0, res = 0;
    for (let num of nums) {
        sum = (sum + num) % k;
        if (sum < 0) {
            sum += k;
        }
        res += map[sum]++;
    }
    return res;
};



console.log("result 1: ", subarraysDivByK([4,5,0,-2,-3,1],  5)); // 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
console.log("result 2: ", subarraysDivByK([5], 9)); // 0
