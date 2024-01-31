// const twosum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };
// console.log(twosum([3 ,4 ,1 , 6] , 7))

const twosum = function (nums, target) {
 let obj = {}

 for (let i = 0; i < nums.length; i++) {
  var  n = nums[i]

  if(obj[target-n] >=0){
    return [obj[target-n] , i]
  }else{
    obj[n] =i
  }
 }
}
console.log(twosum([3 ,6 ] , 9))