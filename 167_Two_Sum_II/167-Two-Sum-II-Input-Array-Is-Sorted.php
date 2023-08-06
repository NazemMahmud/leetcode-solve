<?php
/**
 * Problem link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 * 167-Two Sum II - Input Array Is Sorted
 * Solution: Array, hashmap, two pointer, binary search (but I used hashing, I will try others later)
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that
 * they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 *
 * Next: Two Sum - Easy
 * Two Sum IV - Input is a BST - Easy
 * Two Sum Less Than K - Easy - Premium
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $indexMap = [];
        $len = count($nums);
        for($i=0; $i<$len; $i++) {
            $remain = $target - $nums[$i];
            if (isset($indexMap[$remain])) {
                return [$indexMap[$remain], $i+1];
            }
            $indexMap[$nums[$i]] = $i+1;
        }
    }
}

$solution1 = new Solution();
$solution2 = new Solution();
$solution3 = new Solution();
print_r("res 1: ");
print_r($solution1->twoSum([2,7,11,15], 9)); // The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
print_r("res 2: ");
print_r($solution2->twoSum([2,3,4], 6)); // The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
print_r("res 3: ");
print_r($solution3->twoSum([-1,0], -1)); // The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
