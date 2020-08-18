/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  function dfs(list = []) {
    if (list.length === 0) {
      return null;
    }
    let mid = ~~(list.length / 2);
    return new TreeNode(
      list[mid],
      dfs(list.slice(0, mid)),
      dfs(list.slice(mid + 1))
    );
  }
  return dfs(list);
};
