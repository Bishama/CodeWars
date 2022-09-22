/* You will be given a number and you will need to return it as a string in Expanded Form. */

function expandedForm(num) {
    // P => integer
    // R => string
    // expandedForm(70304) => 70000 + 300 + 4'
    
    // Convert given integer into string and split into array
    let arr = num.toString().split('');
    // Reverse the array
    arr = arr.reverse()
    // Multiplyeach element in array with 10 to the power of its index and filter for values greater than 0
    arr = arr.map((curr,i) => curr * Math.pow(10,i)).filter( a => a>0)
    // Reverse the array and join with plus sign
    arr = arr.reverse().join(' + ')
    console.log(arr);
    return arr;
    
  }