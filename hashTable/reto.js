class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    hashMethod(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        //  devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
        // i entero entre 0 y 1 menos que la longitud de la cadena
        // % se a X el numero de veces que Y alcanza x  x % y    ej 12 % 5 = 2
        
      }
      return hash;
    }
    set(key, value) {
        // establece la celda en la tabla con el hash como address
        // address es la posicion que tiene en el array
        // la celda es un arrehlo con ds posiciones key, value
        // si el address se hace push si no existe se crea y se hace push

        const address = this.hashMethod(key)

        if(!this.data[address]) {
            this.data[address] = []
        }

        this.data[address].push([
            key,
            value
        ])

    }
  
    get(key) {
        // recupera el value con key
        // el address es un arreglo con arrelos
        // el key debe hacer match con la pocion uno del arreglo

        // recuperamos el address para buscar la posicion en elarreglo
        const address = this.hashMethod(key)
        // let's to find the current poition
        const current = this.data[address]

        if(current) {
            for(let i = 0; i < current.length; i++) {
                if(current[i][0] === key) {
                    return current[i][1] // value
                }
            }
        }

        return undefined

    }

    getAllKeys() {
        const allKeys = []
        
        for(let i  = 0; i < this.data.length; i++) {
            if(!!this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    allKeys.push(this.data[i][j][0])
                }
            }
        }

        return allKeys
    }
  
  
    remove(key) {
        // eliminar una celda de la tabla con el key
        // la celda sedebe buscar en un array de arrays
        const elementDeleted = key
        const address = this.hashMethod(key)
        const current = this.data[address]

        if(current) {
            delete this.data[address]
        }
        return elementDeleted
    }
  }

  const myHashTable = new HashTable(50)
  myHashTable.set('claudia', 1985)
  myHashTable.set('jose', 1983)
  myHashTable.set('pin', 1985)
  console.log(myHashTable.get('pin'))
  console.log(myHashTable.getAllKeys())
  myHashTable.remove('pin')
  console.log(myHashTable.getAllKeys())