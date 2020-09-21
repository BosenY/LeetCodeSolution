/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/submissions/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    function dfs(root) {
        if(!root) {
            return
        }
        dfs(root.right)
        root.val += sum
        sum = root.val
        dfs(root.left)
    }
    dfs(root)
    return root
};