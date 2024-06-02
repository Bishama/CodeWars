/*rite a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array. */

function partlist(arr) {
    //P => array, atleast 2 strings
    //R => array, each of length 2, multiple arrays
    
    let res_arr = []
    //Loop over the array
    for(let i=1; i<arr.length; i++){
      let first = arr.slice(0,i).join(' ')
      let second = arr.slice(i).join(' ')
      res_arr.push([first,second])
    }
    return res_arr
    
    }
  
  partlist(['I', 'am', 'an', 'engineer']) // [['I', 'am an enginner'], ['I am', 'an engineer'], ['I am an','engineer']]
  partlist(['I', 'love', 'dogs']) //[ ['I','love dogs'], ['I love', 'dogs'] ]