class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if(nums.length == 1){
            return  nums[0]
        }
        //Simple case where the 
        if(nums[nums.length - 1] > nums[0]){
            return nums[0]
        }
        //Find the deflection point (where max and min meet).
        let L = 0
        let R = nums.length - 1
        let mid = Math.floor((L + R) / 2)
        while(R-L > 1){
            //Lowest on the left
            if(nums[mid] < nums[L]){
                R = mid
                mid = Math.floor((L + R) / 2)
                continue
            }
            //Lowest on the right
            L = mid
            mid = Math.floor((L + R) / 2)
        }
        return(nums[mid+1])
    }
}
