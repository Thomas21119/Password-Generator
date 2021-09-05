// Slider value on page load
var slider = document.getElementById("range");
var output = document.getElementById("showNumber")
output.innerHTML = slider.value; 

//Slider value on input change
slider.oninput = function () {
  output.innerHTML = this.value;
}

var form = document.getElementById('form')
//password Criteria
var password = ['testing']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var special = [' ','!','"', '#', '$', '%', '&', 'u0027','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','u005c',']','^','_','`','{','|','}','~']


var includeLowerCaseElement = document.getElementById('lowerCase')
var includeUpperCaseElement = document.getElementById('upperCase')
var includeNumbersElement = document.getElementById('numbers')
var includeSpecialElement = document.getElementById('special')

form.addEventListener('generate', e => {
  e.preventDefault()
  var sliderAmount = slider.value
  var includeLowerCase =  includeLowerCaseElement.checked
  var includeUpperCase = includeUpperCaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSpecial = includeSpecialElement.checked
  var password = generatePassword(sliderAmount, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
})
var writePasswordEL = document.getElementById('generate')
var generatePasswordEL = document.getElementById('generate')

generatePasswordEL.addEventListener('click', passwordContents)
function passwordContents(sliderAmount, includeLowerCase, includeUpperCase, includeNumbers, includeSpecial) {
  if (includeLowerCase) {
  password = password.concat(lowerCase)
  console.log(password)
}
  if (includeUpperCase) {
  password = password.concat(upperCase)
}
  if (includeNumbers) {
  password = password.concat(numbers)
}  
  if (includeSpecial) {
  password = password.concat(special)
}
  console.log(password)
}


