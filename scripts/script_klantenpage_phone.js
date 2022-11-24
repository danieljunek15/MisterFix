
var phone_input = document.getElementById("phone");

phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Enter phone number!');
  } else {
    phone_input.setCustomValidity('Enter phone number in this format: 06-1234568');
  }
});


var form = document.getElementById("form");
var username = document.getElementById("name");
var city = document.getElementById("city");
var street = document.getElementById("street");
var postal = document.getElementById("postal");
var email = document.getElementById("mail");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    
   const nameValue = name.value
   const cityValue = city.value
   const streetValue = street.value
   const postalValue = postal.value
   const emailValue = email.value
   const passwordValue = password.value
   const password2Value = password2.value
}