function disariumNumber(n){
    let number = n.toString();
    let sum = 0;
    //Loop over each digit in n
    for (let i=0; i<number.length; i++){
      sum += Math.pow(number[i],i+1);
    }
    console.log(sum)
    //Check for disariu,
    return sum === n? 'Disarium !!' : 'Not !!';
    
  }