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

  // Create a While Loop to handle wrong inputs by user
  let length = 0;

  while (length < 10 || length > 65 || isNaN(length)) {
    const response  = prompt("Enter length of password between 10-65");
    if (response == null) {
      break;
    }

    length = parseInt(response);
  

    // This section features If Statements to set criteria for password to be generated

    // 1. If Statement to handle user inputs not numeric
    if(isNaN(length) === true){
      alert(`Input must be a number`);
      
    }

    // 2. If Statement to handle minimum character length user inputs to generate password
    if(length < 10) {
      alert(`Error: character length must be ateast 10 characters long`);
      
    }

    // 3. If Statement to handle maximum character length user inputs to generate password
    if(length > 65) {
      alert(`Error: character length must be atmost 65 characters long`);
    
    }

  }

  // This section handles user's password preferences

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

  // This section ensures that user selects at least one character type to generate password

  // Use Logical Operators to allow user select at least one character type to generate password
  // 
  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false){
      alert(`Error: Must select at least one character type`);
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