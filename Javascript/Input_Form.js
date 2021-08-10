//UC1:-User Need to enter a valid name First
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let namRegex = new RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (namRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});
//UC2:-User need to Enter valid Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let pattern = RegExp('^[A-Z a-z]{1,}([+-_.]*)[A-Z a-z 0-9 _+-.]*[@]{1}[A-Z a-z 0-9 +_-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$');
    if (pattern.test(email.value))
        emailError.textContent = '';
    else
        emailError.textContent = "Email is Incorrect";
});
//UC3:-User Need to follow Pre-defined Mobile format
const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function () 
{
    let telRegex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
    //Checking number is valid or not using if else condition
    if (telRegex.test(tel.value)) 
        telError.textContent = "";
    else 
        telError.textContent = "telephone number is not Valid";
    
});
//UC4:-Rule1:-Password Minimum 8 Character
//UC5:-Password Rule2:-atleast one upper case, Rule3:-atleast one numeric Password, Rule4:-atleast one Special character 
const pwd = document.querySelector('#pwd');
const passworderror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let passwordpattern = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[-+_!@#$%^&*.,?{}()<>])[A-Za-z0-9-+_!@#$%^&*.,?]{8,}$');
    if (passwordpattern.test(pwd.value))
        passworderror.textContent = ' ';
    else
        passworderror.textContent = 'Password is Incorrect!';
});
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
