// // const myArray = [2, 3, 4]; // Replace this with your array

// // myArray.length = 0;
// // console.log(myArray);

// // Write a program (in PHP, Python or JS) to replace Hunt with 123 and Hunting with xyz in sentence - Hunt in Hunting. Output should be => 123 in xyz
// // function replaceHunt(sentence) {
// //     return sentence.replace(/Hunt/g, "123").replace(/Hunting/g, "xyz");
// // }

// // const myinput = "Hunt in Hunting";
// // console.log(replaceHunt(myinput))

// // // Method 1: Simple Replace
// // function replaceWords1(sentence) {
// //     return sentence.replace(/Hunt/g, "123").replace(/Hunting/g, "xyz");
// // }

// // Method 2: Map and Replace
// // function replaceWords2(sentence) {
// //     const wordMap = {
// //         "Hunt": "123",
// //         "Hunting": "xyz"
// //     };
// //     return sentence.split(/\b/).map(word => wordMap[word] || word).join('');
// // }

// // Method 3: Regular Expression and Callback
// // function replaceWords3(sentence) {
// //     const wordMap = {
// //         "Hunt": "123",
// //         "Hunting": "xyz"
// //     };
// //     const regex = new RegExp(Object.keys(wordMap).join("|"), "g");
// //     return sentence.replace(regex, match => wordMap[match]);
// // }

// // Method 4: Using a Function for Replacement
// // function replaceWords4(sentence) {
// //     const wordMap = {
// //         "Hunt": "123",
// //         "Hunting": "xyz"
// //     };
// //     return sentence.replace(/\b(Hunt|Hunting)\b/g, match => wordMap[match]);
// // }

// // Method 5: Split and Join with Mapping
// // function replaceWords5(sentence) {
// //     const wordMap = {
// //         "Hunt": "123",
// //         "Hunting": "xyz"
// //     };
// //     return sentence.split(/\b/).map(word => wordMap[word] || word).join('');
// // }

// // Test
// // const inputSentence = "Hunt in Hunting";
// // console.log("Method 1:", replaceWords1(inputSentence));
// // console.log("Method 2:", replaceWords2(inputSentence));
// // console.log("Method 3:", replaceWords3(inputSentence));
// // console.log("Method 4:", replaceWords4(inputSentence));'

// function replaceMyHunt(lines) {
//     const queryMap = {
//         "Hunt": "123",
//         "Hunting": "xyz"
//     };
//     return lines.split(/\b/).map(q => queryMap[q] || q).join('');
// }
// console.log(replaceMyHunt("Hunt in Hunting"));

// function replaceMyHunt(lines) {
//     const queryMap = {
//         "Hunt": "123",
//         "Hunting": "xyz"
//     };
//     let result = "";
//     let word = "";
//     for (let i = 0; i < lines.length; i++) {
//         const char = lines[i];

//         if (char.match(/\w/)) {

//             word += char;
//         } else {

//             result += queryMap[word] || word;
//             result += char;
//             word = "";
//         }
//     }
//     result += queryMap[word] || word;

//     return result;
// }
// console.log(replaceMyHunt("Hunt in Hunting"));

function rev(lines) {
 return mywords = lines.split(" ").reverse().join(" ");
}

console.log(rev("This is a good day"));
