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
function isValidEmail(Email){
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(Email).toLowerCase())
    
}



// Event Listeners
form.addEventListener('submit', function(e) {
 e.preventDefault();

if(username.value === '') {
    showError(username,'Username is required');
}else{
    showSuccess(username);
} 

if(Email.value === '') {
    showError(Email,'email is required');
} else if (!isValidEmail(Email.value)) {
    showError(Email,'email is not valid');
}
else{
    showSuccess(Email);
}  

if(Password.value === '') {
    showError(Password,'Password is required');
}else{
    showSuccess(Password);
}

if(password2.value === '') {
    showError(password2,'password2 is required');
}else{
    showSuccess(password2);
}

});