/**
 * Problem link: https://leetcode.com/problems/maximum-sum-circular-subarray
 * 918-Maximum Sum Circular Subarray
 * Solution: Array, Max Min, Circular Sub-array
 *
 * Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the array. Formally,
 * the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once. Formally,
 * for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 *
 *
 *
 * Next question: 919. Complete Binary Tree Inserter - M
 * More challenges
 * 215. Kth Largest Element in an Array - m
 * 1439. Find the Kth Smallest Sum of a Matrix With Sorted Rows - h
 * 529. Minesweeper - m
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = -Infinity, currMax = 0, total = 0, minSum = Infinity, currMin = 0, len=nums.length;

    for (let i=0; i<len; i++) {
        currMax = Math.max(currMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currMax);
        currMin = Math.min(currMin + nums[i], nums[i]);
        minSum = Math.min(minSum, currMin);
        total += nums[i];
    }

    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};


console.log("result 1: ", maxSubarraySumCircular([1,-2,3,-2])); // 3: Subarray [3] has maximum sum 3.
console.log("result 2: ", maxSubarraySumCircular([5,-3,5])); // 10: Subarray [5,5] has maximum sum 5 + 5 = 10.
console.log("result 3: ", maxSubarraySumCircular([-3,-2,-3])); //  -2: Subarray [-2] has maximum sum -2.

/**
 * Some more explanation:
 * total - minSum is used to calculate the maximum circular subarray sum, because a circular subarray is defined as a
 * subarray where the end of the subarray connects to the beginning of the array,
 * which means that the minimum subarray sum can be subtracted from the total sum of all elements in the array to get the maximum circular subarray sum.
 *
 * For example, if the array is [5, -3, 5] and the minimum subarray sum is -3,
 * then the maximum circular subarray sum would be total - minSum = 5 + (-3) + 5 = 7.
 *
 * The reason why this is done, is that when the minimum subarray sum is subtracted from the total sum of all elements in the array,
 * the negative elements that the minimum subarray sum contains will be eliminated.
 * The remaining sum will be the maximum circular subarray sum.
 *
 * In the code, it compares the result of maxSum and total - minSum because it wants to return the maximum between
 * the maximum non-circular subarray sum and the maximum circular subarray sum.
 */
