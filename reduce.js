/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
*/

export const reduceIt = (array, operation, initialValue) => {
  let accumulatedValue = initialValue;
  array.map((item) => { accumulatedValue = operation(accumulatedValue, item) });
  return accumulatedValue;
};
