class LinkedList {
  constructor()
  {
    this.head = null;
    this.size = 0;
  }
  add(element) {
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
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

let list = new LinkedList();
list.add("first");
list.add("second");
list.add("third");
console.log(list, list.head, list.head.next, list.head.next.next);