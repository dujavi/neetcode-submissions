class MinStack {
    stack: number[] = new Array()

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.slice(-1)[0]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.stack)
    }
}
