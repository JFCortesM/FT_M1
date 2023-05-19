'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Si el arreglo tiene longitud 0 o 1, ya está ordenado, se devuelve el arreglo original
  if (array.length <= 1) return array;

  // Seleccionar un elemento aleatorio como pivote
  let pivot = array[Math.floor(Math.random() * array.length)];

  // Arreglos para almacenar los elementos menores, iguales y mayores que el pivote
  let izq = [];
  let der = [];
  let igu = [];

  // Iterar sobre el arreglo y separar los elementos en los arreglos correspondientes
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== pivot) {
      if (array[i] > pivot) {
        der.push(array[i]); // Elemento mayor al pivote
      } else {
        izq.push(array[i]); // Elemento menor al pivote
      }
    } else {
      igu.push(array[i]); // Elemento igual al pivote
    }
  }

  // Llamar recursivamente al quickSort para ordenar los subarreglos izquierdo y derecho
  // Concatenar los arreglos ordenados izquierdo, igual y derecho
  return quickSort(izq).concat(igu).concat(quickSort(der));
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Verificar si el array tiene 1 elemento o menos, en cuyo caso ya está ordenado
  if (array.length <= 1) return array;
   
  // Encontrar el índice de la mitad del array
  let mitad = Math.floor(array.length/2);
  
  // Dividir el array en dos mitades, izquierda y derecha
  let izq = array.slice(0, mitad);
  let der = array.slice(mitad);

  // Ordenar recursivamente las mitades izquierda y derecha utilizando mergeSort
  return merge(mergeSort(izq),mergeSort(der));
}

function merge(izq, der){
  // Crear un array para almacenar los elementos fusionados
  let mergedArray = [];
  
  // Inicializar los índices para recorrer las mitades izquierda y derecha
  let indiceDer = 0;
  let indiceIzq = 0;

  // Comparar los elementos de las mitades izquierda y derecha y fusionarlos en orden
  while(indiceIzq < izq.length && indiceDer < der.length){
    if(izq[indiceIzq] < der[indiceDer]){
      // Si el elemento de la mitad izquierda es menor, se agrega al array fusionado
      mergedArray.push(izq[indiceIzq]);
      indiceIzq++;
    } else {
      // Si el elemento de la mitad derecha es menor, se agrega al array fusionado
      mergedArray.push(der[indiceDer]);
      indiceDer++;
    }
  }
  
  // Concatenar los elementos restantes de las mitades izquierda y derecha al array fusionado
  return mergedArray
  .concat(izq.slice(indiceIzq))
  .concat(der.slice(indiceDer));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
