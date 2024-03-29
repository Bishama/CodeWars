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
 
 function  listToArray(list){
   //Initialize array
   let arr = []
   //Set node to the head of the list
   //WHILE node is not null
     //Perform the desired action with node ( add node's value to an array)
     //Set node to the next element in the list (node's 'rest' property)
   //End of Loop when node is null
   for (let node=list; node; node=node.rest ){
     arr.push(node.value);
   }
   return arr;
 }


 function prepend(value, rest){
  return {value,rest}
}

 console.log(listToArray(arrayToList([10, 20, 30])));
 // → [10, 20, 30]
   /*let list = {
   value: 1,
   rest: {
     value: 2,
     rest: {
       value: 3,
       rest: null
     }
   }
 }; */