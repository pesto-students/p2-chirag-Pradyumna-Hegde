class Node {
  #value;
  #leftChild;
  #rightChild;

  constructor(value) {
    this.#value = value;
    this.#leftChild = null;
    this.#rightChild = null;
  }
}

let root = null;

function print_tree() {
  const h = height(root);
  for (let i = 0; i < h; i++) 
    print_level(root, i);
}

function height(root) {
  if (root == null) return 0;
  else {    
    let left_height = height(root.leftChild);
    let right_height = height(root.rightChild);

    if (left_height > right_height) 
        return left_height + 1;
    else return right_height + 1;
  }
}


function print_level(root, level) {
  if (root == null) return;

  if (level == 1) 
    console.log(root.value + " ");
    
  if (level > 1) {
    print_level(root.leftChild, level - 1);
    print_level(root.rightChild, level - 1);
  }
}
