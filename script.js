// Get references to the #generate element
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperArray = upperString.split("")
var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("")
var numString = "1234567890"
var numArray = numString.split("")
var specialString = "~!@#$%^&*(+"
var specialArray = specialString.split("")
// Write password to the #password input
function askForOptions() {
  // Array of characters.
  var passLength = parseInt(prompt('How many characters for your password? MIN 8 characters'));
  if (passLength < 8) {
    alert("password greater than eight");
    return;
  }
  if (passLength > 128) {
    alert("password must be less than 128 characters");
    return;
  }
  if (isNaN(passLength) === true) {
    alert("Number value only")
    return;
  }
  var lowerConfirm = window.confirm('lowercase letters? Click ok');
  var upperConfirm = window.confirm('Uppercase letters? Click Ok');
  var numberConfirm = window.confirm('Add numbers from 0-99: Click ok');
  var symbolConfirm = window.confirm('Add special symbols: Click ok');

  var options = {
    passLength,
    lowerConfirm,
    upperConfirm,
    numberConfirm,
    symbolConfirm
  }

  return options;

}

function generatePassword() {
  var passOptions = askForOptions()
  console.log(passOptions)
  var bigArray = [];
  var resultsArray =[];

  if (passOptions.lowerConfirm === true) {
    bigArray = bigArray.concat(lowerArray)
  }
  if (passOptions.upperConfirm === true) {
    bigArray = bigArray.concat(upperArray)
  }
  if (passOptions.numberConfirm === true) {
    bigArray = bigArray.concat(numArray)
  }
  if (passOptions.symbolConfirm === true) {
    bigArray = bigArray.concat(specialArray)
  }



  for (var i = 0; i < passOptions.passLength; i++) {
    var index = Math.floor(Math.random() * bigArray.length);
    var digit = bigArray[index];
    resultsArray.push(digit);
    console.log(resultsArray)
  }
  return resultsArray.join("")
}
function writePassword() {
  var password = generatePassword();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



