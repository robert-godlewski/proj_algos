console.log('###############################');
console.log('HashMap');


// For using a Hashmap function
function HashMap(capacity) {
    this.capacity = capacity;
    this.table = [];
}

var myHashCode = myString.hashCode();

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

function mod(input, div) {
    return (input % div + div) % div;
}

var myIdx = mod(myHashCode, arrSize);

console.log('---------------');
console.log('Adding to the HashMap');