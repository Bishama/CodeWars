/* You are going to be given an array of integers. Your job is to take that array and find an index N where
 the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is
  no index that would make this happen, return -1. */

  function findEvenIndex(arr)
{
  //P => array of integer
  //R => integer
  //findEvenIndex([1,2,3,4,3,2,1]) => 3
  
  let index = -1
  
  for (let i = 0; i < arr.length; i++){
    
    //Find the right sum (slice and reduce)
    let right = arr.slice(i).reduce((a, b) => a + b, 0)
    console.log(right)
    //Find the left sum (slice and reduce)
    let left = arr.slice(0,i+1).reduce((a, b) => a + b, 0)
    console.log(left)
    //Assign index
    if (left === right){
      index = i
    }
  }
  return index;
}
