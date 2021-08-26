class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  class Stack {
    constructor() {
      this.top = null
      this.bottom = null
      this.length = 0
    }
  
    push(value) {
      const newNode = new Node(value)
  
      if(!this.top) {
        this.top = newNode
        this.bottom = newNode
      } else {
        const holdingElement = this.top
        this.top = newNode
        this.top.next = holdingElement
      }
      
      this.length++
      return this
    }
  
    peek() {
      return this.top
    }
  
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;

        return this;
    }
  }
  
  const myStack = new Stack()