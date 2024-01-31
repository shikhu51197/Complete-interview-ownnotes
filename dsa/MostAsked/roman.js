// given a string that represents Roman numeral write a program to convert it into integers in JavaScript

let str = "MCMIVDLXV";
//roman to integer number
// function ChangeRomanToInt(str) {
//   const rn = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let answer = 0;
//   for (let i = 0; i < str.length; i++) {
//     const curr = rn[str[i]];
//     const next = rn[str[i + 1]];
//     if (next > curr) {
//       let data = next - curr;
//       answer += data;
//       i++;
//       // console.log(answer);
//     } else {
//       answer += curr;
//       // console.log(answer);
//     }
//   }
//   return answer;
//   // console.log(answer);                                              
// }
// console.log(ChangeRomanToInt(str));
// // 




//integer to roman number

let num = 3;

function ChangeIntrn(num) {

const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' }
];

let result = '';

for (let i = 0; i < romanNumerals.length; i++) {
  const { value, symbol } = romanNumerals[i];

  while (num >= value) {
      result += symbol;
      num -= value;
      // console.log(result);
      // console.log(num);
  }
}

return result;
}
console.log(ChangeIntrn(num));
