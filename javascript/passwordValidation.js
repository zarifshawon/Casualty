
var password = document.getElementById("password-verify")
  , confirm_password = document.getElementById("password-verify2");

function passwordValidation(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
