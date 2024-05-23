 // Find the summation of Array

 const myArr=[1,2,3,4,5,6];

 function myArrFunction(element){
    let sum=0;//sum= 0,1,3,6,10,15,21
  for (const i of element) {//element 1,2,3,4,5,6
    //i=1,2,3,4,5,6
  sum = sum + i;
    // sum = 0 + 1 =1
    //sum = 1 + 2 = 3
    //sum = 3+ 3 = 6
    //sum = 6+ 4 = 10
    //sum = 10+ 5 = 15
    //sum = 15+ 6 = 21
    }
  return sum;
}
console.log (myArrFunction(myArr));