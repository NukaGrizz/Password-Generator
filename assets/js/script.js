// Assignment code here
var pass= "";
var characters = "";
var charactersLength = "";
var length = "";
var lowerLetters = "";
var capitalLetters = "";
var numbers = "";
var specialChar = "";

var reset = function(){
  pass= "";
  characters = "";
  charactersLength = "";
  length = "";
  lowerLetters = "";
  capitalLetters = "";
  numbers = "";
  specialChar = "";
};

var passLength = function() {
  length = window.prompt("Set password length between '8' and '128' characters");
  if (length < 8 || length > 128) {
    window.alert("password length must be between '8' and '128' charracters")
    passLength();
  };

  charactersLength = characters.length;
};

var loop = function() {
  for ( var i = 0; i < length; i++ ) {
  pass += characters.charAt(Math.floor(Math.random() * charactersLength));
  };
  console.log(pass);
  
  if (specialChar) {
    var checkSpec = /[^A-Za-z0-9]/;
    var specCheck = checkSpec.test(pass);
    console.log(specCheck);
    if(specCheck){  
    } else {
        pass = "";
        loop();
    };
  };

  if(numbers) {
    var checkNum = /[0-9]/;
    var numCheck = checkNum.test(pass);
    console.log(numCheck);
    if(numCheck){
    } else {
      pass = "";
      loop();
    };
  };

  if(capitalLetters) {
    var checkCap = /[A-Z]/;
    var capCheck = checkCap.test(pass);
    console.log(capCheck);    
    if(capCheck){
    } else {
      pass = "";
      loop();
    };
  };

  if(lowerLetters) {
    var checkLow = /[a-z]/;
    var lowCheck = checkLow.test(pass);
    console.log(lowCheck);      
    if(lowCheck){
    } else {
      pass = "";
      loop();
    };   
  };
};

var generatePassword = function() {

  lowerLetters = window.confirm('Would you like to include lowercase characters in your password?');
  if (lowerLetters){
    characters = characters + "abcdefghijklmnopqrstuvwxyz";
  };
  console.log(characters);
  
  capitalLetters = window.confirm('Would you like upppercase characters in your password?');
  if (capitalLetters) {
    characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  console.log(characters);

  numbers = window.confirm('Would you like numeric characters in your password?');
  if (numbers) {
    characters = characters + "0123456789";
  };
  console.log(characters);

  specialChar = window.confirm('Would you like to have special charaters in your password?');
  if (specialChar) {
    characters = characters + "!@#$%^&*()_+-\\{};':\\,.\/?"
  };
  console.log(characters);

  passLength();

  loop();

  return pass;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  reset();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
