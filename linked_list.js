class LinkedList {
  constructor()
  {
    this.head = null;
    this.size = 0;
  }
  //FIFO queue, add to tail, remove from head
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
  dequeue() {
    this.head = this.head.next;
    this.size--;
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
console.log(list, list.head, list.head.next, list.head.next.next);
list.dequeue();
list.enqueue("first");
console.log(list, list.head, list.head.next, list.head.next.next);