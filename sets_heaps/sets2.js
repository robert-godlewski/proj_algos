console.log('###############################');
console.log('Intersection sort arrays');


// Arrays to use for testing
var arr1 = [1,2,2,2,7];
var arr2 = [2,2,6,6,7];


console.log('---------------');
console.log('Multiset Intersection Sorted Arrays.');
// arr1 and arr2 needs to be sorted - O(N) solution
// This took me 14 min to solve.
var MultisetIntersection = (arr1, arr2) => {
    var intersect = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            intersect.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        }
    }
    return intersect;
}

// Testing MultisetIntersection
var arr = MultisetIntersection(arr1, arr2);
console.log(`Multiset Intersection = [${arr}]`);


console.log('---------------');
console.log('Set Intersection Sorted Arrays.');
// arr1 and arr2 needs to be sorted and each index of the returned array doesn't repeat. - O(n) solution
// This took about 20 min to solve
var SetIntersection = (arr1, arr2) => {
    var intersect = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            if (intersect.length != 0) {
                if (arr1[i] > intersect[k]) {
                    intersect.push(arr1[i]);
                    k++;
                }
            } else {
                intersect.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        }
    }
    return intersect;
}

// Testing SetIntersection
var arr = SetIntersection(arr1, arr2);
console.log(`Set Intersection = [${arr}]`);
