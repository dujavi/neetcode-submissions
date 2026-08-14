class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      let stack = []
      for(let c of s){
        if(['(', '{', '['].includes(c)){
          stack.push(c)
          continue
        }
        switch(c){
          case ')':
            if(stack.pop() !='('){
              return false
            }
            continue
          case ']':
            if(stack.pop() !='['){
              return false
            }
            continue
          case '}':
            if(stack.pop() !='{'){
              return false
            }
            continue
        }
        return false
      }
      return stack.length === 0
    }
}
