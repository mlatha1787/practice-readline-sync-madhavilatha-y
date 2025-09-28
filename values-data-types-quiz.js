const readline = require('readline-sync');

// Prompt for user's name and greet them
const userName = readline.question('What is your name? ');
console.log(`\nHello, ${userName}! Welcome to the Values, Data Types, and Operations quiz.`);
console.log('Please answer the following 5 questions. At least one question asks for a number.\n');

// Ask 5 questions using readline-sync.question() and store the answers in variables
const answer1 = readline.question('1) Which JavaScript primitive type is used for textual data? ');
const answer2 = readline.question('2) What is the result of "5" + 3 ? (type your answer exactly) ');
const answer3 = readline.question('3) What does typeof null return? ');
const answer4 = readline.question('4) How many primitive data types are there in JavaScript? (Please enter a number) ');
const answer5 = readline.question('5) What is the value of the expression 10 > 2 ? (true/false) ');

// Print the stored answers back to the user
console.log('\nThanks for completing the quiz, ' + userName + '! Here are the answers you provided:');
console.log('Answer 1 (text):', answer1);
console.log('Answer 2 (operation result):', answer2);
console.log('Answer 3 (typeof null):', answer3);
console.log('Answer 4 (numeric response as string):', answer4);
console.log('Answer 5 (comparison result):', answer5);

console.log('\nGood luck with your studies!');
