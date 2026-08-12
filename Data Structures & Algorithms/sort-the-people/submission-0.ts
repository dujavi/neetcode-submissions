class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        //Connect them
        let comb = []
        for(let i = 0; i < names.length; i++){
            comb.push({name: names[i], height: heights[i]})
        }
        return comb.sort((a, b) => b.height - a.height).map(p => p.name)
    }
}
