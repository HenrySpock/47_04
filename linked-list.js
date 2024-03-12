/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;  
      } else {
        this.tail.next = newNode; // link the current tail to the newNode
        this.tail = newNode; // set the newNode to tail
      }

      this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val); 

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
      newNode.next = this.head; // link the newNode to the current head
      this.head = newNode; // set the newNode to new head
      }
      this.length++;
  }
  

  /** pop(): return & remove last item. */

  pop() {
    // If list is empty.
    if (!this.head) throw new Error('Linked list is empty.')

    // If list has 1 node.
    if (this.head === this.tail) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
   
    // Traverse the list to find the node before the tail
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    // Remove tail and set new tail.
    const val = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // If list is empty.
    if (!this.head) throw new Error('Linked list is empty.')

      // Store head value for return.
      const val = this.head.val;

      // Move head to next node.
      this.head = this.head.next;
      this.length--;

      // If list becomes empty after removal:
      if (!this.head){
        this.tail = null;
      }

      return val;
    }

  

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // If index is out of bounds.
    if (idx < 0 || idx >= this.length) {
      return new Error('Index is out of bounds.')
    }

    // If list is empty.
    if (!this.head) throw new Error('Linked list is empty.')

    // Traverse the list to find the node before the tail
    let current = this.head;
    for (let i = 0; i < idx; i++){
      current = current.next;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // If index is out of bounds.
    if (idx < 0 || idx >= this.length) {
      return new Error('Index is out of bounds.')
    }

    let current = this.head;
    for (let i = 0; i < idx; i++){
      current = current.next;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // If index is out of bounds.
    if (idx < 0 || idx > this.length) {
      return new Error('Index is out of bounds.')
    }

    // If inserting at beginning or end, use existing methods. 
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // List traversal to index before insertion point.
    let current = this.head;
    for (let i = 0; i < idx - 1; i++){
      current = current.next;
    }

    // Create new node. 
    let newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;

    this.length++;

  }
  

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // If index is out of bounds.
    if (idx < 0 || idx >= this.length) {
      return new Error('Index is out of bounds.')
    }

    // If removing at the beginning.
    if (idx === 0) {
      return this.shift(); 
    }

    // If removing last item.
    if (idx === this.length -1) {
      return this.pop();
    }

    // List traversal to removal index.
    let current = this.head;
    for (let i = 0; i < idx -1 ; i++){
      current = current.next;
    }

    // Save return value.
    const removedVal = current.next.next;

    // If removing second-to-last node, update the tail.
    if (idx === this.length - 2) {
      this.tail = current;
    }

    this.length--;
    return removedVal;

  }
  

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0; 
    }

    let sum = 0; 
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
