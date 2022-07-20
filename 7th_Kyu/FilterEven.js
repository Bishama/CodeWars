// function that returns the values of an array that are not odd.

function noOdds( values ){
    return values.filter(function(x){
      return x % 2 === 0
    });
  }