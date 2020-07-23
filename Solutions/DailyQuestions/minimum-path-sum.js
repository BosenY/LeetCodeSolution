/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  //右下方位置的最小值 = min(左侧位置最小值,上方位置最小值) + self
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && j !== 0) {
        grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
      } else if (i === 0 && j !== 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (i !== 0 && j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      }
    }
  }
  return grid[m - 1][n - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
