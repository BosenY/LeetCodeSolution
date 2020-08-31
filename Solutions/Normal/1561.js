/**
 * https://leetcode-cn.com/problems/maximum-number-of-coins-you-can-get/
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let arr = piles.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < arr.length / 3; i++) {
    res += arr[i * 2 + 1];
  }
  return res
};
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
