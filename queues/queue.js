class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
  }
  
  class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.length = 0
    }
  
    peek() {
      // regresa el primer elemento completo
      return this.first
    }
  
    enqueue(value) {
       const newNode = new Node(value)
  
      if(this.length === 0) {
        this.first = newNode
        this.last = newNode
      } else {
        // en este momento hace referencia
        // tambien al next de first
        // si hay mas de un elemento hace referencia 
        // al ultimo de first
        // el contructor de Node tiene value y next
        // para modificar a l ultimo elemento de first
        // modificamos los elementos de la clase
  
        this.last.next = newNode
        // aqui pasa la referencia al ultimo elemento
        // no podemos modificar directamente la referencia
        // de first cambiando last
        this.last = newNode    
      }
  
      this.length++
  
      return this
  
    }
    
  
    dequeue() {
      if(!this.first) {
        return null
      }
      
      // esta condicion pasa cuando solo existe un elemento
      // este elemento es igual en first y last
      if(this.first === this.last) {
        this.last = null
      }
      
      // cuando cambia this.last = null
      // no cambia this.first
      this.first = this.first.next
      this.length--
  
      return this
    }
  
    
  
  }
  
  const myQueue = new Queue()