// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let userInputPassLength = prompt("What is your required password length");
  while (isNaN(userInputPassLength) || userInputPassLength < 10 || userInputPassLength > 64) {
   return getPasswordOptions();
  }

 
  let isLowerCaseIncluded = confirm("Include lower case letters?");
  let isUpperCaseIncluded = confirm("Include upper case letters?");
  let isNumberIncluded = confirm("Include numbers?");
  let isSpecialCharsIncluded = confirm("Include special charaters?");

  return {
    length: userInputPassLength,
    isLowerCaseIncluded: isLowerCaseIncluded,
    isUpperCaseIncluded: isUpperCaseIncluded,
    isNumberIncluded: isNumberIncluded,
    isSpecialCharsIncluded: isSpecialCharsIncluded,
};


}

console.log(getPasswordOptions());

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandom(specialCharacters));


// Function to generate password with user input
function generatePassword() {

  let passwordOptions = getPasswordOptions();

  let possibleChars = [];

  if (passwordOptions.isLowerCaseIncluded){
    possibleChars = possibleChars.concat(lowerCasedCharacters);
  }
  if (passwordOptions.isUpperCaseIncluded){
    possibleChars = possibleChars.concat(upperCasedCharacters);
  }
  if (passwordOptions.isNumberIncluded){
    possibleChars = possibleChars.concat(numericCharacters);
  }
  if (passwordOptions.isSpecialCharsIncluded){
    possibleChars = possibleChars.concat(specialCharacters);
  }

  console.log(possibleChars);
}

generatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);