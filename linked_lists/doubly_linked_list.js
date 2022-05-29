console.log('###############################');
console.log('Doubly Linked Lists');


// Basic Node that we will need to store data
/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
*/


// Doubly Linked List
class DLL {
    constructor() {
        this.head = null;
    }

    reverse() {
        /*
        Pseudocode:

        dll.reverse:
        current_node = this.head
        while (current_node != null)
            save_node = current_node.previous
            current_node.previous = current_node.next
            current_node.next = save_node
            if (current_node.previous == null)
                this.head = current_node
            current_node = current_node.previous
        
        */
        var current_node = this.head;
        while (current_node) {
            var save_node = current_node.previous;
            current_node.previous = current_node.next;
            current_node.next = save_node;
            if (!current_node.previous) {
                this.head = current_node;
            }
            current_node = current_node.previous;
        }
    }

    /*
    dll.head = {
        data: 1,
        next: {
            data: 2,
            next: {
                data: 3,
                next: null,
                previous: Node(2)
            },
            previous: Node(1)
        },
        previous: null
    }
    */
}


console.log('------------------');
var dll = new DLL();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
node1.next = node2;
node2.previous = node1;
node2.next = node3;
node3.previous = node2;
node3.next = node4;
node4.previous = node3;
dll.head = node1;
console.log('Initial Doubly Linked List:');
function printDLL(dll) {
    var current_node = dll.head;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
}
printDLL(dll);
console.log('Reverse');
dll.reverse();
printDLL(dll);
