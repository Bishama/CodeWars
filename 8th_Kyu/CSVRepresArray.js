//Create a function that returns the CSV representation of a two-dimensional numeric array.
//
//Example:
//
//input:
//   [[ 0, 1, 2, 3, 4 ],
//    [ 10,11,12,13,14 ],
//    [ 20,21,22,23,24 ],
//    [ 30,31,32,33,34 ]] 
//    
//output:
//     '0,1,2,3,4\n'
//    +'10,11,12,13,14\n'
//    +'20,21,22,23,24\n'
//    +'30,31,32,33,34'

function toCsvText(array) {
    // row.join => returns an array of comma-separated strings ["0,1,2", "10,11,12", "20,21,22"]
   //.join(\n) => returns one long string with ew line after each row "0,1,2\n10,11,12\n20,21,22"
   return array.map(row => row.join(',')).join('\n')
 }