/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values. */

function sumDigits(number) {
    //Convert given number into absolute number
     let absolute_number = Math.abs(number)
     console.log(absolute_number)
     //Convert absolute number to string and then to array
     let arr = absolute_number.toString().split('')
     console.log(arr)
     //Reduce it to get the sum and convert each elem of array to a number
     let res = arr.reduce( (acc, curr) => acc + Number(curr), 0)
     console.log(res)
     return res
   }