/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * initialize your data structure here.
 */
class MinStack {
    constructor(value){
        this.value=[];
    }


/** 
 * @param {number} x
 * @return {void}
 */
push(...values) {
    values.forEach((x)=>{
        this.value.push(x);
        return this;
    })
};

/**
 * @return {void}
 */
pop() {
    this.value.pop();
    return this;
};

/**
 * @return {number}
 */
top () {
    return this.value[0];
};

/**
 * @return {number}
 */
getMin(n) {
    this.n=n
    return this.value[this.value.length-1];
    this.value.pop();
};
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
