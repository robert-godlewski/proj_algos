console.log('###############################');
console.log('Union sort arrays');


console.log('---------------');
console.log('Multiset Union Sorted Arrays.');
// arr1 and arr2 have to be sorted arrays
var MultisetUnionSortArr = (arr1, arr2) => {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            arr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}

// Testing MultisetUnionSortArr
var arr = MultisetUnionSortArr([1,2,2,2,7], [2,2,6,6,7]);
console.log(`The union of 2 arrays = [${arr}]`);


console.log('---------------');
console.log('Set Union Sorted Arrays.');
// arr1 and arr2 have to be sorted arrays, no duplicates in returned array
var SetUnionSortArr = (arr1, arr2) => {
    var arr = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            if (arr.length == 0) {
                arr.push(arr1[i]);
            } else if (arr1[i] != arr[k]) {
                arr.push(arr2[j]);
                k++;
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            if (arr.length == 0) {
                arr.push(arr1[i]);
            } else if (arr1[i] != arr[k]) {
                arr.push(arr1[i]);
                k++;
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (arr.length == 0) {
                arr.push(arr2[j]);
            } else if (arr2[j] != arr[k]) {
                arr.push(arr2[j]);
                k++;
            }
            j++;
        }
    }
    return arr;
}

// Testing SetUnionSortArr
var arr = SetUnionSortArr([1,2,2,2,7], [2,6,6,7]);
console.log(`The union of 2 arrays = [${arr}]`);


// For testing the next 3
var arr1 = [2,7,2,1,2];
var arr2 = [6,7,2,7,6,2];


console.log('---------------');
console.log('Intersection Unsorted Arrays, inplace.');
// returns arr1
var MultisetIntersectionArrInplace = (arr1, arr2) => {
    var i = 0;
    var j = 0;
    // k is used for checking arr1 previous value
    var k = 0;
    // Actually fixes arr1
    while (j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            if (arr1[k] != arr1[i]) {
                var temp = arr1[k];
                arr1[k] = arr1[i];
                arr1[i] = temp;
                i--;
            }
            k++;
        }
        if (i+1 < arr1.length) {
            i++;
        }
        j++;
    }
    // Removes all values up to k in arr1
    while (k < arr1.length) {
        arr1.pop();
    }
    return arr1;
}

// Testing MultisetIntersectionArrInplace
var arr1n = arr1;
var arr = MultisetIntersectionArrInplace(arr1n, arr2);
console.log(`The Intersection of 2 arrays = [${arr}]`);


console.log('---------------');
console.log('Intersection Unsorted Arrays.');
var MultisetIntersectionArr = (arr1, arr2) => {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {//True
        if (arr1[i] < arr2[j] && i != arr1.length-1) {//True=>False=>True=>False
            j--;
        } else if (arr1[i] > arr2[j] && j != arr2.length-1) {//False=>True=>False
            i--;
        } else if (arr1[i] == arr2[j]) {//False=>True=>False=>True
            arr.push(arr1[i]);
        }
        if (i == arr1.length-1 && j+1 < arr2.length) {//False=>True=>False
            i--;
        }
        if (j == arr2.length-1 && i+1 < arr1.length) {//False
            j--;
        }
        i++;
        j++;
    }
    return arr;
}

// Testing MultisetIntersectionArr
var arr = MultisetIntersectionArr(arr1, arr2);
console.log(`The Intersection of 2 arrays = [${arr}]`);


console.log('---------------');
console.log('Set Union Unsorted Arrays. - Wrong solution need to resolve.');
//
/*
_____var____|_val
arr1        | [2,7,2,1,2]
arr2        | [6,7,2,7,6,2]
arr1.length | 5
arr2.length | 6
arr         | []
i           | 0
j           | 0
*/
var SetUnionArr = (arr1, arr2) => {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            arr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}

// Testing SetUnionArr
var arr = SetUnionArr(arr1, arr2);
console.log(`The union of 2 arrays = [${arr}]`);
