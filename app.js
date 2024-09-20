//Assignment 15
//Qns no 1

// function checkCharacter(character) {
  
//     if (!isNaN(character) && character.trim() !== "") {
//         return "The input is a number.";
//     }
//      let asciiValue = character.charCodeAt(0);

//     if (asciiValue >= 65 && asciiValue <= 90) {
//         return "The input is an uppercase letter.";
//     }
    
//     if (asciiValue >= 97 && asciiValue <= 122) {
//         return "The input is a lowercase letter.";
//     }
//     return "The input is neither a number nor a letter.";
// }
// let userInput = prompt("Enter a character:");
// let result = checkCharacter(userInput);
// console.log(result);


//qns no 2

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         return `${num1} is larger.`;
//     } else if (num2 > num1) {
//         return `${num2} is larger.`;
//     } else {
//         return `Both numbers are equal.`;
//     }
// }


// let input1 = parseInt(prompt("Enter the first integer:"));
// let input2 = parseInt(prompt("Enter the second integer:"));

// let result = compareNumbers(input1, input2);
// console.log(result);



//qns no 3
// function checkNumber(num) {
//     if (num > 0) {
//         return "The number is positive.";
//     } else if (num < 0) {
//         return "The number is negative.";
//     } else {
//         return "The number is zero.";
//     }
// }


// let userInput = parseFloat(prompt("Enter a number:"));
// let result = checkNumber(userInput);
// console.log(result);

//qns no 4

// function isVowel(character) {
   
//     let lowerChar = character.toLowerCase();
    

//     return ['a', 'e', 'i', 'o', 'u'].includes(lowerChar);
// }

// let userInput = prompt("Enter a character:");
// if (userInput.length === 1) {
//     let result = isVowel(userInput);
//     console.log(result);
// } else {
//     console.log("Please enter a single character.");
// }


//qns no 5


// let correctPassword = "mypassword123";

// let  userInput = prompt("Please enter your password:");


// if (!userInput) {
  
//     console.log("Please enter your password.");
// } else if (userInput === correctPassword) {
   
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }


//qns no 6

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 19;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// console.log(greeting);


//qns no 7


// let timeInput = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");


// let time = parseInt(timeInput, 10);


// if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
//     console.log("Please enter a valid time in 24-hour format.");
// } else {
    
//     if (time >= 500 && time < 1200) {
//         console.log("Good morning!");
//     } else if (time >= 1200 && time < 1700) {
//         console.log("Good afternoon!");
//     } else if (time >= 1700 && time < 2100) {
//         console.log("Good evening!");
//     } else {
//         console.log("Good night!");
//     }
// }

