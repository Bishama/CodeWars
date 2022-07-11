/* Given a number, Find if it is Jumping or not . */

function jumpingNumber(n){
  //P => integer
  //R => string
  let number = n.toString();
  //If length of n is 1 return jumping
  if (number.length == 1){
    return "Jumping!!"
  }
  // If length is greater than 1
  if (number.length > 1){
    //Check if the difference is 1 or -1 between adjacent digits
    for (let i=0; i<number.length-1; i++){
      //If the difference is not 1 or -1 return Not and end the loop
      console.log('Difference',Math.abs(number[i] - number[i+1]))
      if(Math.abs(number[i] - number[i+1]) !== 1){
        return "Not!!"
      }
      
    }
     return "Jumping!!"
  }
  
}

    
console.log(jumpingNumber(23))
    