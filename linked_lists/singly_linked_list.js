console.log('###############################');
console.log('Singly Linked Lists');


// Basic Node that we will need to store data
/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/


// Singly Linked List - Not using previous for this
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

    // Practice assignment for finding out if the list has the value
    contains(value) {
        var is_found = false;
        // Code using previously made function
        var compare_node = this.head;
        while (!is_found || compare_node == null) {
            //console.log(compare_node.data);
            if (compare_node.data == value) {
                // We found it and we are done
                is_found = true;
            } else if (!compare_node.next) {
                // Break the loop because next is null
                break;
            } else {
                // Update the node we are looking in
                compare_node = compare_node.next;
            }
        }
        return is_found;
    }

    // Practice assignment for finding the total length of the list
    length() {
        var count = 0;
        var current_node = this.head;
        while(current_node) {
            count++;
            current_node = current_node.next;
        }
        return count;
    }

    // Code for display assignment
    display() {
        var current_node = this.head;
        var node_list = [];
        while(current_node) {
            node_list.push(current_node.data);
            current_node = current_node.next;
        }
        var node_str = node_list.join();
        return node_str;
    }

    // Code for Max/Min/Average assignment
    max() {
        var current_node = this.head;
        var max = current_node.data;
        while(current_node) {
            if (current_node.data > max) {
                max = current_node.data;
            }
            current_node = current_node.next;
        }
        return max;
    }

    // Code for Max/Min/Average assignment
    min() {
        var current_node = this.head;
        var min = current_node.data;
        while(current_node) {
            if (current_node.data < min) {
                min = current_node.data;
            }
            current_node = current_node.next;
        }
        return min;
    }

    // Code for Max/Min/Average assignment
    average() {
        var current_node = this.head;
        var sum = 0;
        var nodes = 0;
        while(current_node) {
            sum += current_node.data;
            current_node = current_node.next;
            nodes++;
        }
        return sum/nodes;
    }
}

// Testing the code to see if the functions for SSL and Node work
//var node1 = new Node(10);
//console.log(`node1 = ${node1}`);
//console.log(`node1 value = ${node1.data}`);
console.log('------------------');
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
console.log('------------------');
console.log('Contains');

function containing(linked_list, value) {
    console.log(`Does the list have ${value}?`);
    console.log(linked_list.contains(value));
}

var val = 8;
containing(ssl, val);
var val = 1;
containing(ssl, val);

console.log('------------------');
console.log('Length');
console.log(`Length of the list is: ${ssl.length()}`);

console.log('------------------');
console.log('Display');
console.log(ssl.display());

console.log('------------------');
var max = ssl.max();
console.log(`Finding the Max value of the list: ${max}`);
var min = ssl.min();
console.log(`Finding the Min value of the list: ${min}`);
var ave = ssl.average();
console.log(`Finding the Average value of the list: ${ave}`);
