/**
 * https://leetcode-cn.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  function dfs(index, k, n, arr = []) {
    if (arr.length === k) {
      if (n === 0) {
        res.push([...arr]);
      }

      return;
    }
    for (let i = index + 1; i <= 9; i++) {
      arr.push(i);
      dfs(i, k, n - i, arr);
      arr.pop();
    }
  }
  dfs(0, k, n, []);
  return res;
};
