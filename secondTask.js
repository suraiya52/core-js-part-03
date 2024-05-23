//  create a program that calculates the total number of hours from a given number of DynamicsCompressorNode.used data type number

const mydays="8" ;
//  console.log( typeof mydays);
function calculateTotalHours( days){
  if(typeof days !="number" && isNaN(days) ){

    return " "
    
  }

  const hoursInADay=24;
  const totalHours= days*hoursInADay;
  return totalHours
}
// console.log(typeof calculateTotalHours(mydays));
console.log( calculateTotalHours(mydays));