/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n) {
	// P => integer
  //R => integer
  // 2 => 3+5=8
  //Initialize array to store all the integers of given row
  let arr = []
  //First integer in each row is given by formula n(n-1)+1
  let first = n*(n-1)+1
  //Loop through given row
  for(let i=0; i<n; i++){
    //If array is empty add first integer in the row
    if(arr.length === 0){
      arr.push(first)
    }
    else{
      arr.push(first+=2)
    }
  }
  //Reduce arr
  let res = arr.reduce(
  (acc,curr) => acc+curr
  )
return res
}

  console.log(rowSumOddNumbers(3))