//valid anagram
// word or pharase formed by rearranging the letters of all the original letters exactly once

const isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};
console.log(isAnagram1('anagram' , 'nagaram'))//true // tc  -O(nlogn), sc-O(n),


//2nd apporach
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));// true // tc  -O(n), sc-O(n),