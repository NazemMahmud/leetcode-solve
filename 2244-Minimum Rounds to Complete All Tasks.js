/**
 * Problem link: https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks
 * 2244. Minimum Rounds to Complete All Tasks (medium)
 * Solution: Array, Hashmap
 *
 * given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
 * Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.
 *
 * Input: tasks = [2,2,3,3,2,4,4,4,4,4]
 * Output: 4
 * Explanation: To complete all the tasks, a possible plan is:
 * - In the first round, you complete 3 tasks of difficulty level 2.
 * - In the second round, you complete 2 tasks of difficulty level 3.
 * - In the third round, you complete 3 tasks of difficulty level 4.
 * - In the fourth round, you complete 2 tasks of difficulty level 4.
 * It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.
 *
 * Input: tasks = [2,3,3]
 * Output: -1
 * Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level.
 * Hence, you cannot complete all the tasks, and the answer is -1.
 *
 * Next: 2245. Maximum Trailing Zeros in a Cornered Path (M)
 * More challenges: 2451. Odd String Difference (E)
 */

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const frequencyMap = {};
    const len = tasks.length;
    // count frequency of each number
    for (let i=0; i < len; i++) {
        frequencyMap[tasks[i]] = frequencyMap[tasks[i]] ? frequencyMap[tasks[i]] + 1 : 1;
    }

    // if count == 1, for any case not possible => -1
    // if divisible by 3 then increase by 1
    // else:
    //  If remainder is 1, (say 7 freq ), then groups like 3 3 1, 1 is not possible, so make it 3 2 2. that is 7 / 3 = 2 + 1
    //  If remainder is 2, (say 8  freq ), then groups like 3 3 2. that is 8 / 3 = 2 + 1,
    //  so, increase by divisible by 3 + 1
    let rounds = 0;
    for (let elem in frequencyMap) {
        if (frequencyMap[elem] == 1)  {return -1; }

        rounds = rounds + Math.floor(frequencyMap[elem] / 3);
        if (frequencyMap[elem] % 3) {
            rounds++;
        }
    }

    return rounds;
};


var minimumRoundsAnotherSolution = function(tasks) {
    const frequencyMap = {};
    const len = tasks.length;

    for (let i=0; i < len; i++) {
        frequencyMap[tasks[i]] = frequencyMap[tasks[i]] ? frequencyMap[tasks[i]] + 1 : 1;
    }

    if (Object.values(frequencyMap).includes(1)) {
        return -1;
    }

    let rounds = 0;
    for (let elem in frequencyMap) {
        rounds = rounds + Math.floor(frequencyMap[elem] / 3);
        if (frequencyMap[elem] % 3) {
            rounds++;
        }
    }

    return rounds;
};

console.log("result 1: ", minimumRounds( [2,2,3,3,2,4,4,4,4,4])); // 4
console.log("result 2: ", minimumRounds([2,3,3])); // -1
console.log("result 2: ", minimumRounds([7,7,7,7,7,7])); // 2
