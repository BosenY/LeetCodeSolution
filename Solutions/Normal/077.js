/**
 * https://leetcode-cn.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  function dfs(cur, n, k, arr = []) {
    if (arr.length + n - cur + 1 < k) {
      return;
    }
    if (arr.length === k) {
      res.push(arr);
      return;
    }
    dfs(cur + 1, n, k, arr);
    dfs(cur + 1, n, k, [...arr, cur]);
  }
  dfs(1, n, k, []);
  return res;
};

console.log(combine(4, 2));
