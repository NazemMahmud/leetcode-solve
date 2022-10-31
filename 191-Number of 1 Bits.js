/**
 * Problem link: https://leetcode.com/problems/number-of-1-bits
 * 191-Number of 1 Bits
 * Solution: Bit manipulation
 *
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type.
 * It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 *
 * Runtime: 69 ms, 41.9 MB,
 * Next challenges: Counting Bits,  Binary Watch, Hamming Distance, Binary Number with Alternating Bits, Prime Number of Set Bits in Binary Representation
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n!=0) {
        n = n & (n-1);
        count = count + 1;
    }

    return count;
};

const num = 11111111111111111111111111111101; // output 3

console.log("result 1: ", hammingWeight(00000000000000000000000000001011)); // 3
console.log("result 1: ", hammingWeight(00000000000000000000000010000000)); // 1
console.log("result 1: ", hammingWeight(11111111111111111111111111111101)); // 31
