/**
 * Problem link: https://leetcode.com/problems/find-the-town-judge
 * 997- Find the Town Judge
 * Solution: Array, Hashmap
 *
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
 * If the town judge exists, then:
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 * You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
 *
 * Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 * Next question
 * 998. Maximum Binary Tree II - m
 * More challenges
 * 277. Find the Celebrity - m
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustedMap = new Array(n+1).fill(0), trustMap = new Array(n+1).fill(0), len = trust.length;
    for(let i=0; i<len; i++) {
        trustMap[trust[i][0]]++;
        trustedMap[trust[i][1]]++;
    }

    for(let i=1; i<=n; i++) {
        if(trustedMap[i] == n-1 && trustMap[i] == 0) {
            return i;
        }
    }

    return -1;
};



console.log("result 1: ", findJudge(5, [[1,2]])); // 2
console.log("result 2: ", findJudge(3, [[1,3],[2,3]])); // 3
console.log("result 3: ", findJudge(3, [[1,3],[2,3],[3,1]])); // -1
