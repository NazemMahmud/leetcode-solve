/**
 * Problem link: https://leetcode.com/problems/longest-subsequence-with-limited-sum
 * 2389. Longest Subsequence With Limited Sum
 *
 * You are given an integer array nums of length n, and an integer array queries of length m.
 * Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that
 * the sum of its elements is less than or equal to queries[i].
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 *
 *
 * Input: nums = [4,5,2,1], queries = [3,10,21]
 * Output: [2,3,4]
 * Explanation: We answer the queries as follows:
 * - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
 * - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
 * - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.
 *
 * Input: nums = [2,3,4,5], queries = [1]
 * Output: [0]
 * Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.
 *
 * Solution: Prefix sum, Greedy, Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const res = [], len = nums.length;
    nums.sort((a,b) => a - b);

    // prefixSum
    for (let i=1; i < len; i++) {
       nums[i] = nums[i-1] + nums[i];
    }

    var binarySearch = function (dp, low, high, key) {
        while (low < high) {
            const mid = low + Math.floor((high-low)/2);
            if (key >= dp[mid]) {
                low = mid+1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    for (let i=0; i < queries.length; i++) {
        res.push(binarySearch(nums, 0, len, queries[i]));
    }

    return res;
}



console.log("result 1: ", answerQueries([4,5,2,1], [3,10,21])); // [2,3,4]
console.log("result 2: ", answerQueries([2,3,4,5],  [1])); // [0]
