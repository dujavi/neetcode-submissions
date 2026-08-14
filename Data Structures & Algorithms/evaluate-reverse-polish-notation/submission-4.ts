class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
      let nums = []
      for(let token of tokens){
        if(['-', '+', '*', '/'].includes(token)){
          const right = nums.pop()
          const left = nums.pop()
          switch(token){
            case '-':
              nums.push(left - right)
              continue
            case '/':
              nums.push(Math.trunc(left / right))
              continue
            case '*':
              nums.push(left * right)
              continue
            case '+':
              nums.push(left + right)
              continue
          }
        }
        nums.push(parseInt(token))
      }
      return nums[0]
    }
}
