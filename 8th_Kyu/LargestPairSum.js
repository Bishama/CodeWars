function largestPairSum (numbers) {
    //P => array
    //R => integer
    // sort
    let arr = numbers.sort(function(a, b) {
    return b - a;
  });
    console.log(arr)
    // Add last 2 elements
    let sum = arr[0] + arr [1]
    return sum;
  }