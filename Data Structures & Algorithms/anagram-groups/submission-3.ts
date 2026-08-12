class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length == 0){
            return [[""]]
        }
        let i = 0
        let groups = {}
        let skip
        while(i < strs.length){
            const sortedWord = strs[i].split('').sort().join('')
            skip = false
            if(groups[sortedWord]){
                groups[sortedWord].push(strs[i])
            }else{
                groups[sortedWord] = [strs[i]]
            }
            i++
        }
        return Object.values(groups)
    }
}
