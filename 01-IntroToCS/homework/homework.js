"use strict";

function BinarioADecimal(num) {
  let array = num.split(""); // Aqui el numero binario lo separamos y lo ponemos en una array
  let arrayReverse = array.reverse(); // lo volteamos
  let sum = 0; // la suma total de los resultados 
  for (let i = 0; i < num.length; i++){ //metodo para recorrer el arreglo desde la posicion 0
    sum = sum + arrayReverse[i] * 2 ** i; // hacemos la operacion
  }
  return sum; // retornamos el resultado
}


function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  let binario = []; //array para guardar los binarios
  while (num >= 1){ //condicion para que no sea mayor a 1 
    let res = Math.trunc(num % 2); //declaramos una variable residuo y hacemos la operacion "Math.trunc" para que redondee y quitar el .5
    num = num/2; // la operacion

    if ( res == 0){ // condicion para guardar el 0
      binario.unshift(res) // lo guardamos en el array al principio con el metodo ".unshift()"
    }
    if ( res !== 0){  // condicion para guardar el 1
      binario.unshift(res) // lo guardamos en el array al principio con el mismo metodo
    }
  } 
  return binario.join(""); // retornamos el resultado con el metodo "join("")" para juntar los binarios y convirtiendolo en string. 

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
