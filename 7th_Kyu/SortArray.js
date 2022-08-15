/* Write a function that takes an array of strings as an argument and returns a sorted array containing 
the same strings, ordered from shortest to longest. */


function sortByLength (array) {
  // P => array of strings
  // R => array of strings
  // ["Beg", "Life", "I", "To"]) => ["I", "To", "Beg", "Life"]
  
  return array.sort((a, b) => a.length - b.length);
};