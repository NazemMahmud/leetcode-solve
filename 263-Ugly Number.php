<?php

/**
 * Problem link: https://leetcode.com/problems/ugly-number/
 * 263-Ugly Number
 * Solution: Math
 *
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 * Given an integer n, return true if n is an ugly number.
 */

class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isUgly($n) {
        if ($n <=0 ) { return false; }
        if ($n <= 5) { return true; }
        while($n % 2 == 0) {
            $n = $n / 2;
        }
        while($n % 3 == 0) {
            $n = $n / 3;
        }
        while($n % 5 == 0) {
            $n = $n / 5;
        }

        return $n == 1;
    }
}

/**
 * Example 1: Input: n = 6 Output: true Explanation: 6 = 2 × 3
 * Example 2: Input: n = 1 Output: true Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 * Example 3: Input: n = 14 Output: false Explanation: 14 = 2 * 7
 */
