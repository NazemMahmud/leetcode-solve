/**
 * Problem link: https://leetcode.com/problems/valid-anagram
 * Valid Anagram
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Solution: String,
 */

/**
 * O (n) 85 ms 44 MB
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    /**
     * Hashmap:
     * *    from source text set counter for each character appear times. Also count total characters
     * For Target text: if specific character exists in the HashMap:
     * *    decrease specific character count and also total char count by 1
     * Else: return false. because if character does not exist in hashmap or after hashmap[ch] = 0, that ch still exists, return false
     * Return True, if total counter becomes 0;
     */
    if(s.length !== t.length) return false;
    const hashMap = { count: 0 };

    for (const ch of s) {
        hashMap[ch] = hashMap[ch] ? hashMap[ch] + 1 : 1;
        hashMap.count = hashMap.count + 1;
    }

    for (const ch of t) {
        if (hashMap[ch] && hashMap[ch] > 0) {
            hashMap[ch] = hashMap[ch] - 1;
            hashMap.count = hashMap.count - 1;
        } else {
            return false;
        }
    }
    return !hashMap.count;
}


console.log("result 1: ", isAnagram('anagram', 'nagaram'));
console.log("result 2: ", isAnagram ('rat', 'car'));
