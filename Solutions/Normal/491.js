/**
 * https://leetcode-cn.com/problems/increasing-subsequences/
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let hash = {}
  function dp(currentArr = [], restArr = []) {
    if (restArr.length === 0) {
      return;
    } else {
      for (let i = 0; i < restArr.length; i++) {
        if (
          currentArr.length === 0 ||
          restArr[i] >= currentArr[currentArr.length - 1]
        ) {
          let arr = currentArr.concat(restArr[i]);
          if(arr.length >= 2 && !hash[JSON.stringify(arr)]) {
            res.push(arr);
            hash[JSON.stringify(arr)] = true
          }
          dp(arr, [...restArr.slice(i + 1)]);
        }
      }
    }
  }
  dp([], nums);
  return res;
};
console.log(findSubsequences([4, 2, 7, 7]));
