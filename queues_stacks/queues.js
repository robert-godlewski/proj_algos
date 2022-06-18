console.log('###############################');
console.log('Queues Basics');


// Singly linked List Queue
class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adds val to the end of the queue - need to test
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

    // Returns a value in the front - need to test
    front() {
        if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }

    // Checks to see if the queue is empty - need to test
    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }

    // Removes the front of the queue - need to test
    dequeue() {
        var val_node = this.head;
        var val = val_node.data;
        this.head = val_node.next;
        return val;
    }

    // Checks to see if the value is in the queue or not - need to test
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
