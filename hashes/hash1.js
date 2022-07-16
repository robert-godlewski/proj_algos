console.log('###############################');
console.log('Basic HashMap');


// For using a Hashmap function, capacity default = 0
class HashMap {
    constructor(capacity=0) {
        this.capacity = capacity;
        this.table = [];
    }

    // only works for no duplicate indexes
    hashAdd(key, val) {
        //console.log(`key = ${key}`);
        //console.log(`val = ${val}`);
        //console.log(`hash capacity = ${this.capacity}`);
        //console.log(`hash table = [${this.table}]`);
        var myHashCode = key.hashCode();
        //console.log(`key hashcode = ${myHashCode}`);
        //console.log(parseInt(myHashCode));
        if (this.capacity == 0) {
            var myIdx = mod(myHashCode, this.capacity+1);
        } else {
            var myIdx = mod(myHashCode, this.capacity+1);
        }
        //console.log(`myIdx = ${myIdx}`);
        if (this.table.length <= myIdx) {
            this.table.push(val);
            this.capacity++;
        }
    }
}

/*
function HashMap(capacity=0) {
    this.capacity = capacity;
    this.table = [];
}
*/

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
myHash.hashAdd('5', 2);
console.log(`hash capacity = ${myHash.capacity}`);
console.log(`hash table = [${myHash.table}]`);
