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

    is_palindrome() {
        var data_arr = [];
        var current_node = this.head;
        while (current_node) {
            data_arr.push(current_node.data);
            current_node = current_node.next;
        }
        var start = data_arr.toString();
        var reversed = '';
        for (var i = data_arr.length-1; i >= 0; i--) {
            reversed += data_arr[i];
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
    /*
    shift(shiftBy) {
        /*
        For shiftBy > 0
        list: a=>b=>c -> c=>a=>b
        1. current_node = dll.head
        2. save_node = null - to save the node we want
        3. go to the last node with a while loop checking if the current_node.next is not null
        4. save_node = current_node
        5. current_node = current_node.previous
        6. current_node.next = null
        7. set the dll.head.prev = save_node
        8. save_node.next = dll.head
        9. dll.head = save_node

        For shiftBy < 0
        list: c=>a=>b -> a=>b=>c
        1. current_node = dll.head - same as before
        2. save_node = dll.head
        3. save_node.next = null
        4. current_node = current_node.next
        5. current_node.prev = null
        6. dll.head = current_node
        7. go to the last node with a while loop checking if the current_node.next is not null
        8. current_node.next = save_node
        9. save_node.prev = current_node
    }*/
}


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
console.log('Shift Right:')
//
console.log('Shift Left:')
