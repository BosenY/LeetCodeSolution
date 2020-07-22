/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let start = 0
    let end = numbers.length - 1
    //如果是顺序的 则直接返回最开始的
    if(numbers[start] < numbers[end]) {
        return numbers[start]
    } else {
        //如果不是 则需要找最开始的那个
        while(start < end) {
            if(numbers[start] < numbers[end]) {
                return numbers[start]
            }
            let mid = parseInt((start + end) / 2)
            if(numbers[mid] > numbers[end]) {
                start = mid + 1
            } else if (numbers[mid] < numbers[end]) {
                end = mid
            } else {
                start = start + 1
            }
        }
        return numbers[start]
    }
};