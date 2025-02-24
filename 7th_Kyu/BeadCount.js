/* Two red beads are placed between every two blue beads. There are N blue beads.
 After looking at the arrangement below work out the number of red beads. If there are less than 2 blue beads 
 return 0. */

 function countRedBeads(n) {
    // P => total number of blue beads
    // R => total number of red beads
    
    if (n<2){
      return 0
    } else{
      return (n-1)*2
    }
  }