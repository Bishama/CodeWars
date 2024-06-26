/* Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive. */

function rowWeights(array){
    // P => array, integers, +ve, random order
    // R => array,2 integers
    
    let team1 = 0
    let team2 = 0
    
    for(let i=0; i<array.length; i++){
      if(i%2 === 0){   // If index is even add to team 1
        team1+= array[i]
      }
      else{
        team2+= array[i]
      }
    }
    
    return [team1, team2]
  }
  
  rowWeights([10,20,50]) // [60,20]
  rowWeights([30,10,5,60]) //[35,70]