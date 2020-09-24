/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/merge-two-binary-trees/
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  function merge(tree1, tree2) {
    if (!tree1 && !tree2) {
      return null;
    }
    let val1 = tree1 ? tree1.val : 0;
    let val2 = tree2 ? tree2.val : 0;
    let node = new TreeNode(val1 + val2);
    if (tree1 || tree2) {
      node.left = merge(tree1 ? tree1.left : null, tree2 ? tree2.left : null);
      node.right = merge(
        tree1 ? tree1.right : null,
        tree2 ? tree2.right : null
      );
    }

    return node;
  }
  return merge(t1, t2);
};
