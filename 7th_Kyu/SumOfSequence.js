const sequenceSum = (begin, end, step) => {
    // P => integers
    //R => integer
    //Initialise result
    let res=0
    // Check if begin > end
    if (begin > end){
      return 0;
    }
    // Loop
    for (let i=begin; i<=end; i+=step){
      res += i;
    }
    return res;
    
  };