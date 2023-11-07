/* write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. */
function reverseArray(arr){
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
      newArr.push(arr[i])
    }
    return newArr;
  }
  
  function reverseArrayInPlace(arr){
    for(let i=0; i<arr.length/2; i++){
      console.log('temp',temp=arr[i]);
      console.log('replacing curr index with last',arr[i]=arr[arr.length-1-i]);
      console.log('replcaing last index with temp', arr[arr.length-1-i]=temp)
      
    }
    return arr;
  }
  
  
  //console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  
  