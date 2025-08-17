/**
 * Challenge 1:
 *
 * Create a function addTwo that accepts one input and adds 2 to it.
 */

function addTwo(num) {
 // declare a variable
   return num + 2;
}

// console.log(addTwo(3));
// console.log(addTwo(10));

/**
 * Challenge 2:
 *
 * Create a function addS that accepts one input and adds an "s" to it.
 */

function addS(word) {
    return word + 's';
}

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


function map(array, callback) {
    //Initialize an empty array called output
    const output = [];
    //Invoke callback function on the input array using a for loop to have the callback applied to every element within the array
    for (let i=0; i<array.length; i++) {
    //Push the result of the callback invocation into the new empty array
        output.push(callback(array[i]));
    }
    //Once for loop is completed, return output array
    return output;
}



// console.log(map([1, 2, 3], addTwo));

/**
 * Challenge 4:
 *
 * Create a function called forEach that takes an array and a callback, and runs
 * the callback on each element of the array. forEach does not return anything.
 */


function forEach(array, callback) {
    for (let i=0; i<array.length; i++) {
       callback(array[i]);
    }
}

function cb (num) {
    return num + 1;
}


const arr = [4, 5, 6];


// forEach(arr, cb)


/**
 * Challenge 5:
 *
 * In challenge 3, you've created a function called map. In this challenge,
 * you're going to rebuild the map function by creating a function called mapWith.
 * This time you're going to use forEach inside of mapWith instead of using a for loop.
 */

// function mapWith(array, callback) {
//     // init new array output
//     const output = [];
//     //apply forEach() to array
//     forEach (array, (el) => {
//        x = callback(el);
//        output.push(x);
//     });
//     // console.log(output);
//     return output;

//     // return output.push(forEach(array, callback));
//     // push cb results to output array
// }
 
function mapWith(array, callback) {
    const newArr = []; // init new empty arr
    forEach(array, (el) => newArr.push(callback(el))); // remember forEach 2 parameters (array AND function)
    return newArr; // remember to RETURN newArr
}

// console.log(mapWith(arr, cb));

// write your own test cases!

/**
 * Challenge 6:
 *
 * Create a function called reduce that takes an array and reduces the elements
 * to a single value. For example it can sum all the numbers, multiply them,
 * or any operation that you can put into a function.
 */

// function reduce(array, callback, initialValue) {
//    //for loop where result is single value, total sum of all elements in array 
//    let result = initialValue; // set accumulator variable to init value
//    for (const el of array) {
//     result = callback(result, el); // reassign accumulator var to eval result of callback function. Remember callback takes 2 parameter inputs. Reduce() almost always is comparing 2 things at a time, before reducing to 1 value, i.e. addTogether (a, b) or multiplayAll (a, b). BOTH take 2 parameters.
//    }
//    return result;
// }

function reduce (arr, cb, initVal) {
    let accum = initVal;
    for (const el of arr) {
        accum = cb(accum, el);
    }
    return accum; // always return accum so there's a value (not undefined)
}


// // write your own test cases!
const arrayEx = [3, 2, 1]

function addTogether (a , b) {
    return a + b;
}

function multiplyAll (a, b) {
    return a * b;
}

// console.log(reduce(arrayEx, addTogether, 0));
// console.log(reduce(arrayEx, multiplyAll, 1));

/**
 * Challenge 7:
 *
 * Construct a function intersection that takes in an array of arrays,compares
 * the inner arrays, and returns a new array with elements found in all of them.
 * BONUS: Use reduce!
 */

//use filter to check for common elements when comparing 2 subarrays at a time
//use reduce to further condense the result from filter into 1 array

// function intersection1(arrays) {
//     let result = arrays.pop(); // result is 3rd subarr, removes 3rd subarray from arrays
//     // let newArr = [];
//     // while arrays still has length
//     while (arrays.length) { // while array of arrays still has length
//       let currArr = arrays.pop(); // currArr is 2nd subarr
//       const newArr = [];
//       currArr.filter( (el) => { //filter el in currArr that are included in result array
//       if ( result.includes(el) ) newArr.push(el); // push only included el into newArr
//      }) 
//      result = newArr; //reassign result subarr to newArr
//     }
//    return result;
// }

// function intersection(arrays) {
//   let result = [...arrays[0]]; // make copy of subarr 1
  
//   for(let i = 1; i < arrays.length; i++){
//     let newArr = [];
//     for (let j = 0; j < arrays[i].length; j++)
//       if (result.includes(arrays[i][j])) {
//         newArr.push(arrays[i][j]);
//         // console.log(newArr);
//     };
//     result = newArr;
//   }
//   return result;
//  }

// function intersection (arrOfArrs) {
//     return arrOfArrs.reduce( (accum, curr) => { 
//       return accum.filter(el => curr.includes(el));  
//     }) 
// }

// comparing 2 subarrays, called accum and curr, subarrs 1 and 2
// find only el included in curr subarr (subarr 2)
      // filter el shared in accum subarr 1 and curr subarr 2
      //return out a single resulting array from 1st iter of reduce
      //after 1st iter of reduce, iterate again with reduce, filtering the resulting subarr (from 1st reduce iter) according to elements in next curr subarr 3
      // return out new resulting arr after 2nd iteration of reduce and filtering process
      // do NOT initVal empty array here since that empty array is completely separate of the array auto-created by filter()

function intersection (arrOfArrs) {
    const result = arrOfArrs.reduce( (accum, curr) => {
        return accum.filter(el => curr.includes(el));
    } )
    return result;
}

// const arrays = [ [5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20] ];
// // console.log(intersection(arrays)); // should log: [5, 15]

// console.log(intersection1(arrays));


/**
 * Challenge 8:
 *
 * Construct a function union that takes in an array of arrays, compares the inner arrays,
 * and returns a new array that contains all elements. If there are duplicate elements,
 * only add it once to the new array. Preserve the order of the elements starting from the
 * first element of the first array.
 * BONUS: Use reduce!
 */

// 1. Declare a new array, result, containing all of the elements of subarray 1
// 2. Initialize a nested for loop, starting from the second subarray, 
// 2a. initialize empty array newArray
// 2b. compare each element of "result" using .includes()
// to each element of the subarray
// 3a. If an element isn't detected in "result", push it into newArray. 
// 3b. Otherwise, skip past it and check the next element.
//3c. after each iteration of for loop, resassign result to newArray
// 4. Once all subarrays are checked, return result.

// function union(arrays) {
//   let result = [...arrays[0]];// copy of subarray

//   for (let i = 1; i < arrays.length; i++){
//     let emptArray = [];
//     for (let j = 0; j < arrays[i].length; j++){
//       if (!result.includes(arrays[i][j])){
//         // emptArray.push(arrays[i][j])
//         result.push(arrays[i][j])
//       }
//     }
//    // result += emptArray;
//   }

//   return result
// }

function union (arrOfArrs) {
  return Array.from(new Set(arrOfArrs.flat()));
}

function union1 (arrOfarrs) {
    let newArr = [];   
    const result = arrOfarrs.reduce( (accum, curr) => {
        return accum.concat(curr.filter( (el) => !accum.includes(el) ));
        // Keep what's NOT included in accum subarr in current subarray 
        // concat the filtered current array with accum subarray
    })
    return result;
}

// const nestedArray =[1, [2, 3], [4, [5, 6, [7]]]];
// const x = nestedArray.flat(Infinity);
// const y = [...nestedArray];
// console.log(x);
// console.log(y);

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

// create function to build an object
// init empty obj
// compare cb(el of 1st arr) === el of 2nd array, use for loop with index
// if match, then el from 1st arry becomes key in obj, corr val is el in 2nd arr


function objOfMatches(array1, array2, callback) {
    let obj = {};
    for (let i = 0; i < array1.length; i++) {
       if (callback(array1[i]) === array2[i]) {
           obj[array1[i]] = array2[i];
        }
    }
    return obj;
}

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
 * Construct a function multiMap that will accept 2 arrays: an array of values
 * and an array of callbacks. multiMap will return an object whose keys match the
 * elements in the array of values. The corresponding values that are assigned to
 * the keys will be arrays consisting of outputs from the array of callbacks,
 * where the input to each callback is the key.
 */


// function multiMap (arrayValue, arrayCallback) {
//     let obj = {};
//     for (let n of arrayValue) {
//     obj[n] = arrayCallback.map( (cb) => cb(n) );
//     // console.log(obj);
//     }
//     return obj;
// }

const multiMap = (arrVals, arrCallbacks) => {
  return arrVals.reduce((obj, val) => {
    // for each val use .map on callbacks arr
    // map will return new arr w each el is result of calling callback w val
    // const results = arrCallbacks.map((callback) => callback(val));
    obj[val] = arrCallbacks.map((cb) => cb(val));
    // assign new arr to obj w val as key
    // obj[val] = results;
    //return acc
    return obj;
    // init obj
  }, {});
};


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




//function builds obj
// init empty obj
// have keys as each el in 1st array (array of values)
// assign corr value will be an array consisting of eval result of each cb in arrCallbacks on each value in arrVals

// function multiMap(arrVals, arrCallbacks) {
//     const obj = {};
//     for (const el of arrVals) {
//         let key = el;
//         obj[key] = arrCallbacks.map( (cb) => cb(el));
//     }
//     return obj;
// }


