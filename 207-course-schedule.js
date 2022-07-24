/**
 * Problem link: https://leetcode.com/problems/course-schedule/
 * Course Schedule
 *
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 *
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 *
 * Solution: Topological sort
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish (numCourses, prerequisites) {
    const graph = new Map();
    const inDegrees = Array(numCourses).fill(0);
    const queue = [];

    for (const [edge, vertex] of prerequisites) {
        if (graph.has(vertex)) {
            graph.get(vertex).push(edge);
        } else {
            graph.set(vertex, [edge]);
        }

        inDegrees[edge]++;
    }

    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const vertex = queue.shift();
        if (graph.has(vertex)) {
            for (const edge of graph.get(vertex)) {
                inDegrees[edge]--;
                if (inDegrees[edge] === 0) queue.push(edge);
            }
        }
        numCourses--;
    }

    return numCourses === 0;
}

const preRequisites = [[2,1],[2,6],[2,11],[3,1],[3,6],[3,7],[3,8],[3,12],[4,1],[4,3],[4,9],[5,1],[5,3],[5,4],[5,12],[6,1],[7,6],[8,6],[8,7],[8,10],[8,12],[9,5],[11,8],[11,10]]
const res = canFinish (13, preRequisites);

console.log("result: ", res);
