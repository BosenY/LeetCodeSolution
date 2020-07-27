/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    if (!root) return []
  let max = 0,
    res = [],
    preNum = undefined,
    num = 0;

  dfs(root);
  console.log(res)
  return res;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);

    if (preNum === root.val) {
      num++;
    } else {
      num = 1;
    }

    if (num === max) {
      res.push(root.val);
    } else if (num > max) {
      res = [root.val];

      max = num;
    }

    preNum = root.val;

    dfs(root.right);
  }
};

console.log(findMode([2147483647]))
