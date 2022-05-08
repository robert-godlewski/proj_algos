console.log('###############################');
console.log('Min to Front Array Algorithm');

function min_to_front(arr) {
    var lowest = arr[arr.length-1];
    var lowests_index = arr.length-1;
    for (i=arr.length-1; i >= 0; i--) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            lowests_index = i;
        }
    }
    for (i=lowests_index; i >= 0; i--) {
        if (i !== 0) {
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }
    return arr;
}

// Expected output: [1,4,2,3,5]
var arr = [4,2,1,3,5];
console.log(`Original array = ${arr}`);
console.log(`Results = ${min_to_front(arr)}`);
