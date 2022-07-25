/**
 * Problem link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 * 34: Find First and Last Position of Element in Sorted Array
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 * Solution: Binary Search
 */

/**
 * Runtime: 69 ms
 * Memory Usage: 42.6 MB
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    /**
     * If empty array, can't find any solution
     * Search for 1st position using binary search:: always try to push to the left smaller side.
     * i.e. never try to make end index value > mid index value. So, even if nums[mid] = target, keep end = mid
     * Now, if nums[start] != target, number is not present
     * If start index found, search for last position
     * Make start = the lowest index, found from previous search
     * Now try to push to the right bigger side. i.e. never go left of mid position. So, if nums[mid] <= target, low = mid+1
     * And, also always try to make high = mid - 1, so that not run towards infinite loop
     * Now: there are two conditions: Target may appear in the lower index OR before lower index (in case of target appears only once)
     */
    if (!nums.length) { return [-1,-1] }

    let low = 0;
    let end = nums.length - 1;

    while (low < end) {
        const mid = Math.floor((low+end)/2);
        if (nums[mid] >= target) {
            end = mid;
        } else {
            low = mid + 1;
        }
    }

    if (nums[low] !== target) { return [-1, -1]; }

    const start = low;
    end = nums.length - 1;

    while (low < end) {
        const mid = Math.floor((low+end)/2);
        if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            end = mid;
        }
    }

    return [start, nums[low] === target ? low : low -1]
}



const array1 = [5,7,7,8,8,10];
const array2 = [5,7,7,8,8,10];
const array3 = [];

console.log("result 1: ", searchRange(array1, 8));
console.log("result 2: ", searchRange(array2, 6));
console.log("result 3: ", searchRange(array3, 0));
