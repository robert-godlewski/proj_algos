function pushFront(arr, val) {
    let new_arr = [val];
    for(i=0; i < arr.length; i++) {
        new_arr.push(arr[i]);
    }
    console.log(new_arr);
    return new_arr;
}

pushFront([2,3,4], 1);

function popFront(arr) {
    for(i=0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr);
    return arr;
}

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
