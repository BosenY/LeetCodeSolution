/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let rest = 0;
  let node = new ListNode(null);
  let res = node;
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let val = (val1 + val2 + rest) % 10;
    rest = parseInt((val1 + val2 + rest) / 10);
    res.next = new ListNode(val);
    res = res.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (rest > 0) {
    res.next = new ListNode(rest);
    res = res.next;
  }
  return node.next;
};
