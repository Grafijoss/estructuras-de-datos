class Graph {
    constructor() {
        // contador de nodos
        // es necesario por los index
        this.nodes = 0
        // adjacentList
        // es un objeto de arreglos
        // cada llave o indice es el nodos
        this.adjacentList = {}
    }

   addVertex(node){
    // añadimos un vertice
    // adjacentList es un objeto
    // la llave es el nodo
    // por cada nodo hay un arreglo en adjacentList
    this.adjacentList[node] = []
    // aumentamos el contador de nodes
    this.nodes++
   }

   addEdge(node1, node2) {
    // añadimos las conexiones entre nodos
    // cada edge representa la linea que conecta los nodos
    this.adjacentList[node1].push(node2)
    // cada conexion es bilateral
    this.adjacentList[node2].push(node1)
   }
}

const myGraph = new Graph()

myGraph.addVertex('1')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addVertex('8')

myGraph.addEdge('3', '5')
myGraph.addEdge('6', '3')
myGraph.addEdge('1', '6')
myGraph.addEdge('1', '3')
myGraph.addEdge('', '5')
myGraph.addEdge('4', '1')
myGraph.addEdge('8', '4')

// adjacentList:
// 1: (3) ["6", "3", "4"]
// 3: (3) ["6", "5", "1"]
// 4: (3) ["5", "1", "8"]
// 5: (2) ["3", "4"]
// 6: (2) ["1", "3"]
// 8: ["4"]
// nodes: 6
