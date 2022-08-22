/* implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order. */

function arrayDiff(a, b) {
  //P => array of integers
  //R => array of integers
  //arrayDiff([1,2,3], [1,2])
  
  // Filter integers in array a
  return a.filter(e => !b.includes(e))
}