/**
 * https://leetcode-cn.com/problems/integer-break/
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (!dp[i]) dp[i] = 1;
      if (!dp[i - j]) dp[i - j] = 1;
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
};

console.log(integerBreak(10));
