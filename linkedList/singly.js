// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null
0;
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    // insertamos un nodo en el index recibido
   
    if(index >= this.length) {  // si el indice no existe lo enviamos al final
      return this.append(value)
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1)
    // se combierte en el nodo antes del index
    const holdingPointer = firstPointer.next 
    // el next the firstPointer queda guardado para que garbage collector no lo elimine
    firstPointer.next = newNode
    // firstPointer next se combierte newNode
    newNode.next = holdingPointer
    // ahora a newNode.next le agregamos el holdingPointer que estaba guardado

    this.length++
    // incrementamos la longitud

    return this
    // regresamos la lista

  }

  getTheIndex(index) {
    let counter
    let currentNode = this.head

    while(counter !== index) {
      current = this.currentNode.next
      counter++
    }

    return currentNode
  }
}

let myLinkedList = new MySinglyLinkedList(1);
