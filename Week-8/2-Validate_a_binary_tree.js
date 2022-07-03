function isBinarySearchTree(node) {
    if (node == null)
        return true;
      
    /* if-left > node
            false;
       if-right < node
            false;
    */
    if (node.left != null && node.left.data > node.data)
        return false;
    if (node.right != null && node.right.data < node.data)
        return false;
    return true;
}