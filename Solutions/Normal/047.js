/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let hash = {};
  let res = [];
  const len = nums.length;
  function dp(array = [], nums = []) {
    if (array.length === len) {
      if (!hash[JSON.stringify(array)]) {
        hash[JSON.stringify(array)] = true;
        res.push(array);
        return;
      }
    }
    for (let i = 0; i < nums.length; i++) {
      dp([...array, nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)]);
    }
  }
  dp([], nums);

  return res;
};
console.log(permuteUnique([1]));
