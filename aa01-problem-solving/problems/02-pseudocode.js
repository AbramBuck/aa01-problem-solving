/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/

// console.log(within5Of100(94));  //=> false
// console.log(within5Of100(95));  //=> true
// console.log(within5Of100(100)); //=> true
// console.log(within5Of100(105)); //=> true
// console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?

//Step 1 - Understand the Problem. My Assesment Below:
//Write a function that is true if a number is within 5 of 100
//Is 5 supposed to be 50? It is stated in the function but then appears to be misstated in the explanation. I May be misinterpreting the "O" in of as a 0
//There are a few example inputs and outputs that corrected my previous error. I thought it was a 50 but I can see it is a 5 after reviewing the example console logs
//There can only be 10 true outputs because it is essentially asking for a range from 95-105.

//Step2 - Make a Plan
//1. Define a function called "within5Of100"
//2. The function needs to take a number parameter
//3. check if the number given is in the range of 95-105
//4. return true if it is and false if it isn't

function within5Of100(number) {
    return (number > 94 && number < 106);
}

//Challenge Function
//Write a function that returns true if a number is in a specified range of another number
//write a function called isInRange
//It needs to take three parameters a Number, Range and a SecondNumber
//Take the number add the range to it to get end range. Make a variable called endRange
//Take the number and subtract the range to get start range. Make a variabel callded startRange
//need an expression that is true if the given number is within the given range of the second number
//return the results

function isInRange(num1, range, num2 ) {
    let startRange = num1 - range;
    let endRange = num1 + range;
    let result = (num2 >= startRange && num2 <= endRange);
    return result;
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
