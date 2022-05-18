//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//Mind the input validation.


function sumArray(array) {
 
    if ( array == null || array.length < 3 ){
      return 0
    }
    else {
      let max = Math.max(...array)
      let min = Math.min(...array)
      let sum = array.reduce( (acc, x) => acc+x, 0)
      console.log(array, sum - (max+min))
      console.log(max,min)
      return sum - (max+min)
    }
    
  }