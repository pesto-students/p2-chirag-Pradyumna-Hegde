function rotate(LinkedList, k) {
    let linkedList = LinkedList;
    const n = linkedList.size();
    let head = successor = tail = null;
    let count = 0;

    while(count < k) {
        head = linkedList.this.head;
        tail = getTailNode(head);
        successor = head.next;
        tail.next = head;
        head.next = null;
        head = successor;
        count++;
    }
    return linkedList;
}

function getTailNode(head) {
    let node = head;
    while(node.next !== null) {
        node = node.next;
    }
    return node.next;
}

