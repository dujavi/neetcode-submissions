class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')
      for(let i = 0; i < s.length/2; i++){
        if(cleaned[i] != cleaned[cleaned.length - 1 - i]){
          return false
        }
      }
      return true
    }
}
