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
