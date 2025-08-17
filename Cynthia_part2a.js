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
const bitcoinData = require("./fcny-unit-8-callbacks/bitcoinData");

/**
 * Challenge 1:
 *
 * Log the bitcoinData object to investigate the structure of our data.
 * What is the data type of bitcoinData?
 * Let’s say we just want to look at bitcoin information on May 1st, 2013. How can we do that?
 */

// console.log(typeof bitcoinData);

const date = "2013-05-01";

const filteredEvent = bitcoinData.find((event) => {
  return event.date === date;
});

// console.log(filteredEvent);

/**
 * Challenge 2:
 *
 * Use the built-in map method to create an array containing only the date and price of each day.
 */
// const dAp = bitcoinData.map((v) => {
//   return {
//     date: v.date,
//     price: v["price(USD)"],
//   };
// });

const sales = bitcoinData.map((sale) => ({
  date: sale.date,
  price: sale["price(USD)"],
}));

// console.log(sales);
/**
 * Challenge 3:
 *
 * Create an array that only includes days when exchange volume was not 0.
 * Which method should we use?
 */

const zeroEx = bitcoinData.filter((day) => day["exchangeVolume(USD)"] !== 0);

// console.log(zeroEx);

/**
 * Challenge 4:
 *
 *
 * Calculate how many new Bitcoins were generated altogether during the time
 * provided in the dataset using reduce.
 */
// total = the running total
// v = curr obj in the array being prcoessed & looping under the hood ; therefore curr is constantly updated
const gen = bitcoinData.reduce((total, v) => {
  return total + v.generatedCoins;
}, 0);

// console.log(gen);

/**
 * Challenge 5:
 *
 * Find the total number of days when the bitcoin price was over $100 by
 * combining some array methods.
 */

const daysOver100 = bitcoinData.filter((day) => day["price(USD)"] > 100).length;

// console.log(daysOver100);

/**
 * Challenge 6:
 *
 * Find the average bitcoin transaction fees between 2013 and 2015.
 * Be sure to floor this value.
 */

const avg = bitcoinData.reduce((total, v) => total + v.fees, 0);
const avgFloor = Math.floor(avg / bitcoinData.length);

// console.log(`The floored values for average fees are: ${avgFloor}`);

const startDate = new Date("2013-01-01");
const endDate = new Date("2015-12-31");

const txInRange = bitcoinData.filter((transaction) => {
  const txDate = new Date(transaction.date);
  return txDate >= startDate && txDate <= endDate;
});

const totalFees = txInRange.reduce((sum, tx) => {
  return sum + tx.fees;
}, 0);

const averageFee = Math.floor(totalFees / txInRange.length);

// console.log(txInRange);
// console.log(totalFees);
// console.log(averageFee.toFixed(2));

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
function dayMapper(arr, prop1, prop2) {
  return arr.map((item) => {
    const result = {};
    if (item[prop1] !== undefined) {
      result[prop1] = item[prop1];
    }
    if (item[prop2] !== undefined) {
      result[prop2] = item[prop2];
    }
    return result;
  });
}
// console.log(dayMapper(bitcoinData, "nothing", "txCount"));

/**
 * Challenge 8:
 *
 * For each property that has numeric values in bitcoin data, write a function
 * that takes in an 'arr' (bitcoinData in this case) and a property 'name' and
 * returns the property's average value in the array.
 */

// function valueType(item,prop) {
//   if (typeof item[prop] === 'number' && Number.isFinite(item[prop]))
// }

function property(item, prop) {
  if (item[prop] !== undefined) {
    return item[prop];
  }
  return undefined;
}

function averageOf(arr, prop) {
  let sum = 0;
  let counter = 0;
  for (const item of arr) {
    const p = property(item, prop);
    if (typeof p === "number" && Number.isFinite(p)) {
      sum += p;
      counter++;
    }
  }
  return sum / counter;
}

const avgPropValue = (arr, propName) => {
  const valid = arr
    // .map((day) => {
    //   const value = day[propName];
    //   const parsedVal = parseFloat(value);
    //   return isNaN(parsedVal) ? null : parsedVal;
    // })
    // .filter((value) => value !== null);
    // filter out objs were prop is not a number
    .filter((day) => typeof day[propName] === "number")
    .map((day) => day[propName]);

  if (valid.length === 0) {
    return null;
  }

  const totalSum = valid.reduce((sum, value) => sum + value, 0);

  return totalSum / valid.length;
};

// console.log(avgPropValue(bitcoinData, "price(USD)"));
// console.log(averageOf(bitcoinData, "price(USD)"));

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

const prices = bitcoinData.map((data) => data["price(USD)"]);

const priceRangeTally = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Error: Invalid array");
    return;
  }

  let minPrice = Infinity;
  let maxPrice = -Infinity;

  arr.forEach((day) => {
    if (typeof day["price(USD)"] === "number") {
      minPrice = Math.min(minPrice, day["price(USD)"]);
      maxPrice = Math.max(maxPrice, day["price(USD)"]);
    }
  });

  if (minPrice === Infinity || maxPrice === -Infinity) {
    console.log("no valid prices found");
    return;
  }

  const int = 1000;

  const tally = {};

  //populate tally obj

  arr.forEach((day) => {
    if (typeof day["price(USD)"] === "number") {
      const rangeStart = Math.floor(day["price(USD)"] / int) * int;

      const rangeKey = `${rangeStart} - ${rangeStart + int - 1}`;

      tally[rangeKey] = (tally[rangeKey] || 0) + 1;
    }
  });

  console.log(`Min Price: ${minPrice}`);
  console.log(`Max Price: ${maxPrice}`);
  console.log("-------------------------------");

  for (const range in tally) {
    console.log(`${range}  | Days: ${tally[range]}`);
  }
};

priceRangeTally(bitcoinData);

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
