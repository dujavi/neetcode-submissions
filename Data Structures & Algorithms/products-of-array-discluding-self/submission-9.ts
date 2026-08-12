class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        //Should have used prefix and suffix sums
        
        //Has zero?, //if two zeros then output is all zeros
        let zeroCount = nums.filter((val) => val == 0).length
        if(zeroCount > 1){
            return new Array(nums.length).fill(0)
        }else if(zeroCount == 1){
            if(nums.length === 2){
                return nums.map((val) => val === 0 ? nums[0] + nums[1] : 0)
            }
            const total = nums.reduce((prevVal, curVal) => {
                if(prevVal == 0){
                    return curVal
                }
                return curVal == 0 ? prevVal : prevVal * curVal
            })
            let out = nums.map((value) => value == 0 ? total : 0)
            return out
        }

        //Now we have "clean" efficient numbers (no zeros)
        const total = nums.reduce((prevVal, curVal) => prevVal * curVal)
        return nums.map((value) => total / value)
        let ans = []
        for(let i = 0; i < nums.length; i++){
            let total = 0
            let first = true
            for(let j = 0; j < nums.length; j++){
                if(j == i) continue
                if(first){
                    total = nums[j]
                    first = false
                    continue
                }
                total *= nums[j]
            }
            ans.push(total)
        }
        return ans
    }
}
