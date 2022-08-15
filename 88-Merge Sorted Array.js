/**
 * Problem link: https://leetcode.com/problems/merge-sorted-array
 * 88: Merge Sorted Array
 *
 * Two pointer / One pointer
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n

 */
var merge = function(nums1, m, nums2, n) {
    var totalLen = m + n - 1;
    m = m-1;
    n = n -1;
    // console.log('init: to', totalLen);
    // console.log('init: m ', m);
    // console.log('init: n', n);
    while (n>=0) {
        nums1[totalLen--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }

    return nums1;
};


/**
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 */


console.log("result 1 ",  merge([1,2,3,0,0,0], 3, [2,5,6], 3 ));
console.log("result 2 ",  merge([1], 1, [], 0 ));
console.log("result 3 ",  merge([0], 0, [1], 1 ));
