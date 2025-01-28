/* The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.*/

function revrot(str, sz) {
    // P => string digit; sz size of the chunkl ignore last chunk if size less than sz
  // R => sum of chunk divisible by 2? reverse it; else rotate to the left by one position
  
  //Return empty string for edge cases
  if( sz<=0 || str.length == 0 || sz> str.length){
    return ""
  }
  
  //Initialize the resulting string
  let res = ""
  
  
  console.log('string legnth',str.length)
  console.log('size', sz)
  
  for(let i=0; i<=str.length-sz; i+=sz){
    //console.log('index',i)
    let chunk = str.substring(i,i+sz)
    console.log('chunk:',chunk, chunk.length)
    //check if the size of next chunk is less than the given size(sz)
    //convert string to array to sum all integers andd then reverse it
    let arr = chunk.split('')
    //console.log(arr)   
    let sum = arr.reduce(
    (acc,curr) => acc+ parseInt(curr),
      0
    );
    //console.log(sum)
    //check if sum is divisible by 2
    if(sum%2 === 0){
      chunk = arr.reverse().join('')
      console.log('new chunk',chunk)
    }
    //else rotate by one position
    else{
      chunk = chunk.slice(1) + chunk[0]
    }
    
    res+=chunk
  }
  return res
}

//console.log(revrot("66443875", 4))
console.log(" ______________")
//console.log(revrot("66443875", 8))
console.log(" ______________")
console.log(revrot("563000655734469485", 4))
console.log(" ______________")