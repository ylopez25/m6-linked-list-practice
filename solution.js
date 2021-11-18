const { nums, words } = require("./data/data.js");
class Node {
constructor(data) {
  this.data = data;
  this.next = null;
}
}

class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  /**
   * Inserts data at the head of the list
   * 
   * @param {*} data - the data to insert
   */
   insert(data){
     const newNode = new Node(data);
     newNode.next = this.head;
     this.head = newNode
   }

   /**
    * Finds the number of nodes in the list
    * 
    * @returns size - number of nodes in list
    */
   size(){
      let current = this.head
      let count = 0;
      while (current) {
      count += 1
      current = current.next
      }
      return count;
   }
 
   /**
    * Deletes a node from the list based on it's location in the list.
    * For example, list.delete(0) should remove the head of the list.
    * 
    * @param {Number} idx - the "index" of the node to delete
    */
   delete(data){
     let current = this.head;
      let counter = 0;
      while(current.data !== data && current.next) {
        counter++;
        current = current.next;
      }
      let foundNode = current;
      current = this.head;
      for (let i = 1; i < counter; i++) {
        current = current.next;
      }
      current.next = foundNode.next
   }
 
   /**
    * @returns {Node} - the first node (i.e. the head) of the list
    */
   getFirst(){
     return this.head
   }
 
   /**
    * @returns {Node} - the final non-null node of the list
    * go over it !!!
    */
   
   getLast(){
     let current = this.head
     while(current) {
       if (current.next === null) return current ;
      current = current.next;
      };
    }
 
   /**
    * Returns a node containing the provided data, or null otherwise.
    * 
    * @param {*} data - data to search for in the list
    * @returns {Node | null} - the node containing the data, or null
    */
   search(key){
let node = this.head;
while( node !== null && node.data !== key) {
  node = node.next;
}
return node
   }
 
   /**
    * Returns a node at position k in the list. If no such node exists, return null.
    * 
    * @param {Number} k - "index" of the node to return.
    * @returns {Node | null}
    */
   getKth(k){
    let current = this.head;
    let count = 1;
    while ( count < k) {
      current = current.next;
      count++;
    }
    return current;
   }
   
   /**
    * Returns a node k spots from the end of the list. For example, list.getKthToLast(0) returns the final node.
    * 
    * @param {Number} k 
    * @returns {Node | Null}
    */
   getKthToLast(k){
  let node = this.head;
  for(let i =1; i < this.size() - k; i++) {
    node = node.next;
  }
  return node;
   }
 
   /**
    * @returns {Boolean} - true if there is at least one node in the list, and false otherwise
    */
   isEmpty(){
     // checking if there is no this.head
   return !this.head
   
   }
 
   clear() {
     this.head = null;
   }
   /**
    * @returns {Array} - an array where the 0th element is the data at the head of the list, etc
    */
   toArray(){
     //create an empty array
     let arr = [];
     //binding for current
     let currentnode = this.head;
     //loop while there is this.head
     while(currentnode) {
       //add it to array
       arr.push(currentnode.data)
       //move pointer to next el
       currentnode = currentnode.next
     }
     return arr
   }
 
   /**
    * @returns {Boolean} - true if multiple nodes contain the same data
    */
   containsDuplicates(){
     //create an object to keep track of duplicates
     let obj = {};
     //assign node
     let node = this.head;
     //loop while this.head is present
     while(node) {
       //check if data is in obj
      if(obj[node.data]) {
        //increase if it is already there
        obj[node.data] += 1;
        //assign node to next 
        node = node.next;
      }else {
        //if data is not already in obj then let it equal 1
        obj[node.data] = 1;
        // assign node to next : why? 
      node = node.next;
      }

     }
//checks for duplicates in obj by checking if the key is greater than 1
     for (const key in obj) {
       if (obj[key] > 1) {
         return true;
       }
      }
       return false
   }
}

console.log(new Node(nums.data))
module.exports = {
  Node,
  LinkedList,
};
