/**
 * Problem link: https://leetcode.com/problems/coin-change/
 * Coin Change:
 * Solution: DP, top-down approach, can pick infinite no. of items
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    /**
     * Algo:
     * If target amount = 0, No coin need
     * If target amount 1, at least 1 coin need
     * The maximum no. of coin can be used = target amount.
     *  *   (Ex: Say, target is 4, even if you take the lowest amount, i.e 1, you can use maximum 4 * 1 coin, but not 5. So, if anyhow no. of taken coin > amount, return - 1
     * Save for each coin upto target amount: minimum no. of coin need to reach the target. Use that for next coin
     */

    const max = amount + 1;
    const dp = Array(max).fill(max);
    dp[0] = 0;

    for(let i = 1; i < max; i++) {
        for (let j=0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

console.log('no. of coins 1: ', coinChange([1,2,5], 11)); // 3
console.log('no. of coins 1: ', coinChange([2], 3)); // -1
console.log('no. of coins 1: ', coinChange([1], 0)); // 0
