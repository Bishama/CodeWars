/* Given a list and a number, create a new list that contains each number of list at most N times, without reordering.*/

function deleteNth(arr,n){
    // P => list, integer
    // R => list
    // [1,2,3,1,2,1,2,3], 2 => [1,2,3,1,2]
    
    //Create a dictionary with key as list items and value as occurences of that item
    let occurences = {}
    let resultArr = []
    //Add each element of the list as key to dictionary and keep count of the number of time it appears in the list
    for (let i=0; i<arr.length; i++){
        let currentItem = arr[i]
        if (occurences[currentItem]){
            occurences[currentItem] += 1    //If key exist then add 1 to its value
        } else{
            occurences[currentItem] = 1        //If key doesnt exist then set it equal to 1
        }
        // Add the keys from the occurences dictionary to the resultArr which has value less than the given n
        if (occurences[currentItem] <= n){
            resultArr.push(currentItem)
        }
    }
    return resultArr
  }
  
  
  
  
  