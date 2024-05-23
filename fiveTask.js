//Reverse the string "hello wolrd"

const myWrd="hello world"
 console.log(myWrd.length);
function reverseStr(str){

    let reverseString ='' 
    for (let i = str.length -1 ; i>= 0 ; i--)  { 
      reverseString += str[i]; 
      }
return reverseString; 
}
console.log (reverseStr(myWrd));
