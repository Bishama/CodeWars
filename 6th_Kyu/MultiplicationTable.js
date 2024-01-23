/* 
create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
    let result_array = []
    // Loop 3 times each time creating a new array
    for (let i=1; i<= size; i++){
      let row_arr = []
      //Loop again for columns
      for (let j=1; j<= size; j++){
        //Create an array
        row_arr.push(i*j) 
      }
      result_array.push(row_arr)
    }
    return result_array
  }
  
  multiplicationTable(3)
  