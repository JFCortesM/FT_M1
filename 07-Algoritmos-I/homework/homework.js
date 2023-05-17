'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // Crear un arreglo inicial con el factor 1, ya que todos los números son divisibles por 1
  let arrFactores = [1];
  
  // Inicializar el divisor en 2, el primer número primo
  let divisor = 2;
  
  // Utilizar un bucle while para encontrar los factores del número
  while (num > 1) {
    // Verificar si el número es divisible por el divisor actual
    if (num % divisor === 0) {
      // Si es divisible, agregar el divisor al arreglo de factores
      arrFactores.push(divisor);
      
      // Dividir el número por el divisor para seguir encontrando los factores
      num /= divisor;
    } else {
      // Si no es divisible, incrementar el divisor y continuar buscando
      divisor++;
    }
  }
  
  // Devolver el arreglo de factores resultante
  return arrFactores;
}


function bubbleSort(array) {

  // -----------opcion 1-------------
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Iterar sobre el array
//  for (let i = 0; i < array.length - 1; i++) {
    // Iterar sobre el array restante
//    for (let j = i + 1; j < array.length; j++) {
      // Comparar elementos adyacentes
//      if (array[i] > array[j]) {
        // Intercambiar elementos si están en el orden incorrecto
//        let aux = array[i];
//        array[i] = array[j];
//        array[j] = aux;
//      }
//    }
//  }

  // Devolver el array ordenado
//  return array;

let swap = true;

while(swap){
  swap = false;
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] > array[i + 1]){
      let aux = array[i];
      array[i] = array[i + 1];
      array[i + 1] = aux
      swap = true;
    }
  }
}
return array;
};


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Recorremos el arreglo desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Guardamos el valor actual a insertar
    let aux = array[i];
    let j = i - 1;

    // Desplazamos los elementos mayores hacia la derecha
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }

    // Insertamos el valor actual en la posición correcta
    array[j + 1] = aux;
  }

  // Devolvemos el array ordenado
  return array;
}


 function selectionSort(array) {
//   // Implementar el método conocido como selectionSort para ordenar de menor a mayor
//   // el array recibido como parámetro utilizando dos arreglos
//   // Devolver el array ordenado resultante
//   // Tu código:

//   // Creamos un nuevo arreglo para almacenar los elementos ordenados
//   let sortedArray = [];

//   // Recorremos el arreglo original y encontramos el elemento mínimo en cada iteración
//   while (array.length > 0) {
//     let min = array[0];
//     let minIndex = 0;

//     // Buscamos el elemento mínimo
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//         minIndex = i;
//       }
//     }

//     // Insertamos el elemento mínimo en el arreglo ordenado y lo eliminamos del arreglo original
//     sortedArray.push(min);
//     array.splice(minIndex, 1);
//   }

//   // Devolvemos el arreglo ordenado
//   return sortedArray;

for(let i = 0;i < array.length;i++){
  let minIndex = i;
  for(let j = i + 1; j < array.length; j++){
    if(array[j] < array[minIndex]){
      minIndex = j;
    }
  }
  if( i !== minIndex){
    let aux = array[i];
    array[i] = array[minIndex];
    array[minIndex] = aux;
  }
}
return array;
 }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
