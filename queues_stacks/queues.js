console.log('###############################');
console.log('Queues Basics');


// Basic Node for queues that is similar to a singly linked list node.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// Singly linked List Queue
class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adds val to the end of the queue
    enqueue(val) {
        var last = this.tail;
        var new_node = new Node(val);
        if (last) {
            last.next = new_node;
            last = last.next;
            this.tail = last;
        } else {
            var node = this.head;
            var prev = null;
            while (node) {
                prev = node;
                node = node.next;
            }
            prev.next = new_node;
            this.tail = new_node;
        }
    }

    // Returns a value in the front
    front() {
        if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }

    // Checks to see if the queue is empty
    isEmpty() {
        if (this.head) {
            return false;
        } else {
            return true;
        }
    }

    // Removes the front of the queue
    dequeue() {
        var val_node = this.head;
        var val = val_node.data;
        this.head = val_node.next;
        return val;
    }

    // Checks to see if the value is in the queue or not
    contains(val) {
        var current_node = this.head;
        while (current_node) {
            if (current_node.data == val) {
                return true;
            }
            current_node = current_node.next;
        }
        return false;
    }

    // Finds out how many nodes there are in the queue
    size() {
        if (!this.head) {
            return 0;
        }
        var size = 0;
        var current_node = this.head;
        while (current_node) {
            size++;
            current_node = current_node.next;
        }
        return size;
    }

    // Removes the last minimum value close to the tail of the queue - Need to test
    removeMin() {
        if (this.head) {
            var min = this.head.data;
            var current_node = this.head;
            while (current_node) {
                if (current_node.data < min) {
                    min = current_node.data;
                }
                current_node = current_node.next;
            }
            current_node = this.head;
            var prev_node = null;
            while (current_node) {
                if (current_node.data == min) {
                    if (prev_node) {
                        prev_node.next = current_node.next;
                    } else {
                        this.head = current_node.next;
                    }
                }
                current_node = current_node.next;
            }
        }
    }
}


// Testing grounds for queues
var slqueue = new SLQueue();
slqueue.head = new Node(5);
slqueue.head.next = new Node(10);
slqueue.tail = slqueue.head.next;

function printQueue(queue) {
    var current_node = queue.head;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
}

console.log('---------------');
console.log('Enqueue:');
console.log('Queue prior:');
printQueue(slqueue);
console.log(`Adding in 15 to the queue:`);
slqueue.enqueue(15);
printQueue(slqueue);
console.log('---------------');
console.log(`Front node of the queue: ${slqueue.front()}`);
var blankQueue = new SLQueue();
console.log(`Front node of a blank queue: ${blankQueue.front()}`);
console.log('---------------');
console.log(`Is this an empty queue: slqueue = ${slqueue.isEmpty()}`);
console.log(`Is this an empty queue: blankQueue = ${blankQueue.isEmpty()}`);
console.log('---------------');
console.log(`Removing ${slqueue.dequeue()} from the the queue.`);
console.log('The queue now:');
printQueue(slqueue);
console.log('---------------');
console.log(`Does the queue have 5? ${slqueue.contains(5)}`);
console.log(`Does the queue have 15? ${slqueue.contains(15)}`);
console.log('---------------');
console.log(`How big is the current queue? ${slqueue.size()}`);
console.log(`How big is an empty queue? ${blankQueue.size()}`);
console.log('---------------');
console.log('Removing the minimum number of the queue:');
slqueue.removeMin();
printQueue(slqueue);
