const STATUS = {
    FOUND: true,
    NOT_FOUND: false
};

function detectLoop(head) {
    let lazy_pointer = normal_pointer = head;
    let status = STATUS.NOT_FOUND;
    
    while(lazy_pointer !== null && normal_pointer !== null) {
        if(normal_pointer.next === null) return status;
        
        lazy_pointer = lazy_pointer.next;
        let nextNode = normal_pointer.next;
        normal_pointer = nextNode.next 

        if(lazy_pointer === normal_pointer) {
            status = STATUS.FOUND;
            break;
        }
    }
    return status;
}

// console.log(detectLoop(LINKEDLIST_HEAD));