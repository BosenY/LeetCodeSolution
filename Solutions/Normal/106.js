/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function build(inorder = []) {
        if(inorder.length === 0) {
            return null
        }
        let midVal = postorder.pop(), midIndex = inorder.indexOf(midVal)
        let node = new TreeNode(midVal)
        node.right = build(inorder.slice(midIndex + 1))
        node.left = build(inorder.slice(0,midIndex))
        return node
    }
    return build(inorder)
};