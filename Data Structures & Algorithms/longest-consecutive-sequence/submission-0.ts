class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
      let set = new Set(nums)
      let maxLength = 0
      for(let num of nums){
        if(!set.has(num - 1)){
          let length = 1
          let n = num + 1
          while(set.has(n)){
            length++
            n++
          }
          if(length > maxLength){
            maxLength = length
          }
        }
      }
      return maxLength
    }
}
