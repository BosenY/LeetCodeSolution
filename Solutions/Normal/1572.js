/**
 * https://leetcode-cn.com/problems/matrix-diagonal-sum/
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let len = mat.length;
  for (let i = 0; i < len; i++) {
    sum += mat[i][i];
    sum += mat[i][len - 1 - i];
  }
  if (len % 2 !== 0) {
    sum -= mat[(len - 1) / 2][(len - 1) / 2];
  }
  return sum;
};
