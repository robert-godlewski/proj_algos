console.log('###############################');
console.log('Array Todo 3');


function removeNegatives(arr) {
    var temp = [];
    while (arr.length > 0) {
        var val = arr.pop();
        if (val > 0) {
            temp.push(val);
        }
    }
    while (temp.length > 0) {
        arr.push(temp.pop());
    }
    return arr;
}

// Testing removeNegatives
var arr = [-1,2,3,-4];
console.log(`Original = [${arr}]`);
console.log(`Removing all negative numbers = [${removeNegatives(arr)}]`);


function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length-2];
    }
}

// Testing secondToLast
var arr = [1,2,3];
console.log(`Original = [${arr}]`);
console.log(`Second to last = ${secondToLast(arr)}`);


function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    } else if (arr.length == 2) {
        if (arr[0] < arr[1]) {
            return arr[0];
        } else {
            return arr[1];
        }
    } else {
        if (arr[0] > arr[1]) {
            var max = arr[0];
            var max2 = arr[1];
        } else {
            var max = arr[1];
            var max2 = arr[0];
        }
        for (var i = 2; i < arr.length; i++) {
            if (arr[i] > max) {
                max2 = max;
                max = arr[i];
            } else if (arr[i] > max2) {
                max2 = arr[i];
            }
        }
        return max2;
    }
}

// Testing secondLargest
var arr = [1,2,3];
console.log(`Original = [${arr}]`);
console.log(`Second largest = ${secondLargest(arr)}`);
