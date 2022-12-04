/* Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.*/

"use strict";

function flattenAndSort(array) {
  // P => array of integers
  // R => array of integers
  
  // Use flat method
  return array.flat().sort((a,b) => a-b);
}