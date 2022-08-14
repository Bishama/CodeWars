/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
Assume that the input n will always be a positive integer. */


function sumCubes(n){
    // P => integer
    //R => integer
    // 2 => 9
    
    let arr = [];
    // Push cube of 1 to n integers into array
    for(let i=1; i<=n; i++){
      let cube = i*i*i
      arr.push(cube)
    }
    //Reduce array to find the sum
    return arr.reduce( (total, curr) => total+=curr);
    
  }
  
  console.log(sumCubes(2))