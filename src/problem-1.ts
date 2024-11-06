// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

type SumTypes = number[];

// solution - 1

function sumArray(nums: SumTypes): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // console.log(sum);

  return sum;
}
sumArray([1, 3, 2, 5, 6, 7,6]);





//============================
//        solution -2
//============================


/* function sumArray(nums: SumTypes): number {
 
  let sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
}

sumArray([1, 3, 2, 5, 6, 7]);
*/
