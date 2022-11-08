// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// added a function to prompt the popup box to come up. also used window.prompt
function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?");
console.log(userInput);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
