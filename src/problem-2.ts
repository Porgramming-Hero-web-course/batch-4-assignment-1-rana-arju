// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

type DuplicateCheck = number[];

function removeDuplicates(nums: DuplicateCheck): DuplicateCheck {
  return [...new Set(nums)];
}
removeDuplicates([12, 234, 54, 65, 73, 74, 74, 23, 23,54, 234]);


