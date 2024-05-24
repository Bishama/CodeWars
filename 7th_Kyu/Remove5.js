/* In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative! */

function dontGiveMeFive(start, end)
{
  //P => number, -ve, ascending order
  //R => number
  
  let arr = []
  //Create an array to store numbers from start till end
  for(let i=start; i< end+1; i++){
    arr.push(i.toString())
  }
  //Loop through array
  for(let i=0; i<arr.length; i++){
    //Check if each element in array is 5
    if(arr[i].includes(5)){
      console.log(arr[i])
      //Delete it from the array
      let index = arr.indexOf(arr[i])
      arr.splice(index,1)
    }
  }
  console.log(arr.length)
  console.log(arr)
  return arr.length
}

dontGiveMeFive(1,5) // 4
dontGiveMeFive(4,17) // 12