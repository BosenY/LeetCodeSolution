/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let res = 0;
  function dfs(root, deep = 0) {
    if (!root) {
      return;
    }
    if (root.right) {
      dfs(root.right, deep + 1);
    }
    if (root.left) {
      dfs(root.left, deep + 1);
    }
    if (!root.left && !root.right) {
      if (!res) {
        res = deep + 1;
      } else {
        res = Math.min(res, deep + 1);
      }
    }
  }
  dfs(root, 0);
  return res;
};
