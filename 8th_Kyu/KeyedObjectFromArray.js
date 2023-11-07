/* Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  function groupById(arr){
    // Using reduce to transform the array into an object
    // obj: Accumulator, initially an empty object, holds the transformed array
    // curr: Current element being processed in the array
    return arr.reduce ( (obj, curr) => {
      //// Assign the current element to the accumulator object with its id as the key
      obj[curr.id]=curr 
      // Return the updated object. It will be the accumulator for the next iteration
      return obj;
    }, {} ); // Initialize the accumulator (obj) as an empty object
  }
  
  let usersById = groupById(users);
  console.log(usersById);