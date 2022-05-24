console.log('###############################');
console.log('Recursion Todo 3');


// Recursive Binary Search
function rBinarySearch(arr, num, val=0) {
    if (arr[val] == num) {
        return true;
    } else if (val != arr.length) {
        return rBinarySearch(arr, num, val+1);
    } else {
        return false;
    }
}

// expected false
arr = [1,3,5,6]
console.log(`The rBinarySearch(${arr}, 4) = ${rBinarySearch(arr, 4)}`);
// expected true
arr = [4,5,6,8,12]
console.log(`The rBinarySearch(${arr}, 5) = ${rBinarySearch(arr, 5)}`);


// Greatest Common Factor
function rGCF(num1, num2) {
    if (num1 == num2) {
        return num1;
    } else if (num1 > num2) {
        return rGCF(num1-num2, num2);
    } else if (num1 < num2) {
        return rGCF(num1, num2-num1);
    }
}

console.log(`The Greatest Common Factor of 15 and 10 is ${rGCF(15, 10)}`);
console.log(`The Greatest Common Factor of 15 and 39 is ${rGCF(15, 39)}`);
// Only works to a certain number
//console.log(`The Greatest Common Factor of 123456 and 987654 is ${rGCF(123456, 987654)}`)
