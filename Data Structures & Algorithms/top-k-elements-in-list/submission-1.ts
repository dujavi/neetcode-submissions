class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //count each
        let counts: Record<number, number> = {}
        for(let num of nums){
            if(counts[num]){
                counts[num]++
            }else{
                counts[num] = 1
            }
        }
        //Convert to array pairs
        let countsArr = Object.entries(counts)
        //Sort array by value (count)
        countsArr.sort((a, b) => b[1] - a[1])
        let out = []
        for(let i = 0; i < k; i++){
            out.push(countsArr[i][0])
        }
        return out
    }
}
