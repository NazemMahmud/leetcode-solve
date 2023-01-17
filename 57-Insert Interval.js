/**
 * Problem link: https://leetcode.com/problems/insert-interval
 * 57-Insert Interval
 * Solution: Array
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start
 * and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by start i and
 * intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [], len=intervals.length;
    let i=0;
    // non-overlapping
    while(i<len && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // overlapped arrays
    while(i<len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    res.push(newInterval);

    while(i<len) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};


console.log("result 1: ", insert([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log("result 2: ", insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
