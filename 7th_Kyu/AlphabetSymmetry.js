/*Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1] */

function solve(arr){  
    //P => array of strings
      //R => array of integers
      //Loop through each word in array
      //Loop through each character j in an array
      //For each character determine if the position of alphabet is same as index j
      //If its same increase the counter
      //At the end of j loop push the counter to result array
      //Reset the counter at start of i array to have it count for next word
      
      let resultingArr = []
      
      for (let i=0; i<arr.length; i++){
        let word = arr[i]
        let counter = 0
        for(let j=0; j< word.length; j++){
          let letter = word[j].toUpperCase();
          if (letter.charCodeAt() - 64 === j+1){
            counter++
            console.log(counter)
          } 
        }
        resultingArr.push(counter)
      }
      return resultingArr
    };
    
    solve(["abode","ABc","xyzD"])