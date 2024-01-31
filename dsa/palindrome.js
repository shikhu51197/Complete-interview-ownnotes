// palindrome  Number

// reads same forword or backword

// x=121  true
// x=10 false
//number to string "121" then ["1" , '2' , '1' ] =>["1" , '2' , '1' ] => "121"=> 121

function palindromeNumber(x) {
  return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
}
console.log(palindromeNumber(110));
console.log(palindromeNumber(121));
console.log(palindromeNumber(-10));
// tc sc O(d)