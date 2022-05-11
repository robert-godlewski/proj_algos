console.log('###############################');
console.log('Singly Linked Lists');


// Basic Node that we will need to store data
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    // Code for Fronts assignment
    addFront(value) {
        let new_front_node = new Node(value);
        // Checks to see if the list is empty and can just add it
        if(!this.head) {
            this.head = new_front_node;
        } else {
            new_front_node.next = this.head;
            this.head = new_front_node;
        }
        return this;
    }

    removeFront() {
        if (this.head.next != null) {
            let new_head = this.head.next;
            this.head = new_head;
            return this;
        } else {
            this.head = null;
            return null;
        }
    }

    front() {
        if (!this.head) {
            return null;
        } else {
            return this.head.data;
        }
    }
}

// Testing the code to see if the functions for SSL and Node work
//var node1 = new Node(10);
//console.log(`node1 = ${node1}`);
//console.log(`node1 value = ${node1.data}`);
console.log('###############################');
console.log('Fronts');
var ssl = new SLL();
//ssl.head = node1;
ssl.head = new Node(10);
//console.log(`ssl = ${ssl}`);
//console.log(`ssl head node = ${ssl.head}`);
console.log(`ssl head node data = ${ssl.head.data}`);
ssl.head.next = new Node(8);
console.log(`ssl 2nd node data = ${ssl.head.next.data}`);
ssl.head.next.next = new Node(6);
console.log(`ssl 3rd node data = ${ssl.head.next.next.data}`);
console.log(`adding to the front of the linked list = ${ssl.addFront(12)}`);
console.log(`new front data = ${ssl.front()}`);
console.log(`reverting back to original: ${ssl.removeFront()}`);
console.log(`ssl head data = ${ssl.front()}`);
console.log('###############################');
console.log();
