/**
 * Problem link: https://leetcode.com/problems/container-with-most-water
 *
 * 11-Container With Most Water
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Solution: Two Pointer, Greedy
 * Next: Trapping Rain Water (H)
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaSlow = function(height) {
    let i = 0, j = height.length - 1, area = 0;
    while(i < j) {
        let minH = Math.min(height[i], height[j]);
        area = Math.max(area, (j-i) * minH)
        while (height[i] <= minH && i < j) {
            i = i + 1;
        }
        while (height[j] <= minH && i < j) {
            j = j - 1;
        }
    }
    return area;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, area = 0;
    while(i < j) {
        area = Math.max(area, (j-i) * Math.min(height[i], height[j]))
        if (height[i] < height[j]) {
            i = i + 1;
        } else {
            j = j - 1;
        }
    }
    return area;
};

console.log('res 1: ', maxArea([1,6,7,2,5,4,8,5,4])); // 30
console.log('res 2: ', maxArea([1,6,7,2,5,4,8,5,4])); // 49
console.log('res 3: ', maxArea([1,6,7,2,5,4,8,5,4])); // 1
