/**
 * Problem link: https://leetcode.com/problems/reverse-bits
 * 190-Reverse Bits
 *
 * Solution: Bit manipulation
 *
 * Steps: For Each bit
 * 0: Set any variable, like res = 0;
 * 1. Check the LSB, by (num & 1). IF 1, then the LSB was 1, otherwise 0
 * 2. Move the LSB to 32 bit right from the left for each bit (31 - i, coz, for 32 bit, it is 0 -> 31 bit)
 * 3. Set res = res | LSB; Here, used OR, because we want to keep whatever the LSB was as MSB
 * 4. Now, shift the original number 1 bit right >> 1, Because already the LSB is calculated, no need of that now
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    console.log('str: ', Number(n).toString(2));
    let res = 0;
    for (let i=0; i < 32; i++) {
        let lsb = (n & 1) << (31-i);
        res = res | lsb;
        n = n>>1;
    }
    /**
     * To ensure, the negative response of specific language, the compiler represents the signed integers using 2's complement notation.
     * Therefore, the output might represent the signed integer -1073741825.
     * that's why used unsigned right shift (>>> three symbol)
     */
    return res>>>0;
}

var reverseBitsFaster = function(n) {
    let res = 0;
    for (let i=0; i < 32; i++) {
        res = res * 2 + n % 2;
        n >>>= 1;
    }

    return res;
};

const num = 11111111111111111111111111111101; // output 3

console.log("result 1: ",num);
console.log("result 1: ", reverseBits (num));
