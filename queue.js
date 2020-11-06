class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  peek() {
    if (this.first === null) {
      this.first = null;
    }
    return this.first;
  }
  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
  display() {
    let print = "";
    if (this.isEmpty() || this.first === null) {
      return null;
    }
    let currNode = this.first;
    if (currNode.next === null) {
      return currNode.value;
    }
    while (currNode !== null) {
      print = print + currNode.value + " -> ";
      currNode = currNode.next;
    }

    return print;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

let starTrekQ = new Queue();
starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

console.log(starTrekQ.display());

starTrekQ.dequeue();
starTrekQ.dequeue();

console.log(starTrekQ.display());

class _DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  enqueue(data) {}
  dequeue() {}
}

function percent() {
    return Math.floor(Math.random() * 4) + 1  
}

class Bank {
    constructor() {
      this.first = null;
      this.last = null;
    }
    peek() {
      if (this.first === null) {
        this.first = node;
      }
      return this.first;
    }
    isEmpty() {
      if (this.first === null) {
        return true;
      } else {
        return false;
      }
    }
    display() {
      let print = "";
      if (this.isEmpty() || this.first === null) {
        return null;
      }
      let currNode = this.first;
      if (currNode.next === null) {
        return currNode.value;
      }
      while (currNode !== null) {
        print = print + currNode.value + " -> ";
        currNode = currNode.next;
      }
  
      return print;
    }
    enqueue(data) {
      const node = new _Node(data);
  
      if (this.first === null) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
      }
      this.last = node;
    }
    dequeue() {
      if (this.first === null) {
        return;
      }

      if(percent() === 1){
        this.enqueue(node.value)
        return;
      }

      const node = this.first;
      this.first = this.first.next;
      //if this is the last item in the queue
      if (node === this.last) {
        this.last = null;
      }

      
      return node.value;
    }
  }

let starTrekQ = new Bank();
starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
