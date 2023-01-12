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
  //Ask the user for password length
  let userInputPassLength = prompt("What is your required password length");

  // run the function again if the user's input is not a number or if it is but less than 10 or greeater than 64
  while (isNaN(userInputPassLength) || userInputPassLength < 10 || userInputPassLength > 64) {
   return getPasswordOptions();
  }

  let isLowerCaseIncluded = confirm("Include lower case letters?");
  let isUpperCaseIncluded = confirm("Include upper case letters?");
  let isNumberIncluded = confirm("Include numbers?");
  let isSpecialCharsIncluded = confirm("Include special charaters?");

  //run the function again if the user does not select any character option

  if (!isLowerCaseIncluded && !isUpperCaseIncluded && !isNumberIncluded && !isSpecialCharsIncluded){
    return getPasswordOptions();
  }


  return {
    userInputPassLength: userInputPassLength,
    isLowerCaseIncluded: isLowerCaseIncluded,
    isUpperCaseIncluded: isUpperCaseIncluded,
    isNumberIncluded: isNumberIncluded,
    isSpecialCharsIncluded: isSpecialCharsIncluded,
  };
}

// Function for getting a random element from an array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// console.log(getRandom(specialCharacters));


// Function to generate password with user input
function generatePassword() {

  // store the returned object froom the generatePassword() 
  let passwordOptions = getPasswordOptions();


  //an empty array to store the selected character arrays
  let selectedCharsArr = [];

  // check the user's character selection and concatenate correspondingly
  if (passwordOptions.isLowerCaseIncluded){
    selectedCharsArr = selectedCharsArr.concat(lowerCasedCharacters);
  }
  if (passwordOptions.isUpperCaseIncluded){
    selectedCharsArr = selectedCharsArr.concat(upperCasedCharacters);
  }
  if (passwordOptions.isNumberIncluded){
    selectedCharsArr = selectedCharsArr.concat(numericCharacters);
  }
  if (passwordOptions.isSpecialCharsIncluded){
    selectedCharsArr = selectedCharsArr.concat(specialCharacters);
  }


  // a variable to store the password 
  let password = '';
  
  
  for (let i = 0; i < passwordOptions.userInputPassLength; i++) {
    const passwordCharater = getRandom(selectedCharsArr);
    password += passwordCharater;
  }

  return password;
}

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