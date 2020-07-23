/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //控制窗口内数组的思路
 let max = 0
 let  str = ""
 for(let i = 0; i < s.length; i ++) {
    if(str.indexOf(s[i]) === -1) {
        str += s[i]
    } else {
       str = str.slice(str.indexOf(s[i])+1) + s[i]
    }
    max= Math.max(max, str.length)
 }
 return max
};