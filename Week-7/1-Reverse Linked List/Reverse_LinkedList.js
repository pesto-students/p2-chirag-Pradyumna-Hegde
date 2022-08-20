import LinkedList from "./LinkedList.js";

function reverse_LinkedList() {
    let previous = next = null;
    let current = node;
    
    while(current !== null) {
        next = current.next;
        previous = current;
        current.next = null;
        current = next;
        node = previous;
    }
    return node;
}
