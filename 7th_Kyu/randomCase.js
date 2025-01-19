/* Write a function that will randomly upper and lower characters in a string*/


function randomCase(x) {
    // P => string
    // R => sting
    // randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
    
    //Covert string to array
    let arr = x.split('')
    
    //use Math.random() < 0.5 to have 50% chance for a condition to be true or false.
    let newarr = arr.map (
    char => Math.random() < 0.5? char.toUpperCase() : char.toLowerCase()
    )
    
    return newarr.join('')
    
  }