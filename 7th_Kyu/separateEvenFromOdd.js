/* Given an array/list [] of n integers , Separate The even numbers from the odds 
Return an array/list where Even numbers come first then odds

Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .
*/

function menFromBoys(arr){
    // P => array of integer, neg, duplicate, no 0s
    //R => array with even first in ascending and odd later in descending
    
    // menFromBoys([7,3,14,17]) =>  [14,17,7,3]
    
    //Sort whole array in ascending order
    let sortedArr = arr.sort( (a,b) => a-b)
    console.log(sortedArr)
    
    //Create array with odd and even integers
    let evenArr = []
    let oddArr = []
    sortedArr.map((a) => {
      if(a%2 === 0 && !evenArr.includes(a) && !oddArr.includes(a)){
        evenArr.push(a)
      } else if (!a%2 === 0 && !evenArr.includes(a) && !oddArr.includes(a)){
        oddArr.push(a)
      }
    })
    oddArr = oddArr.reverse()
    console.log(evenArr)
    console.log(oddArr)
    //Concat oth even and odd arrays
    let res = evenArr.concat(oddArr)
    return res
  }

