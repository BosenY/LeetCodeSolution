/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true
     const dfs = (root) => {
         if(!root) return 0
         return 1 + Math.max(dfs(root.left) , dfs(root.right))
     }
     if(Math.abs(dfs(root.left) - dfs(root.right)) > 1) {
         return false
     } else {
         if(isBalanced(root.left) && isBalanced(root.right)) {
             return true
         } else {
             return false
         }
     }
 };