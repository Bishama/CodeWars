/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.*/

var number = function(busStops){
    let onBus = 0;
    let offBus = 0;
    
    for (let i=0; i < busStops.length; i++) {
      console.log(busStops[i])
      // Calculate the number of people on the bus
      onBus += busStops[i][0];
      offBus += busStops[i][1];
    }
    return onBus - offBus;
    
  }