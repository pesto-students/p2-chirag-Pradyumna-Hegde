class Node {
    #value;
    #next;
    constructor(value) {
        
    }
}

class Linkedlist {
    //Node creator function.
    #Node = (value) => {
        value = value;
        next = null;
    }

    #first;
    #last;
    
    addLast(value) {
        const node = this.#Node(value);

        //if list is empty.
        if(first == null)
            this.#first = this.#last = node;
        else {
            this.#last.#next = node;
            this.#last = node;
        }
    }
}