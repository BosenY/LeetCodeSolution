/**
 * https://leetcode-cn.com/problems/multiply-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let resArr = new Array(len1 + len2).fill(0);
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      resArr[len1 + len2 - i - j - 2] += parseInt(num1[i]) * parseInt(num2[j]);
    }
  }
  let high = 0;
  for (let index = 0; index < len1 + len2; index++) {
    resArr[index + 1] += ~~(resArr[index] / 10);
    resArr[index] = resArr[index] % 10;
    high = resArr[index] > 0 ? index : high;
  }
  let res = "";
  for (let i = high; i >= 0; i--) {
    res += resArr[i];
  }
  return res;
};

console.log(multiply("123", "456"));
