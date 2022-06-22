console.log('###############################');
console.log('Stack Basics');


// Basic Node for stacks that is similar to a doubly linked list node.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class ArrStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // adds val to the end of the list
    push(val) {
        var new_node = new Node(val);
        if (this.tail) {
            var old_end = this.tail;
            old_end.next = new_node;
            new_node.prev = old_end;
        } else {
            if (this.head) {
                this.head.next = new_node;
                new_node.prev = this.head;
            } else {
                this.head = new_node;
            }
        }
        this.tail = new_node;
    }

    // returns the tail of the stack
    top() {
        if (this.tail) {
            return this.tail.data;
        } else if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }

    // checks to see if the stack is empty or not
    isEmpty() {
        if (this.tail) {
            return false;
        } else if (this.head) {
            return false;
        } else {
            return true;
        }
    }

    // removes the tail of the stack and returns the value
    pop() {
        var val = null
        if (this.tail) {
            val = this.tail.data;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else if (this.head) {
            val = this.head.data;
            this.head = null;
        }
        return val;
    }

    // checks to see if val is in the stack
    contains(val) {
        var current_node = this.tail;
        while (current_node) {
            if (current_node.data == val) {
                return true;
            }
            current_node = current_node.prev;
        }
        return false;
    }

    // checks how many nodes there are in the stack
    size() {
        var size = 0;
        var current_node = this.tail;
        while (current_node) {
            size++;
            current_node = current_node.prev;
        }
        return size;
    }
}


// Testing grounds for stacks
var stackList = new ArrStack();

function printStack(stack) {
    console.log("Current Stack: (tail to head)");
    var current_node = stack.tail;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.prev;
    }
}

console.log('---------------');
console.log(`What is the size of an empty stack? ${stackList.size()}`);
console.log(`Is the stack empty? ${stackList.isEmpty()}`);
var val1 = 5;
console.log(`Adding ${val1} to the list.`);
stackList.push(val1);
printStack(stackList);
console.log(`Is the stack still empty? ${stackList.isEmpty()}`);
console.log('Adding in a bunch of values to the stack....')
stackList.push(10);
stackList.push(15);
stackList.push(20);
printStack(stackList);
console.log(`Does the list contain 30? ${stackList.contains(30)}`);
var topVal = stackList.top();
console.log(`Does the list contain ${topVal}? ${stackList.contains(topVal)}`);
console.log(`How big is the stack? ${stackList.size()}`);
var removeTop = stackList.pop();
console.log(`What was the top value of the stack? ${removeTop}`);
printStack(stackList);
