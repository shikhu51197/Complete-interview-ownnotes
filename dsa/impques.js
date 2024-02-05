// Given an array of integers, use the built-in method to find the maximum and minimum elements.
// String Manipulation:

// Write a function to check if a given string is a palindrome using built-in string manipulation methods.
// Greedy Algorithms:

// Suppose you have a set of tasks with their start and end times. Implement a function to find the maximum number of non-overlapping tasks using a greedy approach.
// Hashing:

// Create a hash table using a built-in data structure (e.g., Python dictionaries) and demonstrate how to insert, delete, and retrieve elements.
// Array Operations:

// Given two arrays, use built-in methods to merge them into a single sorted array.
// String Manipulation:

// Implement a function to reverse a string using built-in string manipulation methods.
// Greedy Algorithms:

// You are given a set of coins with different denominations and an amount. Write a function to find the minimum number of coins needed to make up that amount using a greedy approach.
// Hashing:

// Given two arrays, find the common elements using built-in methods for set intersection.
// Array Manipulation:

// Find Max and Min Elements in an Array:

// javascript
// Copy code
// function findMaxAndMin(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   return { max, min };
// }

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const result = findMaxAndMin(array);
// console.log(result);
// Palindrome Check:

// javascript
// Copy code
// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// const testString = "level";
// console.log(isPalindrome(testString));
// Greedy Algorithm for Task Scheduling:

// javascript
// Copy code
// function maximizeTasks(tasks) {
//   tasks.sort((a, b) => a.end - b.end);

//   let count = 0;
//   let currentEnd = -Infinity;

//   for (const task of tasks) {
//     if (task.start >= currentEnd) {
//       count++;
//       currentEnd = task.end;
//     }
//   }

//   return count;
// }

// const taskList = [{ start: 1, end: 3 }, { start: 2, end: 4 }, { start: 3, end: 5 }];
// console.log(maximizeTasks(taskList));
// Hash Table Implementation:

// javascript
// Copy code
// class HashTable {
//   constructor() {
//     this.data = {};
//   }

//   insert(key, value) {
//     this.data[key] = value;
//   }

//   delete(key) {
//     delete this.data[key];
//   }

//   retrieve(key) {
//     return this.data[key];
//   }
// }

// const myHashTable = new HashTable();
// myHashTable.insert("name", "John");
// console.log(myHashTable.retrieve("name"));
// myHashTable.delete("name");
// Merge Arrays:

// javascript
// Copy code
// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }

// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
// console.log(mergeArrays(array1, array2));
// Reverse String:

// javascript
// Copy code
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// const inputString = "hello";
// console.log(reverseString(inputString));
// Greedy Coin Change:

// javascript
// Copy code
// function minCoins(coins, amount) {
//   coins.sort((a, b) => b - a);

//   let count = 0;

//   for (const coin of coins) {
//     while (amount >= coin) {
//       amount -= coin;
//       count++;
//     }
//   }

//   return count;
// }

// const coinDenominations = [1, 2, 5];
// const targetAmount = 11;
// console.log(minCoins(coinDenominations, targetAmount));
// Find Common Elements in Arrays:

// javascript
// Copy code
// function findCommonElements(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   return [...set1].filter(item => set2.has(item));
// }

// const arrayA = [1, 2, 3, 4];
// const arrayB = [3, 4, 5, 6];
// console.log(findCommonElements(arrayA, arrayB));

// Rotate an array to the right by a given number of steps using built-in array manipulation methods.
// String Manipulation:

// Write a function to count the occurrences of each character in a string using built-in methods.
// Greedy Algorithms:

// Implement a function to schedule tasks to maximize CPU utilization, considering task execution times and CPU core constraints.
// Hashing:

// Given an array of integers, find two numbers such that they add up to a specific target. Use a hash set for an efficient solution.
// Array Operations:

// Implement a function to remove duplicates from a sorted array in-place using built-in array manipulation methods.
// String Manipulation:

// Check if two strings are rotations of each other using built-in string manipulation methods.
// Hashing:

// Given a list of words, group them by anagrams using built-in data structures.Array Manipulation:

// Can you describe the steps involved in finding the maximum and minimum elements in an array using a single iteration?
// String Manipulation:

// Explain the approach you would take to determine if a string is a palindrome using built-in methods. How would you handle cases with spaces or different letter cases?
// Greedy Algorithms:

// Walk me through the process of solving a task scheduling problem using a greedy algorithm. How would you choose the tasks to maximize CPU utilization?
// Hashing:

// What steps would you follow to create a hash table from scratch without using built-in methods? How would you handle collisions?
// Array Operations:

// Walk me through the logic of merging two sorted arrays into a single sorted array using built-in methods. How would you optimize this process?
// String Manipulation:

// Explain the steps involved in reversing a string using built-in string manipulation methods. How does the time complexity vary with different approaches?
// Greedy Algorithms:

// In the context of the coin denominations problem, how do you decide which coin to choose next? What is the rationale behind the greedy approach?
// Hashing:

// Describe the logic for finding common elements in two arrays using the intersection of sets. How would you handle duplicate elements in the output?
// Array Manipulation:

// Can you explain the logic behind rotating an array to the right by a given number of steps using built-in array manipulation methods? How does this approach handle large rotations?
// String Manipulation:

// Discuss the steps involved in counting the occurrences of each character in a string. How would you optimize this process for large strings?
// Greedy Algorithms:

// Walk me through the steps of solving the task scheduling problem, considering both task execution times and CPU core constraints. How would you handle edge cases?
// Hashing:

// Explain the logic behind finding two numbers in an array that add up to a specific target using a hash set. How does this approach improve efficiency compared to a brute-force method?
// Array Operations:

// Describe the steps for removing duplicates from a sorted array in-place using built-in array manipulation methods. How does the time complexity compare to using additional data structures?
// String Manipulation:

// Discuss the logic of checking if two strings are rotations of each other using built-in string manipulation methods. How would you handle different lengths of strings?
// Hashing:

// Walk me through the process of grouping words by anagrams using built-in data structures. How would you optimize this process for a large dataset?   answer for all ques on javascript

//  answer for all in js
// ChatGPT
// Certainly! Here are the JavaScript implementations for the provided questions:

// Rotate an Array:

// javascript
// Copy code
// function rotateArray(arr, steps) {
//   const rotated = arr.slice(-steps).concat(arr.slice(0, -steps));
//   return rotated;
// }

// const inputArray = [1, 2, 3, 4, 5];
// const rotationSteps = 2;
// console.log(rotateArray(inputArray, rotationSteps));
// Count Occurrences of Characters in a String:

// javascript
// Copy code
// function countOccurrences(str) {
//   const charCount = {};
//   str.split('').forEach(char => {
//     charCount[char] = (charCount[char] || 0) + 1;
//   });
//   return charCount;
// }

// const testString = "hello";
// console.log(countOccurrences(testString));
// Greedy Task Scheduling:

// javascript
// Copy code
// function maximizeCpuUtilization(tasks, coreConstraints) {
//   tasks.sort((a, b) => b.executionTime - a.executionTime);

//   let totalCpuUtilization = 0;
//   let currentCore = 0;

//   for (const task of tasks) {
//     if (currentCore < coreConstraints && task.executionTime > 0) {
//       totalCpuUtilization += task.executionTime;
//       task.executionTime = 0;
//       currentCore++;
//     }
//   }

//   return totalCpuUtilization;
// }

// const taskList = [{ executionTime: 3 }, { executionTime: 2 }, { executionTime: 5 }];
// const cores = 2;
// console.log(maximizeCpuUtilization(taskList, cores));
// Hash Set for Two Numbers Sum:

// javascript
// Copy code
// function findTwoNumbersSum(arr, target) {
//   const numSet = new Set();

//   for (const num of arr) {
//     const complement = target - num;
//     if (numSet.has(complement)) {
//       return [complement, num];
//     }
//     numSet.add(num);
//   }

//   return null;
// }

// const numberArray = [2, 7, 11, 15];
// const targetSum = 9;
// console.log(findTwoNumbersSum(numberArray, targetSum));
// Remove Duplicates from Sorted Array In-Place:

// javascript
// Copy code
// function removeDuplicates(arr) {
//   const uniqueArray = [...new Set(arr)];
//   arr.length = 0;
//   arr.push(...uniqueArray);
// }

// const sortedArray = [1, 1, 2, 2, 3, 4, 5];
// removeDuplicates(sortedArray);
// console.log(sortedArray);
// Check if Two Strings are Rotations:

// javascript
// Copy code
// function areStringsRotations(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const concatenated = str1 + str1;
//   return concatenated.includes(str2);
// }

// const string1 = "abcde";
// const string2 = "cdeab";
// console.log(areStringsRotations(string1, string2));
// Group Words by Anagrams:

// javascript
// Copy code
// function groupAnagrams(words) {
//   const groupedAnagrams = {};

//   for (const word of words) {
//     const sortedWord = word.split('').sort().join('');
//     if (groupedAnagrams[sortedWord]) {
//       groupedAnagrams[sortedWord].push(word);
//     } else {
//       groupedAnagrams[sortedWord] = [word];
//     }
//   }

//   return Object.values(groupedAnagrams);
// }

// const wordList = ["listen", "silent", "enlist", "tea", "eat"];
// console.log(groupAnagrams(wordList));

// Finding Max and Min Elements in an Array:
// Initialize variables max and min with the first element of the array.
// Iterate through the array starting from the second element.
// Update max if the current element is greater than max.
// Update min if the current element is smaller than min.
// After the iteration, max and min will contain the maximum and minimum elements.
// javascript
// Copy code
// function findMaxAndMin(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }

//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return { max, min };
// }

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// console.log(findMaxAndMin(array));
// Determining if a String is a Palindrome:
// Remove spaces and convert the string to lowercase to handle cases with spaces or different letter cases.
// Reverse the string.
// Compare the reversed string with the original string to check if they are equal.
// javascript
// Copy code
// function isPalindrome(str) {
//   const cleanedStr = str.replace(/\s/g, '').toLowerCase();
//   const reversed = cleanedStr.split('').reverse().join('');
//   return cleanedStr === reversed;
// }

// const testString = "A man a plan a canal Panama";
// console.log(isPalindrome(testString));
// Greedy Task Scheduling:
// Sort the tasks by their end times in ascending order.
// Iterate through the sorted tasks, selecting tasks that do not overlap with the current task.
// Track the total CPU utilization time.
// javascript
// Copy code
// function maximizeCpuUtilization(tasks) {
//   tasks.sort((a, b) => a.end - b.end);

//   let count = 0;
//   let currentEnd = -Infinity;

//   for (const task of tasks) {
//     if (task.start >= currentEnd) {
//       count++;
//       currentEnd = task.end;
//     }
//   }

//   return count;
// }

// const taskList = [{ start: 1, end: 3 }, { start: 2, end: 4 }, { start: 3, end: 5 }];
// console.log(maximizeCpuUtilization(taskList));
// Creating a Hash Table from Scratch:
// Initialize an array (bucket) to store key-value pairs.
// Use a hash function to convert keys into indices.
// Handle collisions using techniques like chaining or open addressing.
// javascript
// Copy code
// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.buckets = new Array(size).fill(null).map(() => []);
//   }

//   hash(key) {
//     let hashValue = 0;

//     for (const char of key) {
//       hashValue += char.charCodeAt(0);
//     }

//     return hashValue % this.size;
//   }

//   insert(key, value) {
//     const index = this.hash(key);
//     this.buckets[index].push({ key, value });
//   }

//   retrieve(key) {
//     const index = this.hash(key);
//     const bucket = this.buckets[index];

//     for (const pair of bucket) {
//       if (pair.key === key) {
//         return pair.value;
//       }
//     }

//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.buckets[index];

//     for (let i = 0; i < bucket.length; i++) {
//       if (bucket[i].key === key) {
//         bucket.splice(i, 1);
//         return;
//       }
//     }
//   }
// }

// const myHashTable = new HashTable(10);
// myHashTable.insert("name", "John");
// console.log(myHashTable.retrieve("name"));
// myHashTable.remove("name");
// Merging Two Sorted Arrays:
// Use the concat method to merge the arrays.
// Apply the sort method to sort the merged array.
// javascript
// Copy code
// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }

// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
// console.log(mergeArrays(array1, array2));
// Reversing a String:
// Use the split, reverse, and join methods to reverse the string.
// javascript
// Copy code
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// const inputString = "hello";
// console.log(reverseString(inputString));
// Greedy Coin Change:
// Sort the coin denominations in descending order.
// Iterate through the sorted denominations, selecting the largest coin that can be used without exceeding the remaining amount.
// javascript
// Copy code
// function minCoins(coins, amount) {
//   coins.sort((a, b) => b - a);

//   let count = 0;

//   for (const coin of coins) {
//     while (amount >= coin) {
//       amount -= coin;
//       count++;
//     }
//   }

//   return count;
// }

// const coinDenominations = [1, 2, 5];
// const targetAmount = 11;
// console.log(minCoins(coinDenominations, targetAmount));
// Finding Common Elements in Two Arrays:
// Convert arrays to sets.
// Use the filter method with the has method to find common elements.
// javascript
// Copy code
// function findCommonElements(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   return [...set1].filter(item => set2.has(item));
// }

// const arrayA = [1, 2, 3, 4];
// const arrayB = [3, 4, 5, 6];
// console.log(findCommonElements(arrayA, arrayB));
// Rotating an Array to the Right:
// Use the slice method to split the array.
// Use the concat method to concatenate the two parts.
// javascript
// Copy code
// function rotateArray(arr, steps) {
//   const rotated = arr.slice(-steps).concat(arr.slice(0, -steps));
//   return rotated;
// }

// const inputArray = [1, 2, 3, 4, 5];
// const rotationSteps = 2;
// console.log(rotateArray(inputArray, rotationSteps));
// Counting Occurrences of Characters in a String:
// Use an object to store character counts.
// Iterate through the string and update the counts.
// javascript
// Copy code
// function countOccurrences(str) {
//   const charCount = {};
//   str.split('').forEach(char => {
//     charCount[char] = (charCount[char] || 0) + 1;
//   });
//   return charCount;
// }

// const testString = "hello";
// console.log(countOccurrences(testString));
// Task Scheduling Problem (Greedy):
// Sort tasks by their execution times.
// Iterate through tasks, selecting non-overlapping tasks.
// javascript
// Copy code
// function maximizeCpuUtilization(tasks) {
//   tasks.sort((a, b) => a.executionTime - b.executionTime);

//   let count = 0;
//   let currentCore = 0;

//   for (const task of tasks) {
//     if (currentCore < coreConstraints && task.executionTime > 0) {
//       count++;
//       task.executionTime = 0;
//       currentCore++;
//     }
//   }

//   return count;
// }

// const taskList = [{ executionTime: 3 }, { executionTime: 2 }, { executionTime: 5 }];
// const cores = 2;
// console.log(maximizeCpuUtilization(taskList, cores));
// Finding Two Numbers in an Array (Hash Set):
// Use a hash set to store seen numbers.
// Iterate through the array, checking if the complement exists in the set.
// javascript
// Copy code
// function findTwoNumbersSum(arr, target) {
//   const numSet = new Set();

//   for (const num of arr) {
//     const complement = target - num;
//     if (numSet.has(complement)) {
//       return [complement, num];
//     }
//     numSet.add(num);
//   }

//   return null;
// }

// const numberArray = [2, 7, 11, 15];
// const targetSum = 9;
// console.log(findTwoNumbersSum(numberArray, targetSum));
// Removing Duplicates from a Sorted Array In-Place:
// Use the Set constructor to create a set from the array.
// Spread the set back into the array.
// javascript
// Copy code
// function removeDuplicates(arr) {
//   const uniqueArray = [...new Set(arr)];
//   arr.length = 0;
//   arr.push(...uniqueArray);
// }

// const sortedArray = [1, 1, 2, 2, 3, 4, 5];
// removeDuplicates(sortedArray);
// console.log(sortedArray);
// Checking if Two Strings are Rotations:
// Concatenate the first string with itself.
// Check if the second string is a substring of the concatenated string.
// javascript
// Copy code
// function areStringsRotations(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const concatenated = str1 + str1;
//   return concatenated.includes(str2);
// }

// const string1 = "abcde";
// const string2 = "cdeab";
// console.log(areStringsRotations(string1, string2));
// Grouping Words by Anagrams:
// Create a hash table where the keys are sorted versions of words.
// Iterate through the words, adding them to the corresponding group in the hash table.
// javascript
// Copy code
// function groupAnagrams(words) {
//   const groupedAnagrams = {};

//   for (const word of words) {
//     const sortedWord = word.split('').sort().join('');
//     if (groupedAnagrams[sortedWord]) {
//       groupedAnagrams[sortedWord].push(word);
//     } else {
//       groupedAnagrams[sortedWord] = [word];
//     }
//   }

//   return Object.values(groupedAnagrams);
// }

// const wordList = ["listen", "silent", "enlist", "tea", "eat"];
// console.log(groupAnagrams(wordList));
