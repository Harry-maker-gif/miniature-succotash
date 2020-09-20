/*
function longestWord(str){
  let words = str.split(" ");
 let longestWord = '';
  
 for(let word of words){
   if(word.length>longestWord.length) {
     longestWord = word;
   }
 } 
  return longestWord;
}

console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));
*/

//Arithmetic, Geometric or No pattern
//No negative numbers

function mathSequences(arr) {
  let arith = [];
  let geo = [];
  
for(let i = 1;i<arr.length;i++){
  let number1 = arr[i] - arr[i-1]
  arith.push(number1);
  let number2 = arr[i] / arr[i-1]
  geo.push(number2);
}
console.log(`A : ${arith}`);
console.log(`G : ${geo}`);

  //return arr;
}

console.log(mathSequences([2, 4, 6, 8]));
//"Arithmetic"
console.log(mathSequences([3, 9, 27]));
//"Geometric"
console.log(mathSequences([2, 5, 14, 89]));
// -1