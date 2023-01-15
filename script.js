// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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


  // Create variable to prompt user to input password length
  // Use parseInt property to allow values to be parsed as a number
  let length = parseInt(
    prompt("Input character length of your password.")
  )

  // Create If Statements to set criteria for password to be generated

  // First If Statement to handle input errors by user
  if(isNaN(length) === true){
    alert(`Input must only be a number`);
    return;
  }

  // Second If Statement to handle minimum character length user inputs
  if(length < 10) {
    alert(`ERROR! character length must be at least 10 characters long`);
    return;
  }

  // Third If Statement to handle minimum character length user inputs
  if(length >= 125) {
    alert(`ERROR! character length must be less than 125 characters long`);
    return;
  }

  
  // Create variable to allow user choose to include special characters in password or not
  let hasSpecialCharacters = confirm (
    "Click OK to confirm or CANCEL to decline special characters"
  )

  // Create variable to allow user choose to include numeric characters in password or not
  let hasNumericCharacters = confirm (
    "Click OK to confirm or CANCEL to decline numeric characters"
  )

  // Create variable to allow user choose to include lower cased characters in password or not
  let hasLowerCasedCharacters = confirm (
    "Click OK to confirm or CANCEL to decline lower cased characters"
  )

  // Create variable to allow user choose to include upper cased characters in password or not
  let hasUpperCasedCharacters = confirm (
    "Click OK to confirm or CANCEL to decline upper cased characters"
  )

  // Use Logical Operators to allow user select at least one character type to generate password
  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false){
      alert(`Must select at least one character type`);
      return;
  } 

  // Create keys to handle password options
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  }

  console.log(passwordOptions);

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {

  // Create a random value from the array provided
  let randomValue = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomValue];

  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);

  // Create variable to store result using some JavaScript in-built methods
  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters)) 
  }

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if(options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }


  // Create a For Loop to generate random characters

  for(let i = 0; i < options.length; i++) {
    var generated = getRandom(possibleCharacter);
    console.log(generated);
    result.push(generated);
  }

  console.log(result);

  return result.join("")

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




