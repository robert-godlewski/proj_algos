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
        var current_node = this.head;
        while (current_node) {
            // Saving the previous node so that we don't lose it
            var save_node = current_node.previous;
            current_node.previous = current_node.next;
            current_node.next = save_node;
            // Reassigns the head of the list as the last node in the list
            if (!current_node.previous) {
                this.head = current_node;
            }
            // This is actually moving forward due to switching previous and next for each node
            current_node = current_node.previous;
        }
    }

    is_palindrome() {
        var data_arr = [];
        var current_node = this.head;
        // Adding to one array to so that we can use it to make 2 strings
        while (current_node) {
            data_arr.push(current_node.data);
            current_node = current_node.next;
        }
        // Combining a copy of the array and turning it into a string
        var start = data_arr.toString();
        var reversed = '';
        // Moving backwards the array to make a reversed string
        for (var i = data_arr.length-1; i >= 0; i--) {
            reversed += data_arr[i];
            // Need the ',' so that the 2 variables match
            if (i != 0) {
                reversed += ',';
            }
        }
        if (start === reversed) {
            return true;
        } else {
            return false;
        }
    }

    // if shiftBy > 0 the end is moved to the start
    // if shiftBy < 0 the start is moved to the end of the linked list
    shift(shiftBy) {
        // if shiftBy == 0 we do nothing
        if (shiftBy != 0) {
            // Initialize variable
            var current_node = this.head;
            var save_node = null;
            // save the first node to be moved left
            if (shiftBy < 0) {
                save_node = this.head;
                current_node = current_node.next;
                save_node.next = null;
                current_node.previous = null;
                this.head = current_node;
            }
            // Traverse the linked list to the end
            while (current_node) {
                if (current_node.next) {
                    current_node = current_node.next;
                } else {
                    break;
                }
            }
            // set the last node to be saved and moved to the front
            if (shiftBy > 0) {
                save_node = current_node;
                current_node = current_node.previous;
                save_node.previous = null;
                current_node.next = null;
                this.head.previous = save_node;
                save_node.next = this.head;
                this.head = save_node;
            } else if (shiftBy < 0) {
                current_node.next = save_node;
                save_node.previous = current_node;
            }
            // Recursively repeat until shiftBy == 0
            if (shiftBy > 0) {
                this.shift(shiftBy-1);
            } else if (shiftBy < 0) {
                this.shift(shiftBy+1);
            }
        }
    }
}


// Used to print the Linked List
function printDLL(dll) {
    var current_node = dll.head;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
}

console.log('------------------');
console.log('Reverse:');
var dll1 = new DLL();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
node1.next = node2;
node2.previous = node1;
node2.next = node3;
node3.previous = node2;
dll1.head = node1;
console.log('Initial Doubly Linked List:');
printDLL(dll1);
console.log('Reversed:')
dll1.reverse();
printDLL(dll1);
console.log('Is Palindrome:');
var dll2 = new DLL();
var nodea = new Node('1');
var nodeb = new Node('2');
var nodec = new Node('1');
nodea.next = nodeb;
nodeb.previous = nodea;
nodeb.next = nodec;
nodec.previous = nodeb;
dll2.head = nodea;
console.log('List:');
printDLL(dll2);
if (dll2.is_palindrome() == true) {
    console.log('Yes');
} else {
    console.log('No');
}
var noded = new Node('2');
nodec.next = noded;
noded.previous = nodec;
printDLL(dll2);
if (dll2.is_palindrome() == true) {
    console.log('Yes');
} else {
    console.log('No');
}
console.log('Shifting:')
var dll3 = new DLL();
var node_a = new Node('a');
var node_b = new Node('b');
var node_c = new Node('c');
node_a.next = node_b;
node_b.previous = node_a;
node_b.next = node_c;
node_c.previous = node_b;
dll3.head = node_a;
printDLL(dll3);
console.log('Shift Right:')
dll3.shift(1);
printDLL(dll3);
console.log('Shift Left:')
dll3.shift(-1);
printDLL(dll3);
