/**
 * Problem link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Solution: Max subarray like problem, Kadane's algo
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var curMax = 0, bestMax=0;
    for (var i=1; i<prices.length ; i++)
    {
        curMax = Math.max(0, curMax = curMax + prices[i] - prices[i-1]);
        bestMax = Math.max(curMax, bestMax);
    }

    return bestMax;
};


console.log("result 1: ", maxProfit ([7,1,5,3,6,4])); // 5
console.log("result 2: ", maxProfit ([7,6,4,3,1])); // 0
