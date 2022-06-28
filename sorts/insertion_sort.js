console.log('###############################');
console.log('insertion and combinig sorting');

console.log('---------------');
console.log('Insertion Sorting an array.')
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
console.log(`Original Array: ${arr}`);
InsertionSortArr(arr);
console.log(`Insert Sorted array: ${arr}`);
