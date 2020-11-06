class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }

// [L]ast [I]n [F]irst [O]ut 
// O(1) because only top of the stack

class Stack {
    constructor() {
        this.top = null;
    }
    push(item) {
        // if empty
        if(!this.top) {
            this.top = new _Node(item, null);
        }

        const node = new _Node(item, this.top)
        // node.next ---> node
        this.top = node;
    }
    pop() {
        if(!this.top) {
            return null;
        }
        const node = this.top
        this.top = node.next;
        // node ---> node.data
        return node.data;
    }
}