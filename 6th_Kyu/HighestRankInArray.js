/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie 
for most frequent number, return the largest number among them.
Note: no empty arrays will be given.
Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr){
    // [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
      let frequency = {}
      let maxCount = 0
      let frequentElement;
      //Loop through the array
      for (let i=0; i<arr.length; i++){
        //Add each element to the object frequency that contains key as the element and value as frequence
        if (frequency[arr[i]]){
          frequency[arr[i]]++
        }
        else{
          frequency[arr[i]] = 1
        }
        //Check if current element has highest count so far
        if(frequency[arr[i]] > maxCount || (frequency[arr[i]] === maxCount && arr[i] > frequentElement)){
          maxCount = frequency[arr[i]]
          frequentElement = arr[i]
        }
      }
      return frequentElement
    }
    
    console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]  ))