console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  return 'Hi '+name;
}
// Remember to call the function to test
console.log('Should say "Hi Chad"', helloName('Chad'));
console.log('Should say "Hi Kash"',helloName('Kash'));
console.log('Should say "Hi Kash"',helloName('Nancy'));
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
let answer = firstNumber+secondNumber;
return answer;
}
  // return firstNumber + secondNumber;

console.log('Numbers =', addNumbers(4,6));
console.log('Numbers =', addNumbers(9,2));
console.log('Numbers =', addNumbers(299,6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber,secondNumber,thirdNumber){
let answer= firstNumber*secondNumber*thirdNumber;
return answer;
}
console.log('Answer is', multiplyThree(4,2,7));
console.log('Answer is', multiplyThree(5,1,9));
console.log('Answer is', multiplyThree(74,1,9));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
let lastItem= array.length-1
return array[lastItem];
}
console.log(getLast(['Nitrogen','Carbon','Oxygen','Hydrogen']));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let array=[1,2,3,4,5];
function find (value, array){
for(let i=0; i<array.length; i++){
  if(array[i]===value)
  return true;
}
  return false;
}



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter=string.charAt(0)
  return true;
}else{
  return false;
}

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
  // TODO: loop to add items


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
