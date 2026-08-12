class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        //nums.sort()
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i == j){
                    continue
                }
                if(nums[i] + nums[j] == target){
                    return [i, j].sort()
                }
            }
        }

        //complexity effeciency
        if(nums.length > 100){
            //what is the lowest number
            let lowest = nums[0]
            let max = target - lowest
            let maxIndex = 0
            for(let num of nums){
                if(num > max){
                    break
                }
                maxIndex++
            }
        }
    }
}
