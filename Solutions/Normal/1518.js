/**
 * https://leetcode-cn.com/problems/water-bottles/
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let result = 0,
    rest = 0;
  while (numBottles + rest >= numExchange) {
    result += numBottles;
    let newNumBottles = parseInt((numBottles + rest) / numExchange);
    rest = (numBottles + rest) % numExchange;
    numBottles = newNumBottles;
  }
  return result + numBottles
};
numWaterBottles(9,3)

