/**
 * https://leetcode-cn.com/problems/minimum-operations-to-make-array-equal/
 * 2=》1，3 =》 2 =》 1
 * 3=》1，3，5 =》3  => 2 =》 2
 * 4=》1，3，5，7 =》 4 =》 1，3 =》 4
 * 5 =》1，3，5，7，9 =》 5 =》 2 + 4 = 6
 * 6=》1，3，5，7，9，11 =》 6 =》 1 + 3 + 5 =》 9
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let sum = 0;
  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      sum += 2 * i + 1;
    }
  } else {
    for (let i = 0; i < (n - 1) / 2; i++) {
      sum += 2 * i + 2;
    }
  }
  return sum;
};

console.log(minOperations(4));
