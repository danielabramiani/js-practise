// const  desincreaseBt = document.getElementById("disincrease");
// const increaseBt = document.getElementById("increase");
// const resetBt = document.getElementById("reset");
// const numberLabel = document.getElementById("num");
// let count = 0;

// desincreaseBt.onclick = function(){
//     count --;
//     numberLabel.textContent = count;
// };
// increaseBt.onclick = function(){
//     count ++;
//     numberLabel.textContent = count;
// };
// resetBt.onclick = function(){
//     count = 0;
//     numberLabel.textContent = count;
// };

// function nameOfTheFamilyMembers() {
//     const sonName = "daniel";
//     const fatherName = "Chiko";
//     const momName = "Ninuca";
//     const sisterName = "mariam";
//     if (sonName === "daniel" && fatherName === "Chiko" && momName === "Ninuca" && sisterName === "mariam"){
//         console.log("are family members are valid");
//     }else{
//         console.log("who are you");
//     }
// }
// let x = 3;
// let y = 2;
// let z = 1;

// // z = Math.round(x);   // Rounds x to the nearest integer: 3
// // z = Math.floor(x);   // Rounds x down to the nearest integer: 3
// // z = Math.ceil(x);    // Rounds x up to the nearest integer: 3
// // z = Math.trunc(x);   // Removes the fractional part of x: 3
// // z = Math.pow(x, y);  // x raised to the power of y: 3^2 = 9
// // z = Math.sqrt(x);    // Square root of x: sqrt(3) ≈ 1.732
// // z = Math.log(x);     // Natural logarithm of x: ln(3) ≈ 1.099
// // z = Math.sin(x);     // Sine of x (in radians): sin(3) ≈ 0.141
// // z = Math.cos(x);     // Cosine of x (in radians): cos(3) ≈ -0.99
// // z = Math.tan(x);     // Tangent of x (in radians): tan(3) ≈ -0.142
// // z = Math.abs(x);     // Absolute value of x: 3
// // z = Math.sign(x);    // Sign of x: 1 (positive number)

// let max = Math.max(x, y, z); // Finds the largest value among x, y, z: 3
// let min = Math.min(x, y, z); // Finds the smallest value among x, y, z: 1

// console.log(min); // Output: 1

// random number generator + increase +disincrease + reset buttons

// const  desincreaseBt = document.getElementById("disincrease");
// const increaseBt = document.getElementById("increase");
// const resetBt = document.getElementById("reset");
// const randomBt = document.getElementById("random");
// const numberLabel = document.getElementById("num");
// let count = 0;

// desincreaseBt.onclick = function(){
//     count --;
//     numberLabel.textContent = count;
// };
// increaseBt.onclick = function(){
//     count ++;
//     numberLabel.textContent = count;
// };
// resetBt.onclick = function(){
//     count = 0;
//     numberLabel.textContent = count;
// };
// randomBt.onclick = function() {
//     let numberRandom = Math.floor(Math.random() * 100) + 1;
//     numberLabel.textContent = count + numberRandom;
// }

// let age = 14;
// let message = age == 14 ? "you are a good person" : "Bad person get in the jail";
// console.log(message)

// let day = 4;
// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is tuesday");
//         break;
//     case 3:
//         console.log("it is wensday");
//         break;
//     case 4:
//         console.log("it is thursday");
//         break;
//     case 5:
//         console.log("it is friday");
//         break;
//     case 6:
//         console.log("it is saturday");
//         break;
//     case 7:
//         console.log("it is sunday");
//         break;
// }

// Define the variable
// let name = "daniel";

// // String methods in action
// console.log(name.toUpperCase()); // Convert to uppercase: "DANIEL"
// console.log(name.toLowerCase()); // Convert to lowercase: "daniel"
// console.log(name.charAt(0)); // Get the character at index 0: "d"
// console.log(name.charCodeAt(0)); // Get Unicode of character at index 0: 100
// console.log(name.indexOf('a')); // Find the index of 'a': 1
// console.log(name.lastIndexOf('e')); // Find the last index of 'e': 4
// console.log(name.includes('n')); // Check if it includes 'n': true
// console.log(name.startsWith('da')); // Check if it starts with 'da': true
// console.log(name.endsWith('el')); // Check if it ends with 'el': true
// console.log(name.slice(1, 4)); // Extract part of the string: "ani"
// console.log(name.substring(0, 3)); // Extract substring: "dan"
// console.log(name.replace('dan', 'Dan')); // Replace 'dan' with 'Dan': "Daniel"
// console.log(name.split('')); // Split into array of characters: ["d", "a", "n", "i", "e", "l"]
// console.log(name.repeat(2)); // Repeat the string twice: "danieldaniel"
// console.log(name.length); // Get the length of the string: 6
// console.log(name.padStart(10, '-')); // Pad the string at the start: "----daniel"
// console.log(name.padEnd(10, '-')); // Pad the string at the end: "daniel----"
let username = "";
while(username === ""){
    username = prompt(`Enter your name pleaase`);
}
console.log(`Hello ${username}`);
