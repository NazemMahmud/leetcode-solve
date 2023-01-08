/**
 * Problem link: https://leetcode.com/problems/gas-station
 * 134-Single Number
 * Solution: Array, Greedy, Max num of point visit in a circular manner
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 *
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
 * You begin the journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
 * otherwise return -1. If there exists a solution, it is guaranteed to be unique
 *
 * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * Output: 3
 * Explanation:
 * Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
 * Travel to station 4. Your tank = 4 - 1 + 5 = 8
 * Travel to station 0. Your tank = 8 - 2 + 1 = 7
 * Travel to station 1. Your tank = 7 - 3 + 2 = 6
 * Travel to station 2. Your tank = 6 - 4 + 3 = 5
 * Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
 * Therefore, return 3 as the starting index.
 *
 * Input: gas = [2,3,4], cost = [3,4,3]
 * Output: -1
 * Explanation:
 * You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
 * Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
 * Travel to station 0. Your tank = 4 - 3 + 2 = 3
 * Travel to station 1. Your tank = 3 - 3 + 3 = 3
 * You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
 * Therefore, you can't travel around the circuit once no matter where you start.
 *
 */


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length, start=0, totalGas=0, totalCost=0, currGas = 0;
    for(let i=0; i<len; i++){
        totalGas = totalGas + gas[i];
        totalCost = totalCost + cost[i];
    }

    if (totalGas < totalCost) {
        return -1;
    }

    /**
     * once we reach the ith position, that means it's possible to get there back in a circular manner
     * that's why, we only need to calculate the path in forward, no need start it again and again
     */
    for(let i=0; i<len; i++){
        if (currGas < 0) {
            currGas = 0;
            start = i;
        }

        currGas = currGas + gas[i] - cost[i];
    }

    return start;

};



console.log("result 1: ", canCompleteCircuit ([1,2,3,4,5], [3,4,5,1,2])); // 3
console.log("result 2: ", canCompleteCircuit ([2,3,4], [3,4,3])); // -1
