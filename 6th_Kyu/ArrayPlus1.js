/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent). */

function upArray(arr){
    //P => array with integers
    //R => array
    
    console.log(arr,'original array')
    
    //handle edge cases
    if( arr.length === 0){
      return null;
    }
    
    //Loop over the array
    for (let i=0; i<arr.length; i++){
      //handle edge cases
      if(arr[i]<0 || arr[i]>9 || typeof(arr[i])!=='number'){
        return null
      }
   }   
    
      
      for (var j = arr.length - 1; j > -1; j--) {
        //if last digit is not 9, add 1 and exit
        if(arr[j]!==9){
          arr[j] = arr[j]+1
          console.log("Incremented:", arr);
          break;
        } else{
          arr[j] = 0
          console.log("Carry over:", arr);
        }
        if (j==0){
          arr.unshift(1)
          console.log("Added leading 1:", arr);
        }
        
      }
      
      console.log('final output:',arr)
    return arr
    
  }
  