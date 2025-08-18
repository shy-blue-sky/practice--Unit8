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


//////<------ Xavier's! (Works!) ----->
// const array = [1, 2, 3, 4, 5];

// function multTwo(input){
//   console.log(input * 2);
// }

// function mapWith(array) {
//  array.forEach((element) => multTwo(element));  
// }
// mapWith(array);


//////<------ Our old attempt (Doesn't work bc forEach doesn't return a value. Needs to logged to console before forEach takes place) ----->
// function mapWith(array) {
//   return array.forEach((element) => multTwo(element));
// }

// const arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

// function multTwo(input) {
//   input * 2;
// }

// // write your own test cases!
// console.log(mapWith(arr));

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

// //// < ==== Our attempt Aug 17
// function intersection(arrays) {
//   const sameElems = [];
//   for (let i = 0; i < arrays.length; i++) { // For iterating through first nested array
//     for (let j = 0; j < arrays[i].length; j++) { // For getting element of first nested array to be compared to next nexted array
//       for (let h = 0; h < arrays[i+1].length; h++){ // For getting element of next nested array
//         if (arrays[i][j] === arrays[i+1][h]) { // ---> Issue: How to have last i compare with a non-existent "i+1"
//           sameElems.push(arrays[i][j]);
//         }
//       }
//     }
//   }
//   return sameElems;
// }


// console.log(
//   intersection([ // sample 
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// ); // should log: [5, 15]


// /// <=== Xavier's experiment
// const array = [[1, 2, 3],[1, 2, 4], [1, 2, 5]] ;

// const output = array.reduce((accumulator, currentValue) => {
//   if (array[1].includes(1)){
//     accumulator.push(1);
//     return accumulator;
//   }
// }, []);


// console.log(output);


// < ------ CYNTHIA'S REDUCE SOLUTION starts here ------>
// comparing 2 subarrays, called accum and curr, subarrs 1 and 2
// find only el included in curr subarr (subarr 2)
      // filter el shared in accum subarr 1 and curr subarr 2
      //return out a single resulting array from 1st iter of reduce
      //after 1st iter of reduce, iterate again with reduce, filtering the resulting subarr (from 1st reduce iter) according to elements in next curr subarr 3
      // return out new resulting arr after 2nd iteration of reduce and filtering process
      // do NOT initVal empty array here since that empty array is completely separate of the array auto-created by filter()

// < ------ Xavier's breakdown comments
// function intersection (arrOfArrs) {
//     // In past examples when using reduce, we would use it to iterate through elements in an array. 
//     // In this case, it iterates through the subarrays since this is an array of arrays.
//     // the accumulator allows us to store info that can be used at a later point in time, and curr(aka currentValue)
//     // iterates through each subarray.
//     const result = arrOfArrs.reduce( (accum, curr) => {
//       // by default accumulator is going to = the first subarray
//       // next whee use filter to check the elements in accumulator against curr which iterates to check the 2nd subarray.
//       // accumulator then updates to reflect the elements that were the same between both arrays [5,15]
//       // curr then iterates again to the third subarray which is compared against the updated accumulator value [5,15]
//       // [5,15] is also in the third subarray so that result is returned. I wonder what would happen if the third subarray did not match the updated accumulator value
//         return accum.filter(el => curr.includes(el));
//     } )
//     return result;
// }

// console.log(
//   intersection([ // sample 
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// ); // should log:

// < ------ CYNTHIA'S REDUCE SOLUTION ends here ------>

// ////// <------ Our initial attempt (Aug 11-12?), underneath is Cynthia's code, further down is our attempt
// function intersection1(arrays) {
//     let result = arrays.pop(); // result is 3rd subarr, removes 3rd subarray from arrays
//     // console.log(result); // <- For us to check what Cynthia's code does
//     // console.log(arrays); // <- For us to check what Cynthia's code does 
//     while (arrays.length) { // while array of arrays still has length
//       let currArr = arrays.pop(); // currArr is 2nd subarr
//       console.log(currArr);// <- For us to check what Cynthia's code does
//       console.log(arrays); // <- For us to check what Cynthia's code does
//       const newArr = [];
//       currArr.filter( (el) => { //filter el in currArr that are included in result array
//       if ( result.includes(el) ) newArr.push(el); // push only included el into newArr
//      }) 
//      result = newArr; //reassign result subarr to newArr
//     }
//    return result;
// }



// const arrays = [ [5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20] ];

// // console.log(intersection(arrays)); // should log: [5, 15]

// console.log(intersection1(arrays));



// //////////////////// <---- Doesn't work
// // function intersection(arrays) {
// //   let result = arrays[0];
// //   let newArr = [];
  
// //   function nextArray(input) {
// //     return input
// //   }

// //   for(let i = 1; i < arrays.length; i++){
// //     for (let j = 0; j < arrays[i].length; j++)
// //     result = result.filter(function (j) {
// //        if (result.includes(j) === true) {
// //         newArr.push(j);
// //         console.log(newArr);
// //     };
// //     result = newArr;
// //   })
// //     // nextArray[i]([j]))
// //   }
// //   return result;
// // }

// // console.log(intersection(arrays));




// //////////////////// <---- Our code
// // function intersection(arrays) {
// //     for (let i = 1; i < arrays.length; i++){
// //       for (let j = 0; j < arrays[i].length; j++){
        
// //       }
// //     }
// // }

// // array[1]

// // console.log(
// //   intersection([
// //     [5, 10, 15, 20],
// //     [15, 88, 1, 5, 7],
// //     [1, 10, 15, 5, 20],
// //   ])
// // ); // should log: [5, 15]

/**
 * Challenge 8:
 *
 * Construct a function union that takes in an array of arrays, compares the inner arrays,
 * and returns a new array that contains all elements. If there are duplicate elements,
 * only add it once to the new array. Preserve the order of the elements starting from the
 * first element of the first array.
 * BONUS: Use reduce!
 */

// Hyeyoon
// function union1(arrays) {
//   const result = arrays.reduce((acc, curr) => 
//     return acc.filter((el) => )
//   , arrays[0]);
//   return result;
// }


//hopefully the answer
// function union(arrays) {
//   const combinedArray = arrays.flat(); // Flatten all arrays into one
//   return [...new Set(combinedArray)]; // Remove duplicates
// }



// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// ); 

// // Xavier
// function union(arrays) {
//   let newArray = [...arrays[0], ...arrays[1], ...arrays[2]];
//   newArray = [...new Set(newArray)];
//   return newArray;
// }



// function union3(arrays) {
//   const newArray = [...arrays[0], ...arrays[1], ...arrays[2]];
//   console.log(newArray);
//   for (let i = 0; i < newArray.length; i++) {
//     const tempArray = [];
//     if (newArray.indexOf(newArray[i]) === newArray[i]){
//     tempArray.push(newArray[i]);
//     }
// }
//   return newArray;
// }

// console.log(
//   union3([
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

// function multiMap(arrVals, arrCallbacks) {
//  const obj = {};
//  for (let i = 0; i < arrCallbacks.length; i++) {
//   for (let j = 0; j < arrVals.length; j++) {
//     const arr = [];
//     arr.push(arrCallbacks[i](arrVals[j]));
//     obj[arrVals[j]] = arr;
//     // console.log(obj)
//   // return obj;
//   }
//   // return obj;
//   // console.log(obj);
//  }
//   return obj;
// }

// Xavier's group solution
function multiMap(arrVals, arrCallbacks) {
    const mapped = arrVals.reduce((accumulator, currentVal) =>{
        // Syntax for adding key-value pair to object ==> obj["key name"] = "value"  --> obj = { key name : value}
      accumulator[currentVal] = arrCallbacks.map(callback => callback(currentVal));
      // I1 : accumulator [catfood] = [CATFOOD, ]
      // I2: accumulator [catfood] = [CATFOOD, Catfood, ]
      // I3 : accumulator [catfood] = [CATFOOD, Catfood, catfoodcatfood]
      return accumulator;
      // Return1 : [catfood] = [CATFOOD, Catfood, catfoodcatfood]
  }, {}); // accumulator = {}  ---> defining accumulator as an empty object
  return mapped;
}



console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
//should log: {
//   catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
//   glue: ['GLUE', 'Glue', 'glueglue'],
//   beer: ['BEER', 'Beer', 'beerbeer'],
// };