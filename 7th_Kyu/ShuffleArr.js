/*Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:*/

let arr = [1, 2, 3];

function shuffle(arr){
  // Loop backwards
  for(let i=arr.length-1; i<0; i--){
    //Generate a random j index
    let j = Math.floor(Math.random()*(i+1))
    //Shuffle
    [arr[i], arr[j] = arr[j], arr[i]]
  }
}

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...