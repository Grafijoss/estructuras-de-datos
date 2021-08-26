## graphs

- **Edge** List: Te dice por medio de pares, quiénes son esos nodos que tienen conexión entre sí, es como si los juntáramos diciendo “este con este, este con este y este con este”, lo normal cuando pareamos cosas.

- **Adjacent** List: Te dice qué elementos conoce a cuáles, para ponerlo en contexto, imagina a las personas que tu conoces, tú conoces a “n” cantidad de personas, pues básicamente esa sería tu primer índice del arreglo en un adjancent list, pero ten en cuenta que todas esas personas que tú conoces también conocen a otras personas, de entre ellas tú, así que esa sería tu segunda posición del arreglo, todas las personas que otra persona conoce.

- **Adjancent Matrix**: Esto es un poquito más de imaginación, el Adjancent Matrix te pone a todas las personas que existen en una lista y te empieza a preguntar: ¿Conoces a esta persona? Si sí entonces la pone en 1, si no entonces la pone en 0, y así por cada persona que exista, cada índice representa a una persona, por eso digo que necesitas imaginartelas.

```javascript
/* 
   2 - 0
  / \
 1 - 3
*/

// Edge List

const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
//       0    1     2        3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix

const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
```

---

> https://leetcode.com/explore/learn/