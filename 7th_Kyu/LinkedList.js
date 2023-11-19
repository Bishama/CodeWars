/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};*/

function arrayToList(arr){
    // Initialize list to null for last node
    let list = null;
    //Loop backwards for array
    for(let i = arr.length-1; i>=0; i--){
        // Create a new node with {value:curentElement, rest:list}
        list = {value: arr[i], rest:list}
    }
    return list;
}

let arr=[1,2,3]

console.log(arrayToList(arr));