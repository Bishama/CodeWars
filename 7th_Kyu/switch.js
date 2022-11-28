/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched. */


function switcheroo(x){
    //P => striing
    //R => string
    //Create a dict
    const dict = {
      'a':'b',
      'b':'a',
      'c':'c'
    }
    //Split the string, use map function and then join the array
    let res = x.split('').map(x => dict[x]).join('')
    return res
  }