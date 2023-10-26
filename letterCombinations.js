const phoneKeypadMapping = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

function letterCombinations(digits, output = '') {
  // If the array of digits is empty, return the output string.
  if (digits.length === 0 || digits.length > 4 || digits.includes(0) || digits.includes(1)) {
      return [output];
  }
  // Get the first number from the input received as a parameter.
  const firstDigit = digits[0];

  // Get the letters corresponding to the first digit from the input string received as a parameter.
  const letters = phoneKeypadMapping[firstDigit];

  // Create a new array of digits without the first digit. In each recursive iteration, the letters decrease until the end of the loop.
  const remainingDigits = digits.slice(1);
  
  // Create an empty array to store the remaining letter combinations. In each iteration, the array is filled with different combinations.
  const remainingCombinations = [];

  // Iterate over the letters of the first digit passed as a parameter.
  for (const letter of letters) {
      // Call the function recursively with the remaining letters and the current output string plus the current letter.
      // When passing remainingDigits as an empty string at the end of the iteration, it returns output as in the first 'if' statement,
      // and that's when it is stored in 'remainingDigits.'
      const newCombinations = letterCombinations(remainingDigits, output + letter);

      // Add the new combinations to the array of remaining combinations.
      remainingCombinations.push(...newCombinations);
  }

  // Return the array of remaining combinations.
  return remainingCombinations;
}

module.exports = letterCombinations;
