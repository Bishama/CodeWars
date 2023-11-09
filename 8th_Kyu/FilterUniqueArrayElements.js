/* Create a function unique(arr) that should return an array with unique items of arr.*/

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let res = [];
  for (let i=0; i<arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i])
    }
  }
  return res;
}



console.log( unique(strings) ); // Hare, Krishna, :-O