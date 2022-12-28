/**
 * Exercise 1 : Evaluation
    Instructions
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
 */

5 >= 1
// Prediction: true
// Actual: true
0 === 1
// Prediction: false
// Actual: false
4 <= 1
// Prediction: false
// Actual: false
1 != 1
// Prediction: false
// Actual: false
"A" > "B" //The letter "A" is not considered to be more than the letter "B", the alphabet is arranged in a specific order, with each letter being assigned a numerical value based on its position in the alphabet
// Prediction: false
// Actual: false
"B" < "C" //The letter "B" is considered to be less than the letter "C"
// Prediction: true
// Actual: true
"a" > "A" //When comparing strings, JavaScript compares the Unicode values of the characters in the strings to determine their relative order. the letter "A" has a numerical value of 65, and the letter "a" has a numerical value of 97. Because 97 is greater than 65
// Prediction: true
// Actual: true
"b" < "A"
// Prediction: false
// Actual: false
true === false //In JavaScript, the triple equals operator (===) is used to compare two values for strict equality, The values true and false are both boolean values, which means they can only have one of two possible values: true or false. Because true and false are not equal to each other, the comparison true === false would evaluate to false.
// Prediction: false
// Actual: false
true != true
// Prediction: false
// Actual: false

/**
 * Exercise 2 : Ask For Numbers
    Instructions
    Ask the user for a string of numbers separated by commas
    Console.log the sum of the numbers.
    Hint: use some string methods
*/

/*let numString = prompt("Enter a string of numbers separated by commas: ")
let numArray = numString.split(",")

let sum = 0
for (let i = 0; i < numArray.length; i++) {
    sum += parseInt(numArray[i])
}

console.log(sum)*/

/**
 * Exercise 3 : Find Nemo
    Instructions
    Hint: if statement (tomorrow’s lesson)

    Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
    Find the word “Nemo”
    Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
    If you can’t find Nemo, console.log “I can’t find Nemo”.
 */

/*let sentence = prompt("Give a sentence containing the word Nemo : ")
let position = sentence.indexOf("Nemo")
console.log(`I found Nemo at ${position}`)

if(position >= 0) {
    console.log(`I found Nemo at ${position}`)
} else {
    console.log("I can’t find Nemo")
}*/

/**
 * Exercise 4 : Boom
    Instructions
    Hint: if statement (tomorrow’s lesson)

    Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

    If the number given is less than 2 : return “boom”
    If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
    If the number given is evenly divisible by 2, add a exclamation mark to the end.
    If the number given is evenly divisible by 5, return the string in ALL CAPS.
    If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
*/