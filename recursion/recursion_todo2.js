console.log('###############################');
console.log('Recursion Todo 2');


// Recursive Fibonacci
function rFib(num) {
    num = Math.trunc(num);
    if (num <= 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return rFib(num-1) + rFib(num-2);
    }
}

// expected 5
console.log(`The rFib(5) = ${rFib(5)}`);
// expected 34
console.log(`The rFib(9) = ${rFib(9)}`);


// Recursive Tribonacci
function rTrib(num) {
    num = Math.trunc(num);
    if (num <= 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return rTrib(num-1) + rTrib(num-2) + rTrib(num-3);
    }
}

// expected 2
console.log(`The rTrib(3) = ${rTrib(3)}`);
// expected 13
console.log(`The rTrib(6) = ${rTrib(6)}`);
