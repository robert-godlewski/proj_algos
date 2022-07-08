console.log('###############################');
console.log('insertion and combinig sorting');

console.log('---------------');
console.log('Insertion Sorting an array.');
// Basic Insertion Sort for arrays - O(n^2) solution
var InsertionSortArr = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                var temp = arr[j]
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
            //console.log(`j pass arr = ${arr}`);
        }
        // arr after every pass of i
        //console.log(`i pass arr = ${arr}`);
    }
}

// Testing InsertionSortArr
var arr = [5,2,3,1,4];
console.log(`Original Array: [${arr}]`);
InsertionSortArr(arr);
console.log(`Insert Sorted array: [${arr}]`);

console.log('---------------');
console.log('Combining Sorting an array.');
// At best could be an O(n) solution, Average is O(n^2) solution.
var CombineSortArr = (arr1, arr2) => {
    if (arr2.length > 0) {
        arr2.reverse();
        if (arr1.length == 0) {
            while (arr2.length > 0) {
                var temp = arr2.pop();
                arr1.push(temp);
            }
        } else if (arr1.length > 0 && arr2.length > 0) {
            while (arr2.length > 0) {
                var check = arr2.pop();
                for (var i = 0; i < arr1.length; i++) {
                    if (arr1[i] > check) {
                        var temp = arr1[i];
                        arr1[i] = check;
                        check = temp;
                    }
                }
                arr1.push(check);
            }
        }
    }
}

// Testing CombineSortArr
var arr1 = [1,3,5];
var arr2 = [2,4];
console.log(`First Original Array: [${arr1}]`);
console.log(`Second Original Array: [${arr2}]`);
CombineSortArr(arr1, arr2);
console.log(`Combined array: [${arr1}]`);
var emptyarr = [];
//CombineSortArr(emptyarr, arr1);
//console.log(`Combined array to an empty one: [${emptyarr}]`);
CombineSortArr(arr1, emptyarr);
console.log(`Combined array with an empty one: [${arr1}]`);


console.log('---------------');
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

console.log('Insertion Sorting a Linked List. -- Skip for now');
var InsertionSortLL = (ll) => {}

// Testing InsertionSortLL
var ll = new LL();
var node1 = new Node(3);
var node2 = new Node(1);
var node3 = new Node(2);
node1.next = node2;
node2.next = node3;
ll.head = node1;
console.log('Original Linked List:');
PrintLL(ll);
InsertionSortLL(ll);
console.log('Insert Sorted Linked List:');
PrintLL(ll);
