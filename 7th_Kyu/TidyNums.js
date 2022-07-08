/*A Tidy number is a number whose digits are in non-decreasing order.Given a number, Find if it is Tidy or not . */

function tidyNumber(n){
    //P => integer
    //R => true/false
    // Convert into array
    let arr = n.toString().split("");
    //Compare adjacent digits
    for (let i=0; i<arr.length-1; i++){
      console.log(arr[i+1] , arr[i])
      if(arr[i+1] < arr[i] ) {
        return false
      }
    }
    return true
  }
  
  console.log(tidyNumber(9303745))