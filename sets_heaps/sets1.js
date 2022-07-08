console.log('###############################');
console.log('merge and partition sorting');


console.log('---------------');
console.log('Interleaving Arrays.');
// Interleaves an unsorted array into one array - O(n) solution, took me 15 min to solve
var InterleaveArr = (arr1, arr2) => {
    var arr = [];
    //console.log(`arr1 = [${arr1}]`);
    //console.log(`arr2 = [${arr2}]`);
    var i = 0;
    while (i < arr1.length || i < arr2.length) {
        if (i < arr1.length) {
            arr.push(arr1[i]);
        }
        if (i < arr2.length) {
            arr.push(arr2[i]);
        }
        i++;
    }
    return arr;
}

// Testing InterleaveArr
var arr = InterleaveArr([77,22,11,22], [2,6,7,2,6,2]);
console.log(`Interleaved array = [${arr}]`);


console.log('---------------');
console.log('Merge Sorted Arrays.');
// Merges and sorts 2 sorted arrays from lowest to highest - O(n), took about 15 min to solve
var MergeSortArr = (arr1, arr2) => {
    var arr = [];
    //console.log(`arr1 = [${arr1}]`);
    //console.log(`arr2 = [${arr2}]`);
    var i = 0;
    var j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (i < arr1.length && j < arr2.length) {//True
            if (arr1[i] <= arr2[j]) {//True
                arr.push(arr1[i]);
                i++;
            } else {
                // arr1[i] > arr2[j]
                arr.push(arr2[j]);
                j++;
            }
        } else if (i < arr1.length) {
            arr.push(arr1[i]);
            i++;
        } else if (j < arr2.length) {
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}

// Testing MergeSortArr
var arr = MergeSortArr([1,2,2,2,7], [2,2,6,6,7]);
console.log(`Merge Sorted Array = [${arr}]`);


console.log('---------------');
console.log('Minimal 3 Array range.');
// Looks at 3 arrays and determines a minimum length and a maximum length
var ThreeArrRange = (arr1, arr2, arr3) => {
    var min = arr1.length;
    var max = arr1.length;
    if (arr2.length < min) {
        min = arr2.length;
    }
    if (arr3.length < min) {
        min = arr3.length;
    }
    if (arr2.length > max) {
        max = arr2.length;
    }
    if (arr3.length > max) {
        max = arr3.length;
    }
    return {
        "min": min,
        "max": max
    };
}

// Testing ThreeArrRange
var minmax = ThreeArrRange([1,2,4,15], [3,10,12], [5,10,13,17,23]);
console.log(`Minimum length = ${minmax["min"]}`);
console.log(`Maximum length = ${minmax["max"]}`);
