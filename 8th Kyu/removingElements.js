function removeEveryOther(arr){
    let newarr = []
    //your code here
    for (let i=0; i<arr.length; i+=2) {
      newarr.push(arr[i])
    }
    return newarr;
  }