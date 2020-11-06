class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// F]irst [I]n [F]irst Out
class Queue {
  constructor(data, next) {
    this.first = null;
    this.last = null;
  }
  enqueue(item) {
    const node = new _Node(item, null)
      if(!this.first) {
          this.first = node;
      }

      if(this.last) {
          this.last.next = node;
      }
      this.last = node;
  }
  dequeue() {
    if(!this.first) {
        return null;
    }

    const node = this.first;
    this.first = node.next;

    // if 2 elements basically
    if (node === this.last) {
        this.last = null;
    }

    return node.data;
  }

}
