class MySinglyLinkedList {
    constructor(value) {
      // creamos el inicio de nuestro SinglyLinkedList
      this.head = {
        value,
        next: null,
      };
  
      // Aqui sucede la magia ✨
      // Todo lo que modifiquemos en los atributos de tail
      // se modificará en la estructura inicial
      // por la RERENCIA!
      this.tail = this.head;
  
      this.length = 1;
    }
  
    append(value) {
      // aquí estamos creando un nuevo nodo
      const newNode = new Node(value);
  
      // Como mencionamos anteriormente
      // si modificamos la cola por la REFERENCIA
      // se modificará la estructura inicial! 🖊
      this.tail.next = newNode;
      // Pero aun tail sigue apuntando a la CABEZA
      // de la estructura inicial entonces es momento
      // de apuntar al nuevo nodo creado para que posteriormente
      // podamos agregar más nodos! 🚀
      this.tail = newNode;
      // Finalmente aumentamos el tamaño definido de
      // nuestra estructura 👨‍🔧
      this.length++;
  
      return this;
    }
    
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const head = {
  value: 1,
  next: null,
  prev: null
}

// this.tail = this.head

const tail = {
  value: 1,
  next: null,
  prev: null
}


// value = 2
// const newNode = new Node(value)
// this.tail.next = newNode
// la primera vez head se modifica por que hacen referencia 
// al mismo espacio en memoria

const head2 = {
  value: 1,
  next: {
      value: 2,
      next: null,
      prev: null
  },
  prev: null
}

const tail2 = {
  value: 1,
  next: { // newNode
      value: 2,
      next: null,
      prev: null
  },
  prev: null
}

// this.tail = newNode 

const tail3 = {
  value: 2,
  next: null,
  prev: null
}

// tail ya no hace referencia a tail
// ahora tail hace referencia a newNode que es el ultimo elemento
// cuando se modifica tail se modificara solo ese ultimo elemento