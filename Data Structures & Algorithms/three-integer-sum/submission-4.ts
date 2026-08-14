class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][]
    {
        nums.sort((a, b) => a - b)
        let solutions = {}
        // A + B + C = 0
        // 0 - Target = B + C
        //Target = 0 - B - C
        for(let i = 0; i < nums.length; i++){
            let num = nums[i]
            if (i > 0 && num === nums[i - 1]) continue;
            let L = i + 1
            let R = nums.length - 1
            while(L < R){
                if(L == i){
                    L++
                    continue
                }
                if(R == i){
                    R--
                    continue
                }
                //Approach target
                //Target = 0 - B - C
                //Inverse effect, bigger numbers lower the value, smaller numbers increase the value
                const sum = num + nums[L] + nums[R]
                if(sum == 0){
                    let sorted = [num, nums[L], nums[R]].sort((a, b) => a - b)
                    if(!solutions[sorted[0]]){
                        solutions[sorted[0]] = {}
                    }
                    if(!solutions[sorted[0]][sorted[1]]){
                        solutions[sorted[0]][sorted[1]] = []
                    }
                    if(!solutions[sorted[0]][sorted[1]].includes(sorted[2])){
                        solutions[sorted[0]][sorted[1]].push(sorted[2])
                    }
                    while (L < R && nums[L] === nums[L + 1]) L++;
                    while (L < R && nums[R] === nums[R - 1]) R--;
                    L++;
                    R--;
                } else if(sum < 0){
                    L++
                }else{
                    R--
                }
            }
        }
        let ans = []
        for(let [k, v] of Object.entries(solutions) as any){
            for(let [k2, v2] of Object.entries(v) as any){
                for(let v3 of v2){
                    ans.push([Number(k), Number(k2), Number(v3)])
                }
            }
        }
        return ans
    }
}
