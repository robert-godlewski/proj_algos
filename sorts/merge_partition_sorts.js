console.log('###############################');
console.log('merge and partition sorting');


console.log('---------------');
// Needed for linkd lists
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.len = 0;
    }
}

var AddingNodes = (node1, node2) => {
    console.log(`linking node1 (${node1.data}) with node2 (${node2.data})`);
    node2.prev = node1;
    node1 = node1.next;
    node1.prev = node2;
    node2 = node2.next;
    node2.prev = null;
    var temp = node1;
    node1 = node1.prev;
    node1.next = temp;
    node1 = node1.prev;
    temp = temp.prev;
    node1.next = temp;
    node1 = node1.next;
}

var PrintLL = (ll) => {
    var current_node = ll.head;
    while (current_node) {
        console.log(current_node.data);
        current_node = current_node.next;
    }
}

console.log('Merge Sorting a linked list.');
// Still need to solve
var mergeSortList = (list) => {
    var size = list.len;
    //console.log(`size of the list = ${size}`);
    if (size > 1) {
        var mid = parseInt(size/2);
        //console.log(`half of the size = ${mid}`);
        var left = new LL();
        var right = new LL();
        left.len = mid;
        left.head = list.head;
        var current_node = left.head;
        for (var i = 0; i <= mid; i++) {
            //console.log(`i = ${i}`);
            //console.log(`current_node = ${current_node.data}`);
            if (i == mid) {
                right.head = current_node;
                current_node = current_node.prev;
                current_node.next = null;
                right.len = size-mid;
                right.head.prev = null;
            } else {
                current_node = current_node.next;
            }
        }
        //console.log('Left list:');
        //PrintLL(left);
        //console.log(`Left list length = ${left.len}`);
        //console.log('Right List:');
        //PrintLL(right);
        //console.log(`Right list length = ${right.len}`);
        //console.log('-------------');
        if (left.len > 1) {
            left = mergeSortList(left);
        }
        if (right.len > 1) {
            right = mergeSortList(right);
        }
        list = combineLists(left, right);
        console.log('List:');
        PrintLL(list);
        console.log('-------------');
    }
    return list;
}

var combineLists = (list1, list2) => {
    console.log('Combining left and right list.');
    //console.log('Left List');
    //PrintLL(list1);
    //console.log('Right List');
    //PrintLL(list2);
    var size = list1.len + list2.len;
    var list = new LL();
    list.len = size;
    var node1 = list1.head;
    var node2 = list2.head;
    //for (var i = 0; i < size; i++) {
    while (node1 && node2) {
        // Need to edit this
        if (node1.data > node2.data) {//False
            if (node1 === list1.head && node2 === list2.head) {//True
                list.head = list2.head;
            }
            if (!node2.next) {//False
                node2.next = node1;
                node1.prev = node2;
                break;
            } else {// True
                if (node1.data <= node2.next.data) {// True
                    AddingNodes(node1, node2);
                } else {
                    node2 = node2.next;
                }
            }
        } else if (node1.data < node2.data) {// True
            if (node1 === list1.head && node2 === list2.head) {//False
                list.head = list1.head;
            }
            if (!node1.next) {// true
                node1.next = node2;
                node2.prev = node1;
                break;
            } else {//false
                if (node2.data <= node1.next.data) {//false
                    //AddingNodes(node1, node2);
                    console.log('something is wrong here?');
                } else {//true
                    node1 = node1.next;
                }
            }
        }
    }
    console.log('List returning:');
    PrintLL(list);
    console.log(`size of returned list = ${list.len}`);
    console.log('-------------');
    return list;
}

// Testing combineLists
var ll = new LL();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
ll.head = node6;
node6.next = node4;
node4.prev = node6;
node4.next = node2;
node2.prev = node4;
node2.next = node1;
node1.prev = node2;
node1.next = node5;
node5.prev = node1;
node5.next = node3;
node3.prev = node5;
ll.len = 6;
console.log('Original Linked List:');
PrintLL(ll);
ll = mergeSortList(ll);
console.log('Merge Sorted Linked List:');
PrintLL(ll);
