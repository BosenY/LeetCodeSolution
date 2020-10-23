/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    //快慢指针
    fast = fast.next.next;
    slow = slow.next;
  }
  let pre = null,
    mid = slow;
  //翻转后半段
  while (mid != null) {
    let temp = mid.next;
    mid.next = pre;
    pre = mid;
    mid = temp;
  }
  mid = head;
  let tail = pre;
  //前半段和后半段的翻转做对比
  while (tail != null) {
    if (mid.val != tail.val) {
      return false;
    }
    mid = mid.next;
    tail = tail.next;
  }
  return true;
};
