class Node{
    #value;
    #leftChild;
    #rightChild;

    constructor(value) {
        this.#value = value;
        this.#left = null;
        this.#right = null;
    }
 
}
 
// Utility function to create a new node
function node(value) {
 
    const temp = new Node(value);
    temp.value = value;
    temp.left = null;
    temp.right = null;
    return temp;
 
}
 
function height(root) {
    let depth = 0; //variable to track depth.
    const q = [];
     
    // pushing root node along with null
    q.push(root);
    q.push(null);

    while(q.length > 0){
        let node = q.shift();
     
        /* if-null encountered
                depth+=1;
           else if-null not encountered
                please continue;
        */

        if(node == null)
            depth += 1;
        else if (node != null) {
            if(node.leftChild)
                q.push(node.leftChild);
             
            if(node.rightChild)
                q.push(node.rightChild);
        } else if(q.length>0)
            q.push(null);
    }

    return depth;
}