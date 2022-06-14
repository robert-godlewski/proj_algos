// Basic Linked List Node that we will need to store data
class Node {
    constructor(data) {
        // Values are stored in the data
        this.data = data;
        // Reference point to the next node that comes next in the list
        this.next = null;
        // Reference point to the previous node that came before in the list
        this.previous = null;
    }
}
