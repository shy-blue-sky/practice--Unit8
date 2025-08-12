/**
 * Challenge 1:
 *
 * Create a function addTwo that accepts one input and adds 2 to it.
 */

function addTwo(num) {}

// console.log(addTwo(3));
// console.log(addTwo(10));

/**
 * Challenge 2:
 *
 * Create a function addS that accepts one input and adds an "s" to it.
 */

function addS(word) {}

// console.log(addS('pizza'));
// console.log(addS('bagel'));

/**
 * Challenge 3:
 *
 * Create a function called map that takes two inputs:
 * an 'array' of numbers (a list of numbers)
 * a 'callback' function - a function that is applied to each element of the
 * array (inside of the function 'map')
 * Have map return a new array filled with numbers that are the result of using
 * the 'callback' function on each element of the input array.
 */

function map(array, callback) {}

// console.log(map([1, 2, 3], addTwo));

/**
 * Challenge 4:
 *
 * Create a function called forEach that takes an array and a callback, and runs
 * the callback on each element of the array. forEach does not return anything.
 */

function forEach(array, callback) {}

// write your own test cases!

/**
 * Challenge 5:
 *
 * In challenge 3, you've created a function called map. In this challenge,
 * you're going to rebuild the map function by creating a function called mapWith.
 * This time you're going to use forEach inside of mapWith instead of using a for loop.
 */

function mapWith(array, callback) {}

// write your own test cases!

/**
 * Challenge 6:
 *
 * Create a function called reduce that takes an array and reduces the elements
 * to a single value. For example it can sum all the numbers, multiply them,
 * or any operation that you can put into a function.
 */

// function reduce(array, callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < array.length; i++) {
//         accumulator = callback(accumulator,array[i]);       
//     }
//   return accumulator  
// }


// // write your own test cases!
// const arr = [1, 2, 3, 4, 5];

// function addAll (num1, num2) {
//     return num1 + num2; 
// }

// console.log(reduce(arr, addAll, 0))



/**
 * Challenge 7:
 *
 * Construct a function intersection that takes in an array of arrays,compares
 * the inner arrays, and returns a new array with elements found in all of them.
 * BONUS: Use reduce!
 */


function intersection1(arrays) {
    let result = arrays.pop(); // result is 3rd subarr, removes 3rd subarray from arrays
    // console.log(result); // <- For us to check what Cynthia's code does
    // console.log(arrays); // <- For us to check what Cynthia's code does 
    // let newArr = [];
    // while arrays still has length
    while (arrays.length) { // while array of arrays still has length
      let currArr = arrays.pop(); // currArr is 2nd subarr
    //   console.log(currArr);// <- For us to check what Cynthia's code does
    //   console.log(arrays); // <- For us to check what Cynthia's code does
      const newArr = [];
      currArr.filter( (el) => { //filter el in currArr that are included in result array
      if ( result.includes(el) ) newArr.push(el); // push only included el into newArr
     }) 
     result = newArr; //reassign result subarr to newArr
    }
   return result;
}



const arrays = [ [5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20] ];

// console.log(intersection(arrays)); // should log: [5, 15]

console.log(intersection1(arrays));


// function intersection(arrays) {
//   let result = arrays[0];
//   let newArr = [];
  
//   function nextArray(input) {
//     return input
//   }

//   for(let i = 1; i < arrays.length; i++){
//     for (let j = 0; j < arrays[i].length; j++)
//     result = result.filter(function (j) {
//        if (result.includes(j) === true) {
//         newArr.push(j);
//         console.log(newArr);
//     };
//     result = newArr;
//   })
//     // nextArray[i]([j]))
//   }
//   return result;
// }

// ////////////////////
// function intersection(arrays) {
//     for (let i = 1; i < arrays.length; i++){
//       for (let j = 0; j < arrays[i].length; j++){
        
//       }
//     }
// }

// array[1]

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// ); // should log: [5, 15]

/**
 * Challenge 8:
 *
 * Construct a function union that takes in an array of arrays, compares the inner arrays,
 * and returns a new array that contains all elements. If there are duplicate elements,
 * only add it once to the new array. Preserve the order of the elements starting from the
 * first element of the first array.
 * BONUS: Use reduce!
 */

function union(arrays) {}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// ); // should log: [5, 10, 15, 88, 1, 7, 100]

/**
 * Challenge 9:
 *
 * Construct a function objOfMatches that accepts two arrays and a callback.
 * objOfMatches will build an object and return it. To build the object,
 * objOfMatches will test each element of the first array using the callback
 * to see if the output matches the corresponding element (by index) of the
 * second array. If there is a match, the element from the first array becomes a
 * key in an object, and the element from the second array becomes the corresponding value.
 */

function objOfMatches(array1, array2, callback) {}

// console.log(
//   objOfMatches(
//     ['hi', 'howdy', 'bye', 'later', 'hello'],
//     ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// ); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/**
 * Challenge 10:
 *
 * Construct a function multiMap that will accept two arrays: an array of values
 * and an array of callbacks. multiMap will return an object whose keys match the
 * elements in the array of values. The corresponding values that are assigned to
 * the keys will be arrays consisting of outputs from the array of callbacks,
 * where the input to each callback is the key.
 */

function multiMap(arrVals, arrCallbacks) {}

// console.log(
//   multiMap(
//     ['catfood', 'glue', 'beer'],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: {
//   catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
//   glue: ['GLUE', 'Glue', 'glueglue'],
//   beer: ['BEER', 'Beer', 'beerbeer'],
// };