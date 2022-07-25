// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product

function minSum(arr) {
    // Sort the array in ascending order
    arr.sort((x,y)=>x-y)
    result=0
    while(arr.length){
      //Remove and multiply first and last element in the array
      result+=arr.pop()*arr.shift()
      }
    return result
  
  }

