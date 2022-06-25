import Stack from "./Stack.js";


class Queue_Special {
    #stack1;
    #stack2;

    constructor() {
        this.#stack1 = new Stack();
        this.#stack2 = new Stack();
    }


    //enQueue() method.
    enQueue(value) {

        //Move all values from stack-1 to stack-2
        while (this.#stack1.length != 0) {
            this.#stack2.push(this.#stack1.pop());
        }
        this.#stack1.push(value);

        //Now, Push all values back to stack-1
        //this makes recently added value to be positioned bottom of the stack-1 => makes deque() = first-in-value.
        while (this.#stack2.length != 0) {
            this.#stack1.push(this.#stack2.pop());
        }
    }

    //deQueue() method.
    deQueue() {
        if (this.#stack1.length === 0) {
            throw new Error(`Queue is empty, Operation can't be fullfilled...`);
        }
        return this.#stack1.pop();
    }
}

export default Queue_Special;