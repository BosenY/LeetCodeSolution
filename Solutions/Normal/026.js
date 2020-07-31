/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 0;
  let r = 1;
  while (r < nums.length)
    if (nums[r] == nums[l]) {
      r += 1;
    } else {
      l += 1;
      nums[l] = nums[r];
    }
  return l + 1;
};
