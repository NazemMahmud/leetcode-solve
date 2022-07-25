/**
 * Problem link: https://leetcode.com/problems/course-schedule-ii
 * Course Schedule II
 *
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: [0,1]
 *
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3]
 *
 * Input: numCourses = 1, prerequisites = []
 * Output: [0]
 *
 * Solution: Topological sort
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder (numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = Array(numCourses).fill(0);
    const queue = [];
    const res = [];

    for (const [e, v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }

        inDegree[e]++;
    }


    const courses = new Array(numCourses).fill().map(()=> []);

    for (let [pre, next] of prerequisites) {
        courses[next].push(pre);
    }
    console.log('courses: ', courses);

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const v = queue.shift();
        res.push(v);
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                inDegree[e]--;
                if (inDegree[e] === 0) queue.push(e);
            }
        }
    }

    return numCourses === res.length ? res : [];
}

const preRequisites = [[2,1],[2,6],[2,11],[3,1],[3,6],[3,7],[3,8],[3,12],[4,1],[4,3],[4,9],[5,1],[5,3],[5,12],[6,1],[7,6],[8,6],[8,7],[8,10],[8,12],[9,5],[11,8],[11,10]];

console.log("result: ", findOrder (13, preRequisites));
