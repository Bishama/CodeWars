/* The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */

var filterString = function(value) {
    //P => string
    //R => integer
    // E =>filterString("a1b2c3"), 123
    let res =''
    let num = ['0','1','2','3','4','5','6','7','8','9']
    let arr = value.split('')
    for(let i=0; i<arr.length; i++){
      if(num.includes(arr[i])){
        res+=arr[i]
      }
    }
    return Number(res)
  }
  
  console.log(filterString("a1b2c3"))
  