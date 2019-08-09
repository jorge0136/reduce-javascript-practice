/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
*/

export const reduceIt = ([head, ...tail], operation, accumulator) => {
  if (head === undefined) return accumulator;
  return reduceIt(tail, operation, operation(accumulator, head));
};
