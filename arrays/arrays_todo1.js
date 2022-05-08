console.log('###############################');
console.log('Array Todo 1');
console.log();

function pushFront(arr, val) {
    let new_arr = [val];
    for(i=0; i < arr.length; i++) {
        new_arr.push(arr[i]);
    }
    return new_arr;
}

//expected output [1,2,3,4]
var arr1 = [2,3,4];
console.log(`Original: ${arr1}`);
console.log(`pushFront = ${pushFront(arr1, 1)}`);
console.log()


function popFront(arr) {
    for(i=0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}

//expected output [1,2]
var arr2 = [0,1,2];
console.log(`Original: ${arr2}`);
console.log(`popFront = ${popFront(arr2)}`);
console.log();


//Third attempt for the solution
function insertAt(arr, index, val) {
    let temp = [];
    //First part: add all after the given index to a temp array
    //Second part: add val to arr and break the first for loop
    for(i=arr.length-1; i >= 0; i--) {
        if (i > index) {
            let tempNum = arr.pop();
            temp.push(tempNum);
        } else if (i === index) {
            arr.push(val);
            let tempNum = temp.pop()
            arr.push(tempNum);
            break;
        }
    }
    //Third part: add all the temp to arr backwards and return arr
    for(i=temp.length-1; i >= 0; i--) {
        let tempNum = temp.pop();
        arr.push(tempNum);
        if (!temp) {
            break;
        }
    }
    return arr;
}

// expected output [0,1,2,3,4]
var arr3 = [0,1,3,4];
console.log(`Original: ${arr3}`);
console.log(`insertAt = ${insertAt(arr3, 1, 2)}`);
console.log();


//Look under insertAt for reasons
function removeAt(arr, index) {
    let temp = [];
    for(i=arr.length-1; i >= 0; i--) {
        if (i > index) {
            let num = arr.pop();
            temp.push(num);
        } else if (i === index) {
            arr.pop();
            break;
        }
    }
    for(i=temp.length-1; i >= 0; i--) {
        let num = temp.pop();
        arr.push(num);
        if (!temp) {
            break;
        }
    }
    return arr;
}

//expected output [0,1,2]
var arr4 = [0,1,3,2];
console.log(`Original: ${arr4}`);
console.log(`removeAt = ${removeAt(arr4, 2)}`);
console.log();


function swapPairs(arr) {
    // Need this to check if it's even or not inorder to continue
    var is_even = false;
    if (arr.length%2 === 0) {
        var is_even = true;
    }
    // The actual swaping
    for(i=0; i < arr.length; i += 2) {
        if (i%2 === 0 && is_even === true) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}

//expected output: [2,1,4,3]
var arr5 = [1,2,3,4];
console.log(`Original: ${arr5}`);
console.log(`swapPairs = ${swapPairs(arr5)}`);
console.log();

//expected output: [true, "Brendan", 42]
var arr6 = ["Brendan", true, 42];
console.log(`Original: ${arr6}`);
console.log(`swapPairs = ${swapPairs(arr6)}`);
console.log();


// Only works with sorted arrays
function removeDuplicates(arr) {
    let last = arr.pop();
    let temp_list = [last];
    for(i=arr.length-1; i >= 0; i--) {
        if (arr[i] === temp_list[temp_list.length-1]) {
            arr.pop();
        } else {
            //arr[i] !== temp_list[temp_list.length-1]
            let temp = arr.pop();
            temp_list.push(temp);
        }
    }
    for(i=temp_list.length-1; i >= 0; i--) {
        let temp = temp_list.pop();
        arr.push(temp);
    }
    return arr;
}

//expected output: [1,2,3,4]
var arr7 = [1,1,1,2,3,3,4,4,4,4];
console.log(`Original: ${arr7}`);
console.log(`removeDuplicates = ${removeDuplicates(arr7)}`);
console.log();
