/* Given an array/list [] of integers , Construct a product array Of same size 
Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]. */

function productArray(numbers){
  //P => array of integers
  //R => array of integers
  // {1,5,2} => {10,2,5}
  // Multiply all the integers and divide by the current integer
  return numbers.map(x => numbers.reduce((a,b) => a*b)/x);
}
