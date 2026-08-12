class DynamicArray {
    vals: number[]
    capacity: number
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.vals = []
        //this.vals = new Array(capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.vals[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.vals[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.vals.length == this.capacity){
            this.resize()
        }
        this.vals.push(n)
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.vals.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
        //this.vals = [...this.vals, ...new Array(this.vals.length)]
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.vals.length
        // console.debug(this.vals)
        // return this.vals.filter((val) => val != undefined).length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
