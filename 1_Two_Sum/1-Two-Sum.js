/**
 * Problem link: https://leetcode.com/problems/two-sum/
 * Solution Description: https://leetcode.com/problems/two-sum/solutions/3864974/using-hash-map-for-indices-by-comparing-with-the-remaining-number-from-target-o-n/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];
    for (let i=0; i<nums.length; i++) {
        let remain = target - nums[i];
        if (indices[remain] !== undefined) {
            return [indices[remain], i];
        }

        indices[nums[i]] = i;
    }
};



console.log('res 1: ', twoSum([2,7,11,15], 9)); // [0,1]
console.log('res 2: ', twoSum([3,2,4], 6)); // [1,2]
console.log('res 3: ', twoSum([3,3], 6)); // [0,1]


/**
 * took more time = 124 ms
 * @param nums
 * @param target
 * @returns {(number|number)[]}
 */
var twoSum2 = function(nums, target) {
    let hash = [];
    for (let num in nums) {

        if(hash.includes(target-nums[num])) {
            hash.push(nums[num]);
            return [hash.indexOf(target-nums[num]), +num]
        }
        hash.push(nums[num]);
    }
};
