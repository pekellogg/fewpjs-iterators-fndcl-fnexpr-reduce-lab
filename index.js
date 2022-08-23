const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(function(total, batches) {
//   return batches + total;
//   }
// )

const totalBatteries = batteryBatches.reduce( (previousTotal, indexValue) => previousTotal + indexValue )

// Array.prototype.reduce()
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// ------------------------------------------------------------------------------------------------------
// reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.