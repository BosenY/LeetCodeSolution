/**
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let len = s.length;
  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0 && s.slice(0, i).repeat(len / i) === s) {
      return true;
    }
  }
  return false;
};
console.log(repeatedSubstringPattern("babbabbabbabbab"));
