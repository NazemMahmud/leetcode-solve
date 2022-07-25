/**
 * Problem link: https://leetcode.com/problems/course-schedule-iv
 * Course Schedule IV
 *
 * Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
 * Output: [false,true]
 *
 * Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
 * Output: [false,false]
 *
 * Input: numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
 * Output: [true,true]
 *
 * Solution: BFS
 */

/**
 * Runtime: 675ms (will try again to do better)
 * Memory Usage: 58.9 MB
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function checkIfPrerequisite (numCourses, prerequisites, queries) {
    const res = [];
    const graph = new Map();

    for (const [v, e] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
    }

    for (let i=0; i<queries.length; i++) {
        let [from, to] = queries[i];

        let visited = new Set();
        let queue = [];
        visited.add(from);
        queue.push(from);
        res[i] = false;

        while (queue.length) {
            let course = queue.shift();
            if (graph.has(course)) {
                for (const adj of graph.get(course)) {
                    if (adj === to) {
                        res[i] = true;
                        queue = [];
                        break;
                    }
                    if (!visited.has(adj)) {
                        visited.add(adj);
                        queue.push(adj);
                    }
                }
            }
        }
    }

    return res;
}

const preRequisites1 = [[1,0]];
const preRequisites2 = [];
const preRequisites3 = [[1,2],[1,0],[2,0]];
const preRequisites4 = [[0,1],[1,2]];
const preRequisites5 =[[1,2],[1,0],[2,0]];

console.log("result: ", checkIfPrerequisite(2, preRequisites1, [[0,1],[1,0]]));
console.log("result: ", checkIfPrerequisite(2, preRequisites2,  [[1,0],[0,1]]));
console.log("result: ", checkIfPrerequisite(3, preRequisites3, [[1,0],[1,2]]));
console.log("result: ", checkIfPrerequisite(3, preRequisites4, [[1,0], [0,2], [1,0], [2,0]]));
console.log("result 2: ", checkIfPrerequisite(3, preRequisites5, [[1,0],[1,2]]));
