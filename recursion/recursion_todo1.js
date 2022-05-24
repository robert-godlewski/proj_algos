console.log('###############################');
console.log('Recursion Todo 1');


// Recursive Sigma - returns the sum of 1 to the given number
function rSigma(num) {
    num = Math.trunc(num);
    if (num <= 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return rSigma(num-1) + num;
    }
}

// expected = 15
console.log(`The rSigma(5) = ${rSigma(5)}`);
// expected = 3
console.log(`The rSigma(2.5) = ${rSigma(2.5)}`);
// expected = 0
console.log(`The rSigma(-1) = ${rSigma(-1)}`);


// Recursive Factorial - returns the product of ints from 1 to num
function rFact(num) {
    num = Math.trunc(num);
    if (num <= 1) {
        return 1;
    } else {
        return rFact(num-1) * num;
    }
}

// expected = 1
console.log(`The rFact(0) = ${rFact(0)}`);
// expected = 6
console.log(`The rFact(3) = ${rFact(3)}`);
// expected = 720
console.log(`The rFact(6.5) = ${rFact(6.5)}`);
