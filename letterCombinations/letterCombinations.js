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
  // Validate the input.
  if (digits.length === 0 || digits.length > 4 || digits.includes(0) || digits.includes(1)) {
      return [output];
  }
  // Get the first digit.
  const firstDigit = digits[0];

  // Get the letters associated with the first digit.
  const letters = phoneKeypadMapping[firstDigit];

   // Get the remaining digits.
  const remainingDigits = digits.slice(1);
  
  // Create an empty list to store the remaining combinations.
  const remainingCombinations = [];

  // Iterate over the letters associated with the first digit.
  for (const letter of letters) {
      // Recursively call the function with the remaining digits and the current output string plus the current letter.
      // When passing an empty string as the remaining digits, the function returns the output string, just like the first if statement.
      // This is how the output strings are stored in remainingCombinations.
      const newCombinations = letterCombinations(remainingDigits, output + letter);

      // Add the new combinations to the array of remaining combinations.
      remainingCombinations.push(...newCombinations);
  }

  // Return the array of remaining combinations.
  return remainingCombinations;
}

module.exports = letterCombinations;
