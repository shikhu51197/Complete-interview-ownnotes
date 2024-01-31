const Myalphabats = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ShikhuEncode(letters){
   let encodeletter = "";

   for(let i=0;i<letters.length;i++){
       let indexing = Myalphabats.indexOf(letters[i]);
       let revIndex = 25 - indexing;
       if(indexing%2===0){
        encodeletter += Myalphabats[revIndex];
       }else{
        encodeletter = encodeletter + letters[i] + Myalphabats[revIndex];
       }
   } 
    
   return encodeletter;  
}
 console.log(ShikhuEncode('ABC')); // Output: 'ZBYX'
console.log(ShikhuEncode('XYZ')); // Output: 'XCBZA'
console.log(ShikhuEncode('GHI')); // Output: 'THSR'
console.log(ShikhuEncode('NOP')); // Output: 'NMLPK'
console.log(ShikhuEncode('JKL')); // Output: 'JQPLO'
console.log(ShikhuEncode('UTS')); // Output: 'FTGH'


function ShikhuDecode(letters){
    let decodeletter = [];
    let MyalphabatsRev = Myalphabats.split("").reverse().join("");
   for(let i=0;i<letters.length;i++){
       let indexing = MyalphabatsRev.indexOf(letters[i]);
       let revIndex = 25 - indexing;
       if(indexing%2===0){
        decodeletter.push(MyalphabatsRev[revIndex]);
        // console.log(decodeletter)
       }else{
        decodeletter.pop();
        decodeletter.push(letters[i-1]);
        // console.log(decodeletter)
       }
   } 
    
   return decodeletter.join("");
}
console.log(ShikhuDecode('ZBYX')); // Output: 'ABC'
console.log(ShikhuDecode('XCBZA')); // Output: 'XYZ'
console.log(ShikhuDecode('THSR')); // Output: 'GHI'
console.log(ShikhuDecode('NMLPK')); // Output: 'NOP'
console.log(ShikhuDecode('JQPLO')); // Output: 'JKL'
console.log(ShikhuDecode('FTGH')); // Output: 'UTS'