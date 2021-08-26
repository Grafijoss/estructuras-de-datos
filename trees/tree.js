class Node {
    constructor(value) {
      this.right = null
      this.left = null
      this.value = value
    }
  }
  
  class Tree{
    constructor() {
      this.root = null
    }
  
    insert(value) {
      const newNode = new Node(value)
      // si no existe root value sera el primer nodo    
      if(!this.root) {
        this.root = newNode
      } else {
         let currrentPointer = this.root
         while(true) {
            // si el value es mayor que el value del current node
            // buscamos en la derecha   
           if(value > currrentPointer.value) {
             // si el nodo no existe
             // quiere decir que es el ultimo nodo
             // le asignamos el new node a right del current
             if(!currrentPointer.right) {
               currrentPointer.right = newNode
               // rompemos el while
               return this
             }
             // si el nodo existe
             // currentPonter es el right del currentPonter
             // iniciamos el while nuevamente
             currrentPointer = currrentPointer.right
           } else {
             // si el value es menor que el value del current node
             // validmos si existe el nodo a la izquierda
             if(!currrentPointer.left) {
               currrentPointer.left = newNode
               return this
             }
  
             currrentPointer = currrentPointer.left
           }
  
         }
      }
  
      return this
    }

    
    search(value) {
      // validamos si root existe
      if(!this.root) {
        return this
      }
      // si root.value = value
      // regresamos el root completo
      if(this.root.value === value) {
        return this
      } else {
        let currentNode = this.root       
        // mientras no encontremos el nodo 
        while(true) {
          // si el currentNode.value es igual a value
          // regresamos el nodo
          if(currentNode.value === value) {
            return currentNode
          } else {
             // si value es mayor que current.value
             // si el value es mayor a root
             // comenzamos por la derecha
            if(value > currentNode.value) {
              // si no existe el currentNode.right
              if(!currentNode.right) {
                // el nodo no existe
                return 'el nodo no existe'
              } else {
                // si el nodo existe
                // currentNode = currentNode.right
                // comenzamos el ciclo de nuevo
                currentNode = currentNode.right
              }

            } else {
              // si value es menos que currentNode.value
              // si currentNode.left no existe
              if(!currentNode.left) {
                // si no existe es el ultimo nodo
                // el value no existe en el tree
                return 'el nodo no existe'
              } else {
                // currentNode = currentNode.left
                // iniciamos el ciclo de nuevo
                currentNode = currentNode.left
              }
            }
          }
        }

     }
    }

    searchRecursive(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if(value > tree.value) {
            return this.searchRecursive(value, tree.right);
        }
        else if(value < tree.value) {
            return this.searsearchRecursivech(value, tree.left);
        }
        else {
            return "¡El elemento ha sido encontrado!";
        }

    }
}
  
  const myTree = new Tree()
  
  myTree.insert(10)
  myTree.insert(4)
  myTree.insert(20)
  myTree.insert(2)
  myTree.insert(8)
  myTree.insert(17)
  myTree.insert(170)
  