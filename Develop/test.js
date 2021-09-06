// Slider value on page load
var slider = document.getElementById("range");
var output = document.getElementById("showNumber")
output.innerHTML = slider.value; 

//Slider value on input change
slider.oninput = function () {
  output.innerHTML = this.value;
}

//password Criteria
var finalPassword = []
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var special = [' ','!','"', '#', '$', '%', '&', '\u0027','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\u005c',']','^','_','`','{','|','}','~']

//link to document checkboxes
var includeLowerCaseElement = document.getElementById('lowerCase')
var includeUpperCaseElement = document.getElementById('upperCase')
var includeNumbersElement = document.getElementById('numbers')
var includeSpecialElement = document.getElementById('special')

//link to button
var generatePasswordEL = document.getElementById('generate')

generatePasswordEL.addEventListener('click', passwordContents)
function passwordContents() {
  var includeLowerCase =  includeLowerCaseElement.checked
  var includeUpperCase = includeUpperCaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSpecial = includeSpecialElement.checked
  generateArray(includeLowerCase, includeUpperCase, includeNumbers, includeSpecial); 
}
function generateArray(includeLowerCase, includeUpperCase, includeNumbers, includeSpecial) {
  // console.log(includeLowerCase, includeUpperCase, includeNumbers, includeSpecial);
  var length = slider.value;
  let combinedArray = [];
//sets content of password based on checkbox
  if (includeLowerCase) combinedArray = combinedArray.concat(lowerCase);
  if (includeUpperCase) combinedArray = combinedArray.concat(upperCase);
  if (includeNumbers)   combinedArray = combinedArray.concat(numbers);
  if (includeSpecial)   combinedArray = combinedArray.concat(special);
  generatePassword(length, combinedArray)
}
function generatePassword(length, combinedArray) {
  var result = "";
  var characters = combinedArray.join("");
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  displayPassword(result)
}
function displayPassword(password) {
  textArea = document.getElementById("password");
  textArea.value = password
}

//guarateedcharacter array that holds boolean
//have at least one character from guarantee dfor each category
// make sure to aacount for length changes