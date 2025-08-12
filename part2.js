/**
 * Let's use higher order functions like map, filter, and reduce to gather information
 * and manipulate some data. Here we are importing historical Bitcoin data from 2013 to 2015.
 * Each object contains information like price, market cap, fees, and much more.
 * Let’s see what information we can extract using higher order functions!
 *
 * First, let's import the data. bitcoinData is initialized in the file bitcoinData.js -
 * you can open the file and check it out!
 * After importing it, we can work with bitcoinData just as if we had created it in this file.
 *
 * Don't forget to test your code as you go using console-logs.
 */
const bitcoinData = require('./bitcoinData');

/**
 * Challenge 1:
 *
 * Log the bitcoinData object to investigate the structure of our data.
 * What is the data type of bitcoinData?
 * Let’s say we just want to look at bitcoin information on May 1st, 2013. How can we do that?
 */

/**
 * Challenge 2:
 *
 * Use the built-in map method to create an array containing only the date and price of each day.
 */

/**
 * Challenge 3:
 *
 * Create an array that only includes days when exchange volume was not 0.
 * Which method should we use?
 */

/**
 * Challenge 4:
 *
 * Calculate how many new Bitcoins were generated altogether during the time
 * provided in the dataset using reduce.
 */

/**
 * Challenge 5:
 *
 * Find the total number of days when the bitcoin price was over $100 by
 * combining some array methods.
 */

/**
 * Challenge 6:
 *
 * Find the average bitcoin transaction fees between 2013 and 2015.
 * Be sure to floor this value.
 */

/**
 * Challenge 7:
 *
 * Write a function called dayMapper that accepts three parameters:
 * arr (bitcoinData), property1, property2.
 * It should use map to return a new array of objects with only the passed-in
 * properties on each object.
 * If the passed-in properties are not present in arr's objects, they should be
 * ignored in the returned array.
 */

/**
 * Challenge 8:
 *
 * For each property that has numeric values in bitcoin data, write a function
 * that takes in an 'arr' (bitcoinData in this case) and a property 'name' and
 * returns the property's average value in the array.
 */

/**
 * Challenge 9:
 *
 * Write a function called generalAverageValue that takes two parameters: arr and property.
 * The function should check to ensure that the property's values are numeric. If they aren't,
 * it should return an error message. Otherwise, it should return an array
 * of the form [property, avgValue].
 */

/**
 * Challenge 10:
 *
 * Write a function called priceRangeTally which accepts one argument, arr.
 * The function should:
 * - Find the maximum bitcoin price
 * - Find the minimum bitcoin price
 * - Choose an arbitrary interval to create ranges (either dynamically or hard-coded)
 * - Tally how many days of bitcoin prices fall into each range
 * - Console.log a nicely formatted string of each interval and how many days fall into each interval.
 * The function doesn't have to return anything, but it can return a tally object or array if desired.
 */

/**
 * Challenge 11:
 *
 * Write a function that will accept an array (bitcoinData) as a parameter and return an object
 * with keys that are the names of all the numerical properties of the bitcoinData objects,
 * and whose values are the max values of those properties.
 */

/**
 * Challenge 12:
 *
 * Do the same as Challenge 11, but for minimum values.
 */

/**
 * Challenge 13:
 *
 * Write a function valueRanges that will accept an array (bitcoinData) and return an object
 * with keys that are the names of all the numerical properties of the bitcoinData objects.
 * The values for each key should be their ranges for any object in the input array '<min> to <max>'.
 *
 * HINT: You can use the minValues and maxValues functions you wrote earlier.
 */
