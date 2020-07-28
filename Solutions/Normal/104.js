/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   
    function dfs(root, depth) {
        if(!root) return depth
        let leftDepth = dfs(root.left, depth + 1)
        let rightDepth = dfs(root.right, depth + 1)
        return Math.max(leftDepth, rightDepth)
    }
    return dfs(root, 0)
};