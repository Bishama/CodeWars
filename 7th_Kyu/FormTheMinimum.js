/* Given a list of digits, return the smallest number that could be formed from these digits,
 using the digits only once (ignore duplicates).  */

function minValue(values){
    // P => array of integers
    // R => integer
    // {2858725} => 2578
    
    // Sort array in ascending order
    let sortArr = values.sort(function(a, b){return a - b}); 
    // Remove duplicates
    let filteredArr = sortArr.filter((item, index) => sortArr.indexOf(item) === index)
    return Number(filteredArr.join(''));
  }