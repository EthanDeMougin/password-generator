// Assignment code here
function generatePassword() {
  var specialCharacters = ['@', '%',  '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',' ,')' ,'(' ,'}' ,'{' ,']' ,'[' ,'~' ,'-' ,'_' ,'.'];
  var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var selectedArray = [];
  var passwordLength = getPasswordLength();

  var charTypeSelected = false;
    while (charTypeSelected == false) {
      var specialCharacters = getChoice("specialCharacters");
      var numericalCharacters = getChoice("numericalCharacters");
      var upperCaseCharacters = getChoice("upperCaseCharacters");
      var lowerCaseCharacters = getChoice("lowerCaseCharacters");

      if ( (specialCharacters) || (numericalCharacters) || (upperCaseCharacters) || (lowerCaseCharacters) ) {
        charTypeSelected = true;
      
      } else {
        window.alert("You have to select at least one of the character types!")
      }
    }
    if (specialCharacters) {
      selectedArray = selectedArray.concat(specialSet);
    }
    if (numericalCharacters) {
      selectedArray = selectedArray.concat(numSet);
    }
    if (lowerCase) {
      selectedArray = selectedArray.concat(lowerCaseSet);
    }
    if (upperCase) {
      selectedArray = selectedArray.concat(upperCaseSet);
    }

    var passwordString = "";
    for(var i = 0; i < passwordLength; i++) {
      passwordString += selectedArray[Math.floor(Math.random()=(selectedArray.length))] ;
    }
    return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
