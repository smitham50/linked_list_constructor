class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //FIFO QUEUE 
  //add to tail 
  enqueue(element) {
    let node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = node;
    }

    this.size++;
  };
  //remove from head
  dequeue() {
    this.head = this.head.next;
    this.size--;
  }
  //PUSHDOWN STACK
  //add to head
  push(element) {
    let prevHead = this.head;
    this.head = new Node(element);
    this.head.next = prevHead;
    this.size++;
  }
  //remove from head
  pop() {
    let element = this.head.element;
    this.head = this.head.next;
    this.size--;
    return element;
  }
  //iterate over list and print elements
  eachNode() {
  let current = this.head;
    while (current.next) {
      console.log(current.element);
      current = current.next;
    }
  }
  //get node at index
  nodeAtIndex(index) {
    let count = 0;
    let current = this.head;
    while (current.next) {
      if (count === index) {
        console.log(current.element);
        break;
      }
      current = current.next;
      count++;
    }
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}




let list = new LinkedList();
list.enqueue("first");
list.enqueue("second");
list.enqueue("third");
// console.log(list, list.head, list.head.next, list.head.next.next);
list.enqueue("first");
// console.log(list, list.head, list.head.next, list.head.next.next);
list.push("fifth");
list.push("sixth");
// console.log(list, list.head, list.head.next, list.head.next.next);
list.eachNode();
list.nodeAtIndex(3);

