'use strict';

const { prototype } = require("@11ty/eleventy");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
  en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() { 
  this.head = null;  // siempre empezar en null como cabeza de codigo
}

function Node(value) { 
  this.value = value; // el primer valor del nodo
  this.next = null; // el next del nodo, paso a seguir
}

LinkedList.prototype.add = function(value){  // funcion para adicionar nodos al final de la lista
  let node = new Node(value); // lo que primero que se crea es el nodo
  let current = this.head; // siempre guardar la referencia 
  
  
  if(current === null){ // condicion si nuestra cabeza este vacia, en caso de que si.
    this.head = node; // agregamos el nodo
    return node; // retornamos el nodo
  }
  while(current.next){ //
    current = current.next;
  }
  current.next = node;
  return node;
} 


LinkedList.prototype.remove = function(){
  let current = this.head;
  
  if(this.head === null) return null;
  
  else if(current.next === null){
    let aux = this.head.value;
    this.head = null;
    return aux;
  }
  while(current.next.next){
    current = current.next;
  }
  let value = current.next.value;
  current.next = null;
  return value;
}

LinkedList.prototype.search = function(value){
  let current = this.head;
  
  while(current) {
    if (typeof value === 'function'){
      if(value(current.value)) return current.value; 
    } 
    else {
      if(current.value === value) return current.value;
    } 
    current = current.next;
  }
  return null;
}



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {  // funcion constructora
  this.table = [];  // declaramos la tabla
  this.numBuckets = 35 // decalramos el numero de sockets de la tabla
}

HashTable.prototype.hash = function (key){  // metodo prototipica refiriendose a la funcion constructora y a un parametro de entrada
  let hash = 0; // declaramos una variable para poder sacar los valores unicode de la key por cada letra del string 

   for (let i = 0; i < key.length; i++) { // recorremos el string por medio del for 
     hash += key.charCodeAt(i); // iteramos guardando en la variable 'hash' la suma del valor de cada posicion de letra del string 
   }
   return hash % this.numBuckets // retornamos el resto de los numbackets el cual es la posicion 
}

HashTable.prototype.set = function (key, value){ // metodo protipica refiriendose a la funcion constructora y dos parametros de entrada
  let index = this.hash(key); // guardamos el metodo hash en una variable

  if(typeof key !== 'string') throw TypeError('Keys must be strings'); // arrojamos un error por si el parametro no es de tipo string
  if(!this.table[index]){ // si no existe un valor en la posición 'index' del arreglo 'table', entonces...
    this.table[index] = {} // en esa posicion creamos un objeto para poder almacenar mas parametros iguales con direnete valor
  }
  this.table[index][key] = value // almacenamos el valor 'value' al parametro 'key' en la posicion 'index' del arreglo 'table'
}

HashTable.prototype.get = function (key){ // metodo protipica refiriendose a la funcion constructora y un parametro de entrada
  let index = this.hash(key); // guardamos en una variable el parametro retornado del metodo hash 'key' para poder saber la posicion 
  return this.table[index][key] // retornamos la posicion junto con el parametro
}

HashTable.prototype.hasKey = function (key){ // metodo protipica refiriendose a la funcion constructora y dos parametros de entrada
  let index = this.hash(key); // guardamos en una variable el parametro retornado del metodo hash 'key' para poder saber la posicion 
  return !!this.table[index][key] // retornamos la posicion junto con el parametro pero en este caso retornamos con '!!' para que pueda retornar como booleano
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
