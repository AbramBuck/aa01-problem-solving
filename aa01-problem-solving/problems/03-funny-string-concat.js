/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Write a `funnyStringConcat` function that receives two string parameters: 
`str1` and `str2`. The function should return a new string consisting of the 
first 3 letters of `str1` followed by the last 3 letters of `str2`.

(You can assume that the strings passed to `funnyStringConcat` will always have 
at least 3 letters.)

**Challenge:** Once you get `funnyStringConcat` working, refactor it so that it
uses the String `substring` method--look it up on MDN!--and consists of only one 
line inside the function block.
*/


// console.log(funnyStringConcat("abc", "def"));  //=> "abcdef"
// console.log(funnyStringConcat("number", "soldier"));  //=> "numier"

//Step 1 - Understand the Problem
//Write a function that takes the first 3 letters of one word and adds it to the last 3 letters of a different word
//A contrsaint that was addressed is if any word is less than 3 characters. If that was the case, I would try to include functionality to add a random character from an array with 5-9 different letters in it.

//Step 2 - Make a Plan
/*
1. Make a function called "funnyStringConcat" 
2. it needs to take 2 string parameters
3. Need to find out the first 3 letters of string1
4. Need to find the last 3 letter of string2
5. Need to put string1 letters and string2 letters into one word
6. Return the new combined word
*/

//Step 3 - Carry out the plan

function funnyStringConcat (str1, str2) {
    let firstHalf = (str1[0] + str1[1] + str1[2]);
    let secondHalf = (str2[str2.length-3] + str2[str2.length-2] + str2[str2.length-1]);
  	let fullWord = firstHalf + secondHalf;
  	return fullWord;
}

//Step 4. Test It, Look Back and Improve
let tester = funnyStringConcat("Heat", "Drone");
let tester2 = funnyStringConcat("Juice", "Friend");
let tester3 = funnyStringConcat("Hamburger", "Zoner");

console.log(tester);
console.log(tester2);
console.log(tester3);
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = funnyStringConcat;
