class Node {
    // value
    // next
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {

    // iniciar head con value y next 
    // tail se inicia igual a head
    // length inicia en 1

    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }


    append(value) { // in the end
        const newNode = new Node(value)
        this.tail.next = newNode 
        // tail tiene la misma referencia de head
        // si modificamos a tail modificamos a head
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value) { // adds an element at the beginning
        const newNode = new Node(value)

        // en nuwNode.next añadimos todo el head
        newNode.next = this.head
        // ahora head es newNode que el value agregado al inicio
        this.head = newNode
        this.length++

        return this

    }

    insert(index, value) {
      // el index nos sirve apra buscar el indice 
      // del elemento donde vamos a insertar el nuevo elemento

      if(index >= this.length) {
        // si index es mayor o igual al numero de elementos
        // añadimos el nuevo elemento al final
        return this.append(value)
      } else if(index === 0) {
        return this.prepend(value)
      }
      
      const newNode = new Node(value)
      const prevNode = this.getTheIndex(index - 1)
      const nextNode = prevNode.next
      newNode.next = nextNode
      prevNode.next = newNode

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

      if(this.length === 0) {
        return 'There are no elements to remove'
      } 

      if(index === 0) {
        this.head = this.head.next
        this.length--
        return this
      }
      
      const prevNode = this.getTheIndex(index - 1)
      const nodeToBeRemoved = prevNode.next
      const nextNode = nodeToBeRemoved.next
      
      // prev hace referencia al nodo dentro de head
      // si lo modificamos modificamos a head
      prevNode.next = nextNode
      this.length--

      if(!nextNode) {
        // prev node sigue haciendo referencia al nodo dentro de head
        // si lo modificamos modificamos a head
        // pero solo contiene value y next
        this.tail = prevNode
      }

      return this

    }


}


let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2)
myLinkedList.prepend(0)
myLinkedList.append(3)
console.log(myLinkedList.insert(3, 4))
myLinkedList.remove(4)
// myLinkedList.append(4)