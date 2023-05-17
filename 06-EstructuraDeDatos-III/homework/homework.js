'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
 };

BinarySearchTree.prototype.size = function() {
   let counter = 1;
 
   if (this.left) {
     counter += this.left.size();
   }
   
   if (this.right) {
     counter += this.right.size();
   }
   
   return counter;
 };

 BinarySearchTree.prototype.insert = function(value) {
   if (value <= this.value) {
     if (this.left) {
       this.left.insert(value);
     } else {
       this.left = new BinarySearchTree(value);
       return value;
     }
   } else {
     if (this.right) {
       this.right.insert(value);
     } else {
       this.right = new BinarySearchTree(value);
       return value;
     }
   }
 };

BinarySearchTree.prototype.contains = function(value) {
   if (this.value === value) {
     return true;
   }
 
   if (value <= this.value) {
     if (!this.left) {
       return false;
     } else {
       return this.left.contains(value);
     }
   } else {
     if (!this.right) {
       return false;
     } else {
       return this.right.contains(value);
     }
   }
 };


 // pedido -> in order -> izq - nodo - dere
 // pedido -> pre order -> nodo - izq - dere
 // pedido -> post order -> izq - dere - nodo
BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
  if(pedido === 'in-order' || pedido === undefined){
    if(this.left && this.left.depthFirstForEach(cb, pedido));   // izq
    cb(this.value);                                             // nodo
    if(this.right && this.right.depthFirstForEach(cb, pedido)); // dere
  }
  if(pedido === 'pre-order'){
    cb(this.value);                                             // nodo
    if(this.left && this.left.depthFirstForEach(cb, pedido));   // izq 
    if(this.right && this.right.depthFirstForEach(cb, pedido)); // dere
  }
  if(pedido === 'post-order'){
    if(this.left && this.left.depthFirstForEach(cb, pedido));   // izq 
    if(this.right && this.right.depthFirstForEach(cb, pedido)); // dere
    cb(this.value);                                             // nodo
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []){
  if(this.left !== null) value.push(this.left);
  if(this.right !== null) value.push(this.right);
  cb(this.value);  
  if(value.length > 0) value.shift().breadthFirstForEach(cb, value);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
