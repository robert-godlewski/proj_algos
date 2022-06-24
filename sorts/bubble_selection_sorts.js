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
/*
var BubbleSortArr = (arr) => {
    for (var k=1; k < arr.length; k++) {
        for (var i=0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            // arr after every check
            //console.log(arr);
        }
        // arr at each pass
        console.log(arr);
    }
};
*/

// Optimized solution of a Bubble Sort algorithm for arrays
var BubbleSortArr = (arr) => {
    var len = arr.length;
    for (var k=0; k < len; k++) {
        var swapped = false;
        for (var i=0; i < len-k-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
            // arr after every check
            //console.log(arr);
        }
        // arr at each pass
        //console.log(arr);
        if (swapped == false) {
            break;
        }
    }
};

// Testing BubbleSortArr
var arr = [5,2,4,1,3];
console.log(`Original array: ${arr}`);
BubbleSortArr(arr);
console.log(`Bubble Sorted array: ${arr}`);


console.log('---------------');
console.log('Bubble Sorting a Linked List. - Skip');

console.log('---------------');
console.log('Selection Sorting an array.');


// Basic sort for a Selection Sorting Algorithm - O(n^2) solution
var SelectionSortArr = (arr) => {
    for (var j = 0; j < arr.length; j++) {
        var iMin = j;
        for (var i = j+1; i < arr.length; i++) {
            if (arr[i] < arr[iMin]) {//True
                iMin = i;
            }
        }
        if (iMin != j) {
            var temp = arr[j];
            arr[j] = arr[iMin];
            arr[iMin] = temp;
        }
        // Test to see what is happening
        //console.log(arr);
    }
};

// Testing SelectionSortArr
var arr = [5,2,4,1,3];
console.log(`Original array: ${arr}`);
SelectionSortArr(arr);
console.log(`Selection Sorted array: ${arr}`);
