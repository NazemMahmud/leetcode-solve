/**
 * Problem link: https://leetcode.com/problems/maximum-ice-cream-bars
 * 1833-Maximum Ice Cream Bars
 * Solution: Sort, Array, Greedy, Max number of item can be obtained
 *
 * there are n ice cream bars. given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins.
 * Initially has "coins" coins to spend, and buy as many ice cream bars as possible.
 * Return the maximum number of ice cream bars the boy can buy with "coins" coins.
 *
 * Input: costs = [1,3,2,4,1], coins = 7
 * Output: 4
 * Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
 *
 * Input: costs = [10,6,8,7,7,8], coins = 5
 * Output: 0
 * Explanation: The boy cannot afford any of the ice cream bars.
 *
 *
 *
 * d
 * Next question
 * 1834. Single-Threaded CPU - m
 * More challenges
 * 1711. Count Good Meals - m
 * 1671. Minimum Number of Removals to Make Mountain Array - h
 * 1955. Count Number of Special Subsequences - h
 */

/**
 * faster
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b);
    const len = costs.length;
    let count=0;
    for(let i=0; i<len; i++) {
        if (costs[i] <= coins) {
            count++;
            coins = coins - costs[i];
        } else {
            break;
        }
    }

    return count;
};

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCreamSlow = function(costs, coins) {
    costs.sort((a,b) => a - b);
    const len = costs.length;
    let sum=costs[0];
    let count=0;
    for(let i=1; i<len; i++) {
        if (sum <= coins) {
            count++;
            sum = sum + costs[i];
        }
    }

    if (sum <= coins) { count++;}
    return count;
};


console.log("result 1 : ", maxIceCream( [1,3,2,4,1], 7));
console.log("result 2 : ", maxIceCream( [10,6,8,7,7,8],5)); // 0
console.log("result 3 : ", maxIceCream( [1,6,3,1,2,5],20)); // 6
