// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
// Brute Force Approach

function maxSubArrayBruteForce(nums) {
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }

  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
}

// Time Complexity - O(n^2)
// Space Complexity - O(1)

//   console.log(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// Kadane's Algorithm
var maxSubarray = function (nums) {
  let max = nums[0];
  let sum = 0;
//   let start = 0;
//   let tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    //   start = tempStart;
    }
    if (sum < 0) {
      sum = 0;
    //   tempStart = i + 1;
    }
  }
  return { sum: max, 
    // subArray: nums.slice(start, tempStart + 4) 
};
};
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // { sum: 6, subArray: [4, -1, 2, 1] }
console.log(maxSubarray([1])); // { sum: 1, subArray: [1] }
console.log(maxSubarray([5, 4, -1, 7, 8])); // { sum: 23, subArray: [5, 4, -1, 7, 8] }

//   Time Complexity: O(n)
//   Space Complexity: O(1)

// var maxSubArray = function(nums) {
//     let maxSum = nums[0]
//      let currSum =nums[0]

//      for(let i=1 ; i<nums.length ; i++){
//         currSum  = Math.max(nums[i]  , currSum +nums[i])
//         maxSum = Math.max(maxSum  , currSum)
//      }
// return maxSum
// };
