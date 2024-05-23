
// Find the unique array and remosed the duplicate array and classify the unique elements into two arrays:one containing even number and other containing odd numbers
//  NUmber 01 Example
 const myArray=[1,2,3,4,5,6,6];

 function myFunction(elements){
    const uniqueelement =Array.from(new Set(elements));

    const even=[];
    const odd=[];
    for (const i of uniqueelement) {
        if(i%2===0){
            even.push(i);
        } else{
            odd.push(i)
        }
        
    }
    console.log('Even NUmber', even)
    console.log('Odd NUmber', odd)

 }
  myFunction(myArray);

  ////////// Number 2 Exaple

  const myFruits=["APPLE","ORANGE","BANANA" ,"aplle","orange","banana" ,"APPLE"];

function myFunction(fruits){
    const uniqueName= Array.from(new Set(fruits));

    const upperCase=[];
    const loweCase=[];
    for (const i of uniqueName) {
        // console.log(i)
        if(i=== i.toUpperCase()){
           upperCase.push(i)
        } else{
            loweCase.push(i)
        }
       
    }
    console.log("Uppercase",upperCase);
    console.log("lowercase",loweCase);
}
myFunction(myFruits);