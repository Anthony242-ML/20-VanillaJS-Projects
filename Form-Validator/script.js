const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Functions
// error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error failure';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
}

// check valid email
function isValidEmail(email){
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
    
}

// Check Required fields
function checkRequired(inputArr) {
inputArr.forEach(function(input) {
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }

});
}

// GET FIELD NAME
// This function capitalizes the first letter of each id that displays in the error message
 function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }


// Event Listeners
form.addEventListener('submit', function(e) {
 e.preventDefault();

checkRequired([username, email, password, password2]);

});