/**
 * Problem link: https://leetcode.com/problems/shuffle-an-array
 * 384. Shuffle an Array
 * Solution: Array, Math, Random Number
 *
 * Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
 *
 * Implement the Solution class:
 *
 * Solution(int[] nums) Initializes the object with the integer array nums.
 * int[] reset() Resets the array to its original configuration and returns it.
 * int[] shuffle() Returns a random shuffling of the array.
 *
 * Input
 * ["Solution", "shuffle", "reset", "shuffle"]
 * [[[1, 2, 3]], [], [], []]
 * Output
 * [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

 *
 * Next:
 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.numbers = nums;
    this.origin = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const len = this.numbers.length;

    for (let i = 0; i < len; i++) {
        const j = Math.floor(Math.random() * len);
        [this.numbers[i], this.numbers[j]] = [this.numbers[j], this.numbers[i]]
    }

    return this.numbers;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
