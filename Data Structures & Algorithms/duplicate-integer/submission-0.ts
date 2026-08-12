class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort()
        let i = 0
        while(i < nums.length - 1){
            if(nums[i] == nums[i+1]){
                return true
            }
            i++
        }
        return false
        // let contains = {};
        // for(let num in nums){
        //     if(contains[num]){
        //         return true
        //     }
        //     contains[num] = true;
        // }
        // return false
    }
}
