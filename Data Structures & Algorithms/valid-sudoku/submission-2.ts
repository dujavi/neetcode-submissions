class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let groups = new Array(27)
        for(let i = 0; i < 27; i++){
            groups[i] = new Set()
        }
        // for(let i = 0; i < 9 * 3; i++){
        //     groups[i] = {}
        // }
        //9x3 groups; for each x, for each y, and then groups of 3 by 3s (can use modulus?)
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const val = board[i][j]
                if(val != "."){
                    if(groups[i].has(val)){
                        return false
                    }
                    groups[i].add(val)
                    
                    let squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                    if(groups[squareIndex + 18].has(val)){
                        return false
                    }
                    groups[squareIndex + 18].add(val)

                    if(groups[j+9].has(val)){
                        return false
                    }
                    groups[j+9].add(val)
                }
            }
        }
        // for(let group of Object.values(groups)){
        //     if(group.length == 9){
        //         if(group.sort().reduce((prevVal, curVal) => 
        //             prevVal == curVal ? curVal : ''
        //             ).length > 0){
        //                 return false
        //             }
        //         continue
        //     }
        //     return false
        // }
        return true
    }
}
