/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [],
      hash = {}
    candidates = candidates.sort((a, b) => a - b)
  
    const dfs = (arr, tar, index) => {
      if (tar == 0) {
        if (!hash[arr.join(',')]) {
          hash[arr.join(',')] = 1
          res.push(arr)
        }
        return
      } else if (tar > 0) {
        for (let i = index + 1; i < candidates.length; i++) {
          if (candidates[i] <= tar) {
            dfs([...arr, candidates[i]], tar - candidates[i], i)
          }
        }
      } else {
        return
      }
    }
  
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        dfs([candidates[i]], target - candidates[i], i)
      }
    }
    return res
  }