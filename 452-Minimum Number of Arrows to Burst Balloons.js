/**
 * Problem link: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description
 * 452-Minimum Number of Arrows to Burst Balloons
 * Solution: Array, Greedy, Minimum number of segment needs to cross
 *
 * Input: points = [[10,16],[2,8],[1,6],[7,12]]
 * Output: 2
 * Explanation: The balloons can be burst by 2 arrows:
 * - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
 * - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
 *
 * Input: points = [[1,2],[3,4],[5,6],[7,8]]
 * Output: 4
 * Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let len = points.length;
    if (len === 1 ) { return 1; }

    points.sort((a, b) => a[1] - b[1]);
    let position = points[0][1];
    let count = 1;
    for(let i=1; i< len; i++) {
        if (position < points[i][0]) {
            count++;
            position = points[i][1];
        }
    }

    return count;

};


console.log('res 1: ', findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2
console.log('res 2: ', findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); //  4
console.log('res 3: ', findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])); // 2
