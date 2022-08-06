/**
 * Problem link: https://leetcode.com/problems/fibonacci-number/
 * Fibonacci Number
 * Solution: DP, top-down approach
 */

/**
 * Top down approach
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if ( n < 2) {
        return n;
    }

    const max = n + 1;
    const fibo = Array(max).fill(max);
    fibo[0] = 0;
    fibo[1] = 1;

    for(let i = 2; i < max; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[n];
};

console.log('Fibo of 2: ', fib(2)); // 1
console.log('Fibo of 3: ', fib(3)); // 2
console.log('Fibo of 4: ', fib(4)); // 3
