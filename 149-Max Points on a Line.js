/**
 * Problem link: https://leetcode.com/problems/max-points-on-a-line
 * 149-Max Points on a Line
 * Solution: Array, Math, Geometry
 *
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane,
 * return the maximum number of points that lie on the same straight line.
 *
 * Next question: 150. Evaluate Reverse Polish Notation - m
 * More challenges - all medium
 * 356. Line Reflection
 * 2152. Minimum Number of Lines to Cover Points
 * 2280. Minimum Lines to Represent a Line Chart
 */

/**
 * Solution logic:
 * A line is determined by two factors,say y=ax+b
 * If two points(x1,y1) (x2,y2) are on the same line (always true).
 * We have (y2-y1)=a(x2-x1),a=(y2-y1)/(x2-x1) a is a rational, b is canceled since b is a constant
 * If a third point (x3,y3) are on the same line. So we must have y3=ax3+b
 * Thus,(y3-y1)/(x3-x1)=(y2-y1)/(x2-x1)=a
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const len = points.length;
    if (len <=2) { return len; }
    let max = 0;
    for(let i=0; i< len; i++) {
        for(let j=i+1; j< len; j++) {
            let x1 = points[i][0], y1 = points[i][1];
            let x2 = points[j][0], y2 = points[j][1];
            let count=2;
            for(let k=j+1; k< len; k++) {
                let x3 = points[k][0], y3 = points[k][1];
                if ((x2-x1) * (y3-y1) == (x3-x1) * (y2-y1))
                {
                    count++;
                }
            }

            max = Math.max(count,max);
        }
    }

    return max;
};


console.log("result 1: ", maxPoints([[1,1],[2,2],[3,3]])); // 3
console.log("result 2: ", maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])); // 4
