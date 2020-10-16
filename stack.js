const { number } = require("prop-types");

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    if (this.top === null) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }
  display() {
    let print = "";
    if (this.isEmpty() || this.top === null) {
      return null;
    }
    let currNode = this.top;
    if (currNode.next === null) {
      return currNode.data;
    }
    while (currNode !== null) {
      print = print + currNode.data + " -> ";
      currNode = currNode.next;
    }

    return print;
  }
}

let starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
// console.log(starTrek);
// console.log(starTrek.peek());
starTrek.pop();
starTrek.pop();
console.log(starTrek);
console.log(starTrek.display());

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let first = new Stack();
  let second = new Stack();

  for (let i = 0; i < s.length / 2; i++) {
    first.push(s[i]);
  }

  for (let j = s.length - 1; j >= Math.floor(s.length / 2); j--) {
    second.push(s[j]);
  }

  return first.display() == second.display();
}
// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function isBalanced(s) {
  let match = new Stack();

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] === "(") {
      match.push("(");
    }
    if (s[i] === ")") {
      if (match.isEmpty()) {
        console.log("you are missing a (");
        return false;
      }
      match.pop();
    }
    console.log(match);
  }
  if (!match.isEmpty()) {
    console.log("you are missing a )");
    return false;
  }
  return true;
}

console.log(isBalanced("()"));


// Not sure how to do this.
function sortStack(stack) {
  if (stack.isEmpty()) return null;

  const newStack = new Stack();
  let minValue = stack.top.data;
  let maxValue = stack.top.data;
  let currNode = stack.top;

  while (currNode != null && currNode.next != null) {
      if (currNode.data > currNode.next.data) maxValue = currNode.data;
      if (currNode.data < currNode.next.data) minValue = currNode.data;
    currNode = currNode.next;
  }

  newStack.push(maxValue);

  return currNode;
}

let numbers = new Stack();
numbers.push(1);
numbers.push(2);

console.log(sortStack(numbers));

class Queue {
    constructor() {
      this.stack1 = new Stack()
      this.stack2 = new Stack()
    }
  
    enqueue(item) {
      this.stack1.push(item)
    } 
  
    dequeue() {
      if(!this.stack2.top) {
        if(!this.stack1.top) return 'There is nothing to dequeue!'
        while(this.stack1.top) {
          let p = this.stack1.pop()
          this.stack2.push(p)
        }
      }
      return this.stack2.pop()
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  
  console.log(queue.dequeue())