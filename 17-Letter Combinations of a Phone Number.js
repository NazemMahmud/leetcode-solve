/**
 * Problem link: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 *
 * 17: Letter Combinations of a Phone Number
 * Solution: DFS, backtrack, Hash
 */


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) {
        return [];
    }

    const keypads = {
        "2": 'abc',
        "3": 'def',
        "4": 'ghi',
        "5": 'jkl',
        "6": 'mno',
        "7": 'pqrs',
        "8": 'tuv',
        "9": 'wxyz',
    }
    const result = [];
    const dfs = function (index, res) {
        if (index === digits.length) {
            result.push(res.join(''));
            return;
        }
        let keys = keypads[digits[index]];

        for(let ch of keys) {
            res.push(ch);
            dfs(index+1, res);
            res.pop();
        }
    };

    dfs(0, []);
    return result;
};




// console.log('res 1: ', dfs("", 'def'));
console.log('res 1: ', letterCombinations("23"));
console.log('res 2: ', letterCombinations(""));
console.log('res 3: ', letterCombinations("2"));
console.log('res 4: ', letterCombinations("234"));
