// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(param1: string, param2: string): number {
  let fullSentance = param1.toLowerCase();
  let singleWord = param2.toLowerCase();
  // let result = fullSentance.split(singleWord).length - 1;
  const words = fullSentance.split(/\s+/);
  let count = 0;
  for (const currentWord of words) {
    if (currentWord === singleWord) {
      count++;
    }
  }

  return count;
}
countWordOccurrences(
  "TypeScript is great. I love TypeScript! I also write tYpeScripT",
  "TYPeScript"
);

