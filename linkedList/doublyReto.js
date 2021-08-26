class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
      // añadimos al inicio
      const newNode = new Node(value)
      newNode.next = this.head

      this.head = newNode
      this.length++

      return this
  }

  insert(index, value) {
      if(index >= this.length) {
          return this
      }
      
      const newNode = new Node(value)
      const firstPointer = this.getTheIndex(index - 1)

      const holdingPointer = firstPointer.next

      firstPointer.next = newNode
      newNode.prev = firstPointer
      newNode.next = holdingPointer
      holdingPointer.prev = newNode

      this.length++

      return this

  }

  getTheIndex(index) {
      let counter = 0
      let currentNode = this.head

      while(counter !== index) {
          currentNode = currentNode.next
          counter++
      }
      
      return currentNode
  }

  remove(index) {
      if(index >= this.length) {
          return 'fuera del rango'
      }
      
      const nodeToBeRemoved = this.getTheIndex(index)
      const nextPointer = nodeToBeRemoved.next
      const prevPointer = nodeToBeRemoved.prev

      if (prevPointer && nextPointer) {
          prevPointer.next = nextPointer;
          nextPointer.prev = prevPointer;
      } else if (!prevPointer) {
          nextPointer.prev = null;
          this.head = nextPointer;
      } else if (!nextPointer) {
          prevPointer.next = null;
          this.tail = prevPointer;
      }

      this.length--
      return this
      

  }


}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)
myDoublyLinkedList.append(4)
myDoublyLinkedList.prepend(0)

console.log(myDoublyLinkedList.insert(2, 5))
console.log(myDoublyLinkedList.remove(2))