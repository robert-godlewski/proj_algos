console.log('###############################');
console.log('Binary Trees');


// Binary Tree
class BT {
    constructor() {
        this.root = null;
    }

    // Trees todo 1 assignment - Not a correct solution
    /*
    add(val, node=this.root) {
        if (node.left) {
            return this.add(val, node.left);
        }
        if (node.right) {
            return this.add(val, node.right);
        }
        if (!node.left) {
            node.left = new Node(val);
            return this;
        }
        if (!node.right) {
            node.right = new Node(val);
            return this;
        }
    }*/
    // Correct solution; Do iritively
    add(val) {
        if (this.root) {
            var current_node = this.root;
            while (current_node) {
                // val > runner.data => add to the right branch
                // val <= runner.data => add to the left branch
                if (val>current_node.data) {
                    if (current_node.right) {
                        current_node = current_node.right;
                    } else {
                        current_node.right = new Node(val);
                        return this;
                    }
                } else {
                    if (current_node.left) {
                        current_node = current_node.left;
                    } else {
                        current_node.left = new Node(val);
                        return this;
                    }
                }
            }
        }
        // otherwise add it to the root value
        this.root = new Node(val);
        return this;
    }

    // Trees todo 1 assignment
    contains(val) {
        var current_node = this.root;
        while (current_node) {
            if (current_node.data == val) {
                return true;
            } else if (current_node.data > val) {
                if (current_node.left) {
                    current_node = current_node.left;
                } else {
                    return false;
                }
            } else if (current_node.data < val) {
                if (current_node.right) {
                    current_node = current_node.right;
                } else {
                    return false;
                }
            }
        }
    }

    // Trees todo 1 assignment
    min() {
        var current_node = this.root;
        var min_val = current_node.data;
        while (current_node) {
            min_val = current_node.data;
            current_node = current_node.left;
        }
        return min_val;
    }

    // Trees todo 1 assignment
    max() {
        var current_node = this.root;
        var max_val = current_node.data;
        while (current_node) {
            max_val = current_node.data;
            current_node = current_node.right;
        }
        return max_val;
    }

    // Trees todo 1 assignment
    isEmpty() {
        if (this.root) {
            return false;
        } else {
            return true;
        }
    }
}


// Testing code to see if the BT and Node work
console.log('------------------');
//var testNode = new Node(1);
//console.log(`testing Node class: ${testNode.data}`);
var bt = new BT();
//bt.root = new Node(1);
console.log('Adding in a new node');
console.log(`Current list: [null]`);
bt.add(5);
console.log(`Updated list: [${bt.root.data}]`);
console.log('------------------');
bt.add(2);
console.log(`Contains 2: ${bt.contains(2)}`);
console.log(`Contains 3: ${bt.contains(3)}`);
console.log('------------------');
console.log(`Min value of the list is: ${bt.min()}`);
bt.add(0);
console.log(`Min value of the list is: ${bt.min()}`);
console.log('------------------');
console.log(`Max value of the list is: ${bt.max()}`);
bt.add(10);
console.log(`Max value of the list is: ${bt.max()}`);
console.log('------------------');
console.log(`Is the tree empty? ${bt.isEmpty()}`);
var emptyTree = new BT();
console.log(`Is the new tree empty? ${emptyTree.isEmpty()}`);
