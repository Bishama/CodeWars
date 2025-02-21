/*Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!). */

function outed(meet, boss){
    //P => dict meet (person: happiness), boss(string name)
    // R => string
    // outed({'bisha':8, 'andi': 4, laura:'2'}, laura) =>  8+4+2+2/3, 5.3 ,'Nice work Champ'
    let score = 0;
    let NumOfPersons = Object.keys(meet).length
    
    for(const person in meet){
      //console.log(person)
      //console.log(meet[person])
      score+=parseInt(meet[person])
    }
    score+=parseInt(meet[boss])
    score = score/NumOfPersons
    if(score <=5){
      return 'Get Out Now!'
    } else{
      return 'Nice Work Champ!'
    }
    //console.log(score)
  }
  
  outed({'bisha':8, 'andi': 4, laura:'2'}, 'laura')