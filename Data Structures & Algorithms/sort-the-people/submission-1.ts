class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        //Connect them
        let comb = names.map((name, i) => ({name, height: heights[i]}))
        return comb.sort((a, b) => b.height - a.height).map(p => p.name)
    }
}
