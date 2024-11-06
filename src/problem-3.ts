// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(param1: string, param2: string): number {
  let fullSentance = param1.toLowerCase();
  let singleWord = param2.toLowerCase();
  let result = fullSentance.split(singleWord).length - 1;
   // console.log(result);
  return result;
}
countWordOccurrences(
  "TypeScript is great. I love TypeScript! I also write tYpeScripTfull",
  "TYPeScript"
);
