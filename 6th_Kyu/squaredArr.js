/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

function comp(array1, array2){
    //P => integer array
    //R => boolean
    
    //Check for null values
    if(array1 == null || array2 == null){
      return false
    }
    // Sort both arrays 
   let sorted_arr1 = array1.sort((a,b) => a-b);
    let sorted_arr2 = array2.sort((a,b) => a-b);
    console.log(sorted_arr1)
    console.log(sorted_arr2)
    // Take square of each element in array 1
    let squared_arr1 = sorted_arr1.map(x => x*x)
    console.log(squared_arr1)
    // Check if each element in sorted_arr2 is equal to each element in squared_arr1
    let result = sorted_arr2.every((v,i) =>  v == squared_arr1[i])
    console.log(result);
    return result;
    
  }