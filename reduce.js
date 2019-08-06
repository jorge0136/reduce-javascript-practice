/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
*/

export const reduceIt = (array, operation, initialValue) => {
  let accumulatedValue = initialValue;
  for(let i = 0; i < array.length; i++) {
    accumulatedValue = operation(accumulatedValue, array[i]);
  }
  return accumulatedValue;
};
