// Assignment code here

function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberofCharacters = ['0','1', '2', '3', '4', '5', '6', '7', '8'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '{', '}', '[', ']', '~', '_', '.'];
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//added a function to prompt the popup box to come up using window.prompt
function generatePassword() {
  var userInput = window.prompt("Please select the  length of your password");
console.log(userInput);

// inputed to promopt the next window to enter numerical numbers
numberofCharacters = prompt("Choose between 8-128");
if (numberofCharacters < 8 || numberofCharacters > 128) {
  return "please choose a valid number of characters.";
} else if (isNaN(numberofCharacters)) {
  numberofCharacters = prompt("please enter a valid number")
}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
