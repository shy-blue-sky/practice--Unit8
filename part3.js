/**
 * Challenge 1:
 *
 * Construct a function objectFilter that accepts an object as the first parameter
 * and a callback function as the second parameter. objectFilter will return a new object.
 * The new object will contain only the properties from the input object such that the
 * property's value is equal to the property's key passed into the callback.
 */

function objectFilter(obj, callback) {}

// const cities = {
//   London: 'LONDON',
//   LA: 'Los Angeles',
//   Paris: 'PARIS',
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

/**
 * Challenge 2:
 *
 * Create a function majority that accepts an array and a callback. The callback will
 * return either true or false. majority will iterate through the array and perform the
 * callback on each element until it can be determined if the majority of the return values
 * from the callback are true. If the number of true returns is equal to the number of
 * false returns, majority should return false.
 */

function majority(array, callback) {}

// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/**
 * Challenge 3:
 *
 * Create a function prioritize that accepts an array and a callback. The callback will
 * return either true or false. prioritize will iterate through the array and perform the
 * callback on each element, and return a new array, where all the elements that yielded
 * a return value of true come first in the array, and the rest of the elements come second.
 */

function prioritize(array, callback) {}

// const startsWithS = function (str) {
//   return str[0] === 's' || str[0] === 'S';
// };
// console.log(
//   prioritize(
//     ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
//     startsWithS
//   )
// ); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/**
 * Challenge 4:
 *
 * Create a function countBy that accepts an array and a callback, and returns an object.
 * countBy will iterate through the array and perform the callback on each element.
 * Each return value from the callback will be saved as a key on the object.
 * The value associated with each key will be the number of times that particular
 * return value was returned.
 */

function countBy(array, callback) {}

// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return 'even';
//     else return 'odd';
//   })
// ); // should log: { odd: 3, even: 2 }

/**
 * Challenge 5:
 *
 * Create a function groupBy that accepts an array and a callback, and returns an object.
 * groupBy will iterate through the array and perform the callback on each element.
 * Each return value from the callback will be saved as a key on the object.
 * The value associated with each key will be an array consisting of all the elements that
 * resulted in that return value when passed into the callback.
 */

function groupBy(array, callback) {}

// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/**
 * Challenge 6:
 *
 * Create a function goodKeys that accepts an object and a callback. The callback will
 * return either true or false. goodKeys will iterate through the object and perform the
 * callback on each value. goodKeys will then return an array consisting only the keys
 * whose associated values yielded a true return value from the callback.
 */

function goodKeys(obj, callback) {}

// const sunny = {
//   mac: 'priest',
//   dennis: 'calculating',
//   charlie: 'birdlaw',
//   dee: 'bird',
//   frank: 'warthog',
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === 'bird';
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

/**
 * Challenge 7:
 *
 * Create a function commutative that accepts two callbacks and a value. commutative will
 * return a boolean indicating if the passing the value into the first function, and then
 * passing the resulting output into the second function, yields the same output as the
 * same operation with the order of the functions reversed (passing the value into the
 * second function, and then passing the output into the first function).
 */

function commutative(func1, func2, value) {}

// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

/**
 * Challenge 8:
 *
 * Create a function objFilter that accepts an object and a callback. objFilter should
 * make a new object, and then iterate through the passed-in object, using each key as
 * input for the callback. If the output from the callback is equal to the corresponding
 * value, then that key-value pair is copied into the new object. objFilter will
 * return this new object.
 */

function objFilter(obj, callback) {}

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

/**
 * Challenge 9:
 *
 * Create a function rating that accepts an array (of functions) and a value.
 * All the functions in the array will return true or false.
 * rating should return the percentage of functions from the array that return
 * true when the value is used as input.
 */

function rating(arrOfFuncs, value) {}

// const isDivBy2 = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes('6');
// const checks = [isDivBy2, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

/**
 * Challenge 10:
 *
 * Create a function pipe that accepts an array (of functions) and a value.
 * pipe should input the value into the first function in the array, and then use the
 * output from that function as input for the second function, and then use the output
 * from that function as input for the third function, and so forth, until we have an
 * output from the last function in the array. pipe should return the final output.
 */

function pipe(arrOfFuncs, value) {}

// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

/**
 * Challenge 11:
 *
 * Create a function highestFunc that accepts an object (which will contain functions)
 * and a subject (which is any value). highestFunc should return the key of the object
 * whose associated value (which will be a function) returns the largest number,
 * when the subject is given as input.
 */

function highestFunc(objOfFuncs, subject) {}

// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

/**
 * Challenge 12:
 *
 * Create a function, combineOperations, that takes two parameters:
 * a starting value and an array of functions.
 * combineOperations should pass the starting value into the first function in the array.
 * combineOperations should pass the value returned by the first function into the
 * second function, and so on until every function in the array has been called.
 * combineOperations should return the final value returned by the last function in the array.
 */

function combineOperations(startVal, arrOfFuncs) {}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

/**
 * Challenge 13:
 *
 * Define a function myFunc that takes an array and a callback. myFunc should pass each element
 * from the array (in order) into the callback. If the callback returns true, myFunc should
 * return the index of the current element.
 * If the callback never returns true, myFunc should return -1;
 */

function myFunc(array, callback) {}

const numbers = [1, 2, 3, 6, 64, 10, 8, 12];
const odds = [9, 13, 15, 17];

function isEven(num) {
  return num % 2 === 0;
}

// console.log(myFunc(numbers, isEven)); // Output should be 1
// console.log(myFunc(odds, isEven)); // Output should be -1
