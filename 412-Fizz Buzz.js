/**
 * Problem link: https://leetcode.com/problems/fizz-buzz
 * 412-Fizz Buzz
 * Solution: Math
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz1 = function(n) {
    const res = [];
    for(let i=1; i<=n; i++) {
        if (i % 15 == 0) {
            res[i-1] = 'FizzBuzz';
        } else if (i % 5 == 0 ){
            res[i-1] = 'Buzz';
        } else if (i % 3 == 0){
            res[i-1] = 'Fizz';
        } else {
            res[i-1] = '' + i;
        }
    }

    return res;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz2 = function(n) {
    const res = [];
    for(let i=1; i<=n; i++) {
        res[i-1] = '' + i;
    }

    for(let i=2; i<n; i = i + 3) {
        res[i] = 'Fizz';
    }

    for(let i=4; i<n; i = i + 5) {
        res[i] = 'Buzz';
    }

    for(let i=14; i<n; i = i + 15) {
        res[i] = 'FizzBuzz';
    }

    return res;
};

console.log('res 1: ', fizzBuzz1(3)); // ["1","2","Fizz"]
console.log('res 2: ', fizzBuzz1(5)); //  ["1","2","Fizz","4","Buzz"]
console.log('res 3: ', fizzBuzz2(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
