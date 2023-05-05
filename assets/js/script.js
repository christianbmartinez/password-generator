// Assignment Code

// Special characters
const specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+',
  '=',
  '_',
  '{',
  '}',
  '<',
  '>',
  '/',
  '[',
  ']',
]

// Number Characters
const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Lowercase Characters
const lowerCaseCharacters = [
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
  'z',
]

// Uppercase characters
const upperCaseCharacters = [
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
  'Z',
]

const generateBtn = document.getElementById('generate')
let userInput
let passwordLength = false
let password = []
let passwordArray = []
let lowerCase
let upperCase
let numChars
let specialChars
let generatedPassword

// An object that holds the functions to our app
const app = {
  // Get all the functions for the user prompt flow
  launch() {
    return (
      this.getPasswordLength(),
      this.checkPasswordLength(),
      this.getUserPrompts(),
      this.checkUserCharacters(),
      this.createPassword()
    )
  },
  // Get the password length
  getPasswordLength() {
    if (!passwordLength) {
      userInput = prompt('How long do you want your password to be?')
    }
    if (userInput < 8 || userInput > 128) {
      alert(
        `Your password length must be between 8 and 128 characters long, but you chose ${userInput}. Try again!`
      )
      location.reload()
    }
    if (isNaN(userInput)) {
      alert(`${userInput} is not a number. Please try again using a number!`)
      location.reload()
    }
    return userInput
  },
  // Check the password length
  checkPasswordLength() {
    if (!userInput) {
      alert('Please enter a number between 8 and 128')
      location.reload()
      password.length = 0
    }
  },
  // Get the user prompts
  getUserPrompts() {
    lowerCase = prompt(
      'Do you want to add lowercase characters to your password?'
    )
    if ((lowerCase = 'Yes' || 'yes')) {
      password.push(lowerCaseCharacters)
    }
    upperCase = prompt(
      'Do you want to add uppercase characters to your password?'
    )
    if ((upperCase = 'Yes' || 'yes')) {
      password.push(upperCaseCharacters)
    }
    numChars = prompt('Do you want to add numbers to your password?')
    if ((numChars = 'Yes' || 'yes')) {
      password.push(numberCharacters)
    }
    specialChars = prompt(
      'Do you want to add special characters to your password?'
    )
    if ((specialChars = 'Yes' || 'yes')) {
      password.push(specialCharacters)
    }
    passwordArray = password.flat()
    return passwordArray
  },
  // Check the user characters
  checkUserCharacters() {
    if (passwordArray.length == 0) {
      alert('You password needs at least one type of character. Try again')
      password.length = 0
      location.reload()
    }
  },
  // Create password
  createPassword() {
    let password = ''
    for (let i = 0; i < userInput; i++) {
      let randomIndex = Math.floor(Math.random() * passwordArray.length)
      let randomChar = passwordArray[randomIndex]
      generatedPassword = password += randomChar
    }
    return generatedPassword
  },
}

// Write password to the #password input
const writePassword = () => {
  app.launch()
  document.querySelector('#password').innerHTML = generatedPassword
}

// Add an event listener to the generate button
generateBtn.onclick = () => {
  writePassword()
}
