//Reverse the string "hello wolrd"

const myWrd="hello world"
 console.log(myWrd.length);
function reverseStr(str){

    let reverseString ='' ////''->d->l->r->o->w->  ->o->l->l->e->h 
    for (let i = str.length -1 ; i>= 0 ; i--)  { 
      
      //  i=10 true 9 
   // i=9 true 8
   // i=8 true 7
   //i=7 true 6
   //i=6 true 5
   //i=5 true 4
   //i=4 true 3
   //i=3 true 2
   //i=2 true 1
   //i=1 true 0
   //i=0 true -1
   //i= -1 false

   reverseString += str[i];// (reverseStr+=str[i])  
   // reverseStr = ''  +   str[10]=d
   // reverseStr = 'd'  +   str[9]=l
   // reverseStr = 'dl'  +   str[8]=r
   // reverseStr = 'dlr'  +   str[7]=o
   // reverseStr = 'dlro'  +   str[6]=w
   // reverseStr = 'dlrow'  +   str[5]= 
   // reverseStr = 'dlrow '  +   str[4]= o
   // reverseStr = 'dlrow o'  +   str[3]= l
   // reverseStr = 'dlrow ol'  +   str[2]= l
   // reverseStr = 'dlrow oll'  +   str[1]= e
   // reverseStr = 'dlrow olle'  +   str[0]= h
      }
return reverseString; 

}
console.log (reverseStr(myWrd));
