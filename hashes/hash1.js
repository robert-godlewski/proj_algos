console.log('###############################');
console.log('Basic HashMap');


// For using a Hashmap function, capacity default = 0
class HashMap {
    constructor(capacity=0) {
        this.capacity = capacity;
        this.table = [];
    }

    // only works for no duplicate indexes - no longer works
    hashAdd(key, val) {
        console.log(`key = ${key}`);
        console.log(`val = ${val}`);
        //console.log(`hash capacity = ${this.capacity}`);
        //console.log(`hash table = [${this.table}]`);
        /*var location = this.find(key);
        console.log(location);
        if (!location) {
            var myHashCode = key.hashCode();
            console.log(`key hashcode = ${myHashCode}`);
            //console.log(parseInt(myHashCode));
            var myIdx = mod(myHashCode, this.capacity+1);
            console.log(`myIdx = ${myIdx}`);
            if (this.table.length <= myIdx) {
                this.table.push(val);
                this.capacity++;
            }
        } else {
            var data = this.table[location];
            console.log(`Information at ${key} = [${data}]`);
        }*/
    }

    isEmpty() {
        if (this.table.length >= 1) {
            return false;
        } else {
            return true;
        }
    }

    find(key) {
        var myHashCode = key.hashCode();
        console.log(`Find key hashcode = ${myHashCode}`);
        var myIdx = mod(myHashCode, this.table.length);
        console.log(`the id of the hashcode = ${myIdx}`);
        if (myIdx > this.table.length) {
            var val = false;
        } else {
            var val = this.table[myIdx];
        }
        return val;
    }
}

// A way to encode the string
//var myHashCode = myString.hashCode();
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5)-hash)+char;
        //Converting hash to 32b int
        hash &= hash;
    }
    return hash;
}

// We use this because JS acts weird on negative numbers
//var myIdx = mod(myHashCode, arrSize);
function mod(input, div) {
    return (input % div + div) % div;
}


// testing
var myHash  = new HashMap();
console.log(`initial hash capacity = ${myHash.capacity}`);
console.log(`initial hash table = [${myHash.table}]`);
console.log('---------------');
console.log('Adding to the HashMap');
myHash.hashAdd('0', 1);
console.log(`hash capacity = ${myHash.capacity}`);
console.log(`hash table = [${myHash.table}]`);
console.log('*******')
myHash.hashAdd('5', 2);
console.log(`hash capacity = ${myHash.capacity}`);
console.log(`hash table = [${myHash.table}]`);
// Repeat
console.log('*******')
console.log(`Readding a previous value to the Hashmap`);
myHash.hashAdd('0', 1);
console.log(`hash capacity = ${myHash.capacity}`);
console.log(`hash table = [${myHash.table}]`);
console.log('---------------');
var emptyHash = new HashMap();
console.log('Made a new hashmap');
console.log(`Is the new hashmap empty? ${emptyHash.isEmpty()}`);
console.log(`IS the old hashmap empty? ${myHash.isEmpty()}`);
console.log('---------------');
