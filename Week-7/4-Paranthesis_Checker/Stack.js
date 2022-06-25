class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    push(value) {
        this.#stack.push(value);
    }

    pop() {
        if(this.isEmpty()) throw new Error(`Stack is empty..!, Operation Failed`);
        else return this.#stack.pop();
    }

    isEmpty() {
        return this.#stack.length === 0;
    }
}

export default Stack;