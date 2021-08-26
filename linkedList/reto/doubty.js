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
        prev: null
      }
  
      this.tail = this.head
      this.length = 1
      
    }
  
    append(value) { // adds an element at the end
      
      const newNode = new Node(value)
      
      // prev debe hacer referencia al nodo antes del ultimo
      //  cuando añadimos un nuevo nodo prev debe ser la cola anterior
      newNode.prev = this.tail;
  
      // tail debe ser el ultimo elemento de head
      this.tail.next = newNode 
      
      // una vez añadido el nuevo nodo tail debe 
      // hacer referencia al nuevo nodo
      this.tail = newNode   
      this.length++
  
      return this
  
    }
  
    prepend(value) { // adds an element at the beggining
      const newNode = new Node(value)
      // head.prev es prev del primer nodo
      // el prev del primer nodo debe ser el nuevo nodo
      this.head.prev = newNode
  
      // el next de newNOde es todo el head
      newNode.next = this.head
  
      // head debe ser el nuevo nodo completo
      // donde el next del newNode es al head antwerior
      this.head = newNode
      
      this.length++
      return this
    }
  
    getTheIndex(index) { // returns the given index node
      let count = 0
      let currentNode = this.head
    
      while(count !== index) {
        currentNode = currentNode.next
        count++
      }
  
      return currentNode
    }
  
    insert(index, value) { // inserts an element at the specified index
  
      const newNode = new Node(value)
      
      if(index === 0) {
        console.log('prepend')
         return this.prepend(value)
      }
  
      if(index === this.length) {
        console.log('append')
        return this.append(value)
      }
      
      const middleNode = this.getTheIndex(index)
      const prevNode = middleNode.prev
      const nextNode = prevNode.next
      
      newNode.prev = prevNode
      newNode.next = nextNode
      prevNode.next = newNode
  
      this.length++
      return this  
  
    }
  
    remove(index) { // remove the node from the index
      
       const nodeToBeRemoved = this.getTheIndex(index)
       const prevNode = nodeToBeRemoved.prev
       const nextNode = nodeToBeRemoved.next
  
       if(prevNode && nextNode) {
         // existe el nodo antes y despues del index
         prevNode.next = nextNode
         nextNode.prev = prevNode
       } else if(!prevNode) {
         // es 0
         // si no existe el anterior
         // el prev de next debe ser null
         // el head es igual a nextNode
         nextNode.prev = null
         this.head = nextNode
       } else if(!nextNode) {
        // es el ultimo nodo
        // el next de prevNode es null
        // como se elimina el ultimo nodo
        // tai debe ser prevNode
         prevNode.next = null
         this.tail = prevNode
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
  myDoublyLinkedList.insert(3, 5)
  myDoublyLinkedList.remove(3)
  myDoublyLinkedList.append(5)
  