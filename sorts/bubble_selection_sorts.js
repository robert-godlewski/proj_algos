console.log('###############################');
console.log('Bubble and Selection sorting');


// Needed for linkd lists
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }
}

var PrintLL = (ll) => {
    var current_node = ll.head;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
}


console.log('---------------');
console.log('Bubble Sorting an array.')
// Basic Bubble Sorts sort the array in place with multiple passes via a nested loop. o(n^2) solution.
var BubbleSortArr = (arr) => {
    for (var k=1; k < arr.length; k++) {
        for (var i=0; i < arr.length-k; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            // arr after every check
            console.log(arr);
        }
        // arr at each pass
        //console.log(arr);
    }
};

// Testing BubbleSortArr
var arr = [5,2,4,1,3];
console.log(`Original array: ${arr}`);
BubbleSortArr(arr);
console.log(`Bubble Sorted array: ${arr}`);


console.log('---------------');
console.log('Bubble Sorting a Linked List.');

// Basic Bubble sort for a linked list - Not solved - infinate loop problem
/*var BubbleSortLL = (ll) => {
    var is_sorting = true;
    var high_val = ll.head.data;
    while (is_sorting) {
        var current_node = ll.head;
        while (current_node) {
            if (current_node.next) {
                if (current_node.data > current_node.next.data) {
                    var temp = current_node.data;
                    current_node.data = current_node.next.data;
                    current_node.next.data = temp;
                }
            } else if (current_node.data >= high_val) {
                if (current_node.data > high_val) {
                    high_val = current_node.data;
                }
                current_node = ll.head;
            } else {
                is_sorting = false;
            }
            current_node = current_node.next;
        }
    }
};*/

// Testing BubbleSortLL
/*var ll = new LL();
var node1 = new Node(5);
var node2 = new Node(2);
var node3 = new Node(4);
var node4 = new Node(1);
var node5 = new Node(3);
ll.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log('Original Linked List:');
PrintLL(ll);
console.log('Sorted Linked List:');
BubbleSortLL(ll);
PrintLL(ll);*/
