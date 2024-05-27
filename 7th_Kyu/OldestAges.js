// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    //P array, integers
    //R array, integer, length 2, any order
    
    //Sort this array in descending order
    ages.sort( (a,b) =>  a-b )
    console.log(sorted_arr)
    //Return first 2 elements in sorted array
  
  }
  
  twoOldestAges(15,23,80,40) // [40,80]
  twoOldestAges(10,24,60,45) // [45,60]
  
  