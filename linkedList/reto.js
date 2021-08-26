class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {
    constructor (value) {
        this.head = {
            value,
            next: null
        }

        this.tail = this.head
        // head and tail have the same reference
        // whaterve happens to one will happen to the other

        this.length = 1
    }

    test() {
    }

    append(value) { // in the end

        const newNode = new Node(value)

        // al next que esta hasta el final de head => tail
        // le añadimos newNode

        this.tail.next = newNode
        
        // ahora tail ya no va a apuntar head 
        // apunta al elemento que esta hasta el final
        this.tail = newNode

        this.length++

        return this
    }

    prepend(value) { // in the beginning

        const newNode = new Node(value)

        // le añadimos head a next de newNode
        newNode.next = this.head

        // ahora head sera newNode que tiene como ultimo elemento a head
        this.head = newNode

        this.length++

        return this

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
        // reresamos la lista
    
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
       
        if(index >= this.length) {  // si el indice no existe lo enviamos al final
            return  `${index} index does not exist`
        }

        const firstPointer = this.getTheIndex(index - 1)
        // obtenemos el pointer del elemento que contiene el nodo que se elimina        
        const nodeToBeRemoved = firstPointer.next
        // guardamos el nodo que se elimina
        const holdingPointer = nodeToBeRemoved.next
        // guardamos el next del nodo que se elimina
        firstPointer.next = holdingPointer
        // pasamos el holdingPointer como el next de firstPointer
        this.length--
        // reducimos la longitud del length en 1

        return nodeToBeRemoved.value
        // regresamos el value en caso de necesitarlo
      
      }


}


let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2)
myLinkedList.prepend(0)
myLinkedList.append(3)
myLinkedList.insert(2, 4)
console.log(JSON.stringify(myLinkedList.append(myLinkedList.remove(2))))



