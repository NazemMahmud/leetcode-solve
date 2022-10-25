/**
 * Problem link: https://leetcode.com/problems/intersection-of-two-arrays-ii
 * 350.Intersection of Two Arrays II
 * Solution: Array, Hashmap, Count
 * 76 ms, faster than 86.14% of JS submissions:
 * Memory Usage: 43 MB, less than 59.52%
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear "as many times as" it shows in both arrays and you may return the result in any order.
 *
 * Next: Find Common Characters, Find the Difference of Two Arrays - E
 * Choose Numbers From Two Arrays in Range - H
 * Intersection of Multiple Arrays - M
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = nums2, cnt = {}, len = nums2.length;
    // pick the largest array
    if (nums2.length < nums1.length) {
        arr = nums1;
        len = nums1.length;
        nums1 = nums2;
    }

    // from large array, hashmap count of a number
    for (let i=0; i<arr.length; i++) {
        cnt[arr[i]] = cnt[arr[i]] ? cnt[arr[i]] + 1 : 1;
    }
    arr = [];

    // from small array, check how many times it exists
    for (let i=0; i<len; i++) {
        if (cnt[nums1[i]] > 0) {
            arr.push(nums1[i]);
            cnt[nums1[i]] = cnt[nums1[i]] - 1;
        }
    }

    return arr;
};

console.log('result 0: ', intersect([1,2,2,1], [2,2])); // [2,2]
console.log('result 1: ', intersect([4,9,5], [9,4,9,8,4])); // [4,9]
console.log('result 2: ', intersect([1,2], [1,1])); // [1]
console.log('result 3: ', intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81],
    [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]));
    // [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]

