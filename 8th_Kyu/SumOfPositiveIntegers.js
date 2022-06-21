function positiveSum(arr) {
  
    // P -> array
    // R -> sum
    
    // New array containing positive integers
    let newArr = arr.filter(x => x>0);
    // Sum of positive integers
    let result = newArr.reduce( (a,b) =>  a+b,0 );
    return result;
  }