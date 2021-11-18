//const { LinkedList } = require("./solution");

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}
const first = new Node('hi');
const second = new Node('wassup');
first.next = second;
const firstList = new LinkedList(first)
console.log(firstList)
//console.log(first);