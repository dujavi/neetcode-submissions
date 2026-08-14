class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let L = 0
        let R = heights.length - 1
        let bestArea = -1
        while(L < R){
            const dist = R - L
            const leftHeight = heights[L]
            const rightHeight = heights[R]
            let waterHeight = Math.min(leftHeight, rightHeight)
            let area = dist * waterHeight
            if(area > bestArea){
                bestArea = area
            }
            if(leftHeight < rightHeight){
                while(L < R && heights[++L] <= leftHeight){

                }
            }else if(leftHeight > rightHeight){
                while(L < R && heights[--R] <= rightHeight){

                }
            }else{
                L++
                R--
            }
        }
        return bestArea
    }
}
