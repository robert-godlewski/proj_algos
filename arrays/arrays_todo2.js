console.log('###############################');
console.log('Array Todo 2');

function reverseArray(arr) {
    for (i=0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// expected output [3,2,1]
var arr = [1,2,3];
console.log(`Original = ${arr}`);
console.log(`reverseArray = ${reverseArray(arr)}`);


// Needed help on this one
/*
function rotateArray(arr, shiftBy) {
    //The value we are going to move to the front of the array.
    var val = arr[arr.length-shiftBy];
    for (i=arr.length-1; i >= 0; i--) {
        if ()
    }
}

// expected output [3,1,2]
var arr = [1,2,3];
console.log(`Original = ${arr}`);
console.log(`rotateArray = ${rotateArray(arr, 1)}`);
*/


function filterRange(arr, min, max) {
    var temp_arr = [];
    for (i=arr.length-1; i >= 0; i--) {
        if (arr[i] < min || arr[i] > max) {
            arr.pop();
        } else {
            let temp = arr.pop();
            temp_arr.push(temp);
        }
    }
    for (i=temp_arr.length-1; i >= 0; i--) {
        let temp = temp_arr.pop();
        arr.push(temp);
    }
    return arr;
}

// expected output
var secret_codes_list = [0, 4, 2, 6, 8, 10, 33, -1, 20, -10];
console.log(`Original array = ${secret_codes_list}`);
console.log(`results withing the min and max = ${filterRange(secret_codes_list, 1, 5)}`);


function concat(arr1, arr2) {
    var new_arr = [];
    for (i=0; i < arr1.length; i++) {
        new_arr.push(arr1[i]);
    }
    for (i=0; i < arr2.length; i++) {
        new_arr.push(arr2[i]);
    }
    return new_arr;
}

// expected output ['a','b',1,2]
var arr1 = ['a','b'];
console.log(`Array 1 = ${arr1}`);
var arr2 =[1,2];
console.log(`Array 2 = ${arr2}`);
console.log(`concat = ${concat(arr1, arr2)}`);
