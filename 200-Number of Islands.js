/**
 * Problem link: https://leetcode.com/problems/number-of-islands
 * Number of Islands
 *
 * Solution: DFS || BFS
 */

/**
 * DFS solution: easy recursive
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let noi = 0;
    for (let i=0; i < grid.length; i++) {
        for (let j=0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                noi++;
                dfs(grid, i, j);
            }
        }
    }

    return noi;
}

var dfs = function (grid, row, col) {
    if (row < 0 || col < 0 || row == grid.length  || col == grid[0].length || grid[row][col] == '0') {
        return;
    }
    grid[row][col] = '0';
    dfs(grid, row-1, col);
    dfs(grid, row+1, col);
    dfs(grid, row, col-1);
    dfs(grid, row, col+1);
}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]; // Output: 1

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]; // output 3


console.log("result 1: ", numIslands (grid1));
console.log("result 1: ", numIslands (grid2));
