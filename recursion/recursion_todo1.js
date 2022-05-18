console.log('###############################');
console.log('Recursion Todo 1');


// Recursive Sigma - returns the sum of 1 to the given number
function rSigma(num, sum=0) {
    // Turning num into an integer
    num = Math.trunc(num);
    if (num < 1) {
        // Sigma anything lower than 0 is 0
        return 0;
    } else {
        if (num == 1) {
            // Initialising the sum
            sum += 1;
        } else {
            // Incrementing the sum and adding num to it
            sum += rSigma(num-1, sum);
            sum += num;
        }
        return sum;
    }
}

// expected = 15
console.log(`The rSigma(5) = ${rSigma(5)}`);
// expected = 3
console.log(`The rSigma(2.5) = ${rSigma(2.5)}`);
// expected = 0
console.log(`The rSigma(-1) = ${rSigma(-1)}`);


// Recursive Factorial - returns the product of ints from 1 to num
function rFact(num, ans=0) {
    // Make sure that num is an int not a float
    num = Math.trunc(num);
    if (num <= 0) {
        return 1;
    } else {
        if (num == 1) {
            ans = 1;
        } else {
            // Set the ans to the new factorial number
            ans = rFact(num-1, ans);
            // increment ans with num
            ans *= num;
        }
        return ans;
    }
}

// expected = 1
console.log(`The rFact(0) = ${rFact(0)}`);
// expected = 6
console.log(`The rFact(3) = ${rFact(3)}`);
// expected = 720
console.log(`The rFact(6.5) = ${rFact(6.5)}`);


/*
function floodFill(canvas2D, startXY, newColor, oldColor=0) {
    if (oldColor == 0) {
        oldColor = canvas2D[startXY[0]][startXY[1]];
    }

}

// example canvas2D
arr = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
];
console.log('canvas2D Start:');
console.log('[');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(']');
*/
