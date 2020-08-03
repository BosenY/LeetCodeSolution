/**
 * https://leetcode-cn.com/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let sum  = 0
  let res = ''
  if (len1 > len2) {
    num2 = "0".repeat(len1 - len2) + num2;
  } else {
    num1 = "0".repeat(len2 - len1) + num1;
  }
  for(let i = num1.length - 1; i >= 0; i --) {
    let num = parseInt(sum) + parseInt(num1[i]) + parseInt(num2[i])
    res = num % 10 + res
    sum = parseInt(num / 10)
  }
  if(sum === 0) {
      return res
  } else {
      return sum + res
  }
};
