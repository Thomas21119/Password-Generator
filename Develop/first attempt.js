// Slider value on page load
var slider = document.getElementById("range");
var output = document.getElementById("showNumber")
output.innerHTML = slider.value; 

//Slider value on input change
slider.oninput = function () {
  output.innerHTML = this.value;
}

//password Criteria
//all checked
function allChecked(length) {
  var result = "";
  var allCheckedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var allCheckedCharactersLength = allCheckedCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allCheckedCharacters.charAt(Math.floor(Math.random() * allCheckedCharactersLength));
  }
  return result;
}

//3 checked
function allButSpecial(length) {
  var result = "";
  var allButSpecialCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var allButSpecialCharactersLength = allButSpecialCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allButSpecialCharacters.charAt(Math.floor(Math.random() * allButSpecialCharactersLength));
  }
  return result;
}

function allButNumbers(length) {
  var result = "";
  var allButNumbersCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var allButNumbersCharactersLength = allButNumbersCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allButNumbersCharacters.charAt(Math.floor(Math.random() * allButNumbersCharactersLength));
  }
  return result;
}

function allButUpperCase(length) {
  var result = "";
  var allButUpperCaseCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var allButUpperCaseCharactersLength = allButUpperCaseCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allButUpperCaseCharacters.charAt(Math.floor(Math.random() * allButUpperCaseCharactersLength));
  }
  return result;
}

function allButeLowerCase(length) {
  var result = "";
  var allButeLowerCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var allButeLowerCaseCharactersLength = allButeLowerCaseCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allButeLowerCaseCharacters.charAt(Math.floor(Math.random() * allButeLowerCaseCharactersLength));
  }
  return result;
}

//2 checked
function lowerUpper(length) {
  var result = "";
  var lowerUpperCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerUpperCharactersLength = lowerUpperCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += lowerUpperCharacters.charAt(Math.floor(Math.random() * lowerUpperCharactersLength));
  }
  return result;
}

function lowerSpecial(length) {
  var result = "";
  var lowerSpecialCharacters = "abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var lowerSpecialCharactersLength = lowerSpecialCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += lowerSpecialCharacters.charAt(Math.floor(Math.random() * lowerSpecialCharactersLength));
  }
  return result;
}

function lowerNumbers(length) {
  var result = "";
  var lowerNumbersCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var lowerNumbersCharactersLength = lowerNumbersCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += lowerNumbersCharacters.charAt(Math.floor(Math.random() * lowerNumbersCharactersLength));
  }
  return result;
}

function upperSpecial(length) {
  var result = "";
  var upperSpecialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var upperSpecialCharactersLength = upperSpecialCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += upperSpecialCharacters.charAt(Math.floor(Math.random() * upperSpecialCharactersLength));
  }
  return result;
}

function upperNumbers(length) {
  var result = "";
  var allCheckedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var allCheckedCharactersLength = allCheckedCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += allCheckedCharacters.charAt(Math.floor(Math.random() * allCheckedCharactersLength));
  }
  return result;
}

function numbersSpecial(length) {
  var result = "";
  var numbersSpecialCharacters = "0123456789 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var numbersSpecialCharactersLength = numbersSpecialCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += numbersSpecialCharacters.charAt(Math.floor(Math.random() * numbersSpecialCharactersLength));
  }
  return result;
}

//1 checked
function lowerCase(length) {
  var result = "";
  var lowerCaseCharacters = ['abcdefghijklmnopqrstuvwxyz'];
  var lowerCaseCharactersLength = lowerCaseCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += lowerCaseCharacters.charAt(Math.floor(Math.random() * lowerCaseCharactersLength));
  }
  return result;
}

function upperCase(length) {
  var result = "";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseCharactersLength = upperCaseCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += upperCaseCharacters.charAt(Math.floor(Math.random() * upperCaseCharactersLength));
  }
  return result;
}

console.log(upperCase(5))

function numbers(length) {
  var result = "";
  var numbersCharacters = "0123456789";
  var numbersCharactersLength = numbersCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += numbersCharacters.charAt(Math.floor(Math.random() * numbersCharactersLength));
  }
  return result;
}

console.log(numbers(5))

function special(length) {
  var result = "";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\u0022";
  var specialCharactersLength = specialCharacters.length;
  for ( var i = 0; i < length; i++ ) {
    result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
  }
  return result;
}

console.log(special(5))


// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.getElementById("password");
// Write password to the #password input
function generatePassword() {
  generateBtn.addEventListener("click", generatePassword);
  
  //allchecked
  if ((document.getElementById("lowerCase").checked) && (document.getElementById("upperCase").checked) && (document.getElementById("numbers").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (allChecked(slider.value))
    //3 checked
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("upperCase").checked) && (document.getElementById("numbers").checked)) {
    textArea.value = (allButSpecial(slider.value))
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("upperCase").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (allButNumbers(slider.value))
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("numbers").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (allButUpperCase(slider.value))
  } else if ((document.getElementById("upperCase").checked) && (document.getElementById("numbers").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (allButeLowerCase(slider.value))
    //2 checked
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("upperCase").checked)) {
    textArea.value = (lowerUpper(slider.value))
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (lowerSpecial(slider.value))
  } else if ((document.getElementById("lowerCase").checked) && (document.getElementById("numbers").checked)) {
    textArea.value = (lowerNumbers(slider.value)) 
  } else if ((document.getElementById("upperCase").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (upperSpecial(slider.value)) 
  } else if ((document.getElementById("upperCase").checked) && (document.getElementById("numbers").checked)) {
    textArea.value = (upperNumbers(slider.value)) 
  } else if ((document.getElementById("numbers").checked) && (document.getElementById("specialCharacters").checked)) {
    textArea.value = (numbersSpecial(slider.value)) 
    //1 checked
  } else if (document.getElementById("lowerCase").checked) {
    textArea.value = (lowerCase(slider.value))
  } else if (document.getElementById("upperCase").checked) {
    textArea.value = (upperCase(slider.value)) 
  } else if (document.getElementById("numbers").checked) {
    textArea.value = (numbers(slider.value)) 
  } else if (document.getElementById("specialCharacters").checked) {
    textArea.value = (special(slider.value)) 

  } else { 
    textArea.value = ("you must select one criteria")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

var passwordText = document.querySelector("#password");