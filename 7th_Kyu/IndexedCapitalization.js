/* Given a string and an array of integers representing indices, capitalize all letters at the given indices.*/

function capitalize(s,arr){
    //P => string lowercase no spaces, array of digits
    //R => string
    // capitalize("abcdes", [1,2,5,100]) => "aBCdeF"
    
  var strArr = s.split("");
  
  for(var i = 0; i < arr.length; i++) {
    if(strArr[arr[i]]) {
      strArr[arr[i]] = strArr[arr[i]].toUpperCase();
    }
  }
  
  strArr = strArr.join("");
  return strArr
  };