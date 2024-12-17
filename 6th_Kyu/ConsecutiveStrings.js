//P =>  list, number of string to concatenate
//R => longest string
//E => longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//P 



function longestConsec(strarr, k) {
  
    let longest = ""
    let res;
    
    if (strarr.length == 0 || k>strarr.length || k<=0){
      return ""
    }
    
    for (let i=0; i<=strarr.length-k; i++){
     res = strarr.slice(i,i+k).join('')
      
      if (res.length > longest.length){
      longest = res
    }
      
    }
    
    
    return longest
    
  }
  
  
  
  console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
  