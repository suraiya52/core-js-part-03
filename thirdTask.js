// Find the largest number of Array and i using here if and forof  loop
  
const largestNum=[2,9,4,7,8,5];
function findLargestNumber(num){
  let number=  num[0]
  for (const i of num) {
    console.log( i);
    if(i>number){
      number=i
      // return number
      console.log( i);
     }
    console.log(i);
 
 }
 //  return largest

}
console.log( findLargestNumber(largestNum)) 