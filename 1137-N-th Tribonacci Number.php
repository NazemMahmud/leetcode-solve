<?php
/**
 * Problem link: https://leetcode.com/problems/n-th-tribonacci-number
 * 1137-N-th Tribonacci Number
 * Solution: Array, Math
 *
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 *
 *
 * Next question
 * 1138. Alphabet Board Path - m
 * More challenges
 * 2140. Solving Questions With Brainpower - m
 * 770. Basic Calculator IV - h
 * 902. Numbers At Most N Given Digit Set - h
 */


class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function tribonacci($n) {
        if ($n<2) { return $n; }
        $tZ = 0; $tO = 1; $tT = 1; $sum = 1;
        for($i=3; $i<=$n; $i++) {
            $sum = $tZ +$tO +$tT;
            $tZ = $tO; $tO = $tT; $tT = $sum;
        }

        return $sum;
    }
}

/**
 * Example 1: Input: n = 4 Output: 4
 * Explanation: T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 */


