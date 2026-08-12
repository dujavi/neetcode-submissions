class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        //Create metadata
        const metadata = {
            lengths: []
        }
        for(let str of strs){
            metadata.lengths.push(str.length)
        }
        return JSON.stringify(metadata) + '|' + strs.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let loc = str.indexOf('|')
        let metadata = JSON.parse(str.slice(0, loc++))
        
        let strs = []
        for(let i = 0; i < metadata.lengths.length; i++){
            strs.push(str.slice(loc, loc + metadata.lengths[i]))
            loc += metadata.lengths[i]
        }

        return strs
    }
}
