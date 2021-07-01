// Assignment code here
var generatePassword = function() {
  var pass= "";
  var characters = "";
  var lowerLetters = window.confirm('Would you like to include lowercase characters in your password?');
  if (lowerLetters){
    var characters = characters + "abcdefghijklmnopqrstuvwxyz";
  };
  console.log(characters);
  var capitalLetters = window.confirm('Would you like upppercase characters in your password?');
  if (capitalLetters) {
    var characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  console.log(characters);
  var numbers = window.confirm('Would you like numeric characters in your password?');
  if (numbers) {
    var characters = characters + "0123456789";
  };
  console.log(characters);
  var specialChar = window.confirm('Would you like to have special charaters in your password?');
  if (specialChar) {
    var characters = characters + ";@%+\/'!#$^?:,()[]{}~-_."
  };
  console.log(characters);

  var length = window.prompt("Set password length between '8' and '125' characters");


  
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return pass;
};


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
