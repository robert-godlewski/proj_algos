function pushFront(arr, val) {
    let new_arr = [val];
    for(i=0; i < arr.length; i++) {
        new_arr.push(arr[i]);
    }
    console.log(new_arr);
    return new_arr;
}

//expected output [1,2,3,4]
pushFront([2,3,4], 1);

function popFront(arr) {
    for(i=0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return arr;
}

//expected output [1,2]
popFront([0,1,2]);

//My First solution that does not work
/*
function insertAt(arr, index, val) {
    for(i=0; i < arr.length; i++) {
        let temp = arr[i];
        if (i >= index) {
            if (i === index) {
                arr[i] = val;
            } else if (i > index) {
                arr[i] = arr[arr.length-1];
            }
            arr.push(temp);
        }
    }
    console.log(arr);
    return arr;
}
*/

//My second attempt for the solution - Doesn't quite work
/*
function insertAt(arr, index, val) {
    let temp = [];
    var val_added = false;
    for(i=arr.length-1; i >= 0; i--) {
        if (i > index && val_added === false) {
            let tempNum = arr.pop();
            temp.push(tempNum);
        } else if (i === index) {
            arr.push(val);
            val_added = true;
        }
        if (val_added === true && temp) {
            let tempNum = temp.pop()
            arr.push(tempNum);
            i += 2;
        }
    }
    console.log(arr);
    return arr;
}
*/

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
    console.log(arr);
    return arr;
}

//expected output [0,1,2,3,4]
insertAt([0,1,3,4], 1, 2);

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
    console.log(arr);
    return arr;
}

//expected output [0,1,2]
removeAt([0,1,3,2], 2);
