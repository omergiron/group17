const signIcon = document.getElementById("popUpBtn");
const siBtn = document.getElementById("siBtn");
const jBtn = document.getElementById("jBtn");
const exitBtn = document.getElementById("exit");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const logoutBtn = document.getElementById("logout");

exitBtn.addEventListener('click', hideForms);
siBtn.addEventListener('click', showSignInForm);
jBtn.addEventListener('click', showSignUpForm);
signInBtn.addEventListener('click', hideForms);
signUpBtn.addEventListener('click', hideForms);
signIcon.addEventListener('click', signPopUp);
logoutBtn.addEventListener('click', logout);

const personalPopUp = document.querySelector("#personalPopUp")
const SignUpForm = document.querySelector("#signUpForm")
const SignInForm = document.querySelector("#signInForm")
const FirstNameInput = document.querySelector("#FirstName")
const LastNameInput = document.querySelector("#LastName")
const EmailInput = document.querySelector("#email")
const PasswordInput = document.querySelector("#Password")
const PhoneNumInput = document.querySelector("#PhoneNum")
const msg = document.getElementById("msg")
const popUp = document.querySelector(".formContainer");
const topBtn = document.querySelector(".topBtn");

function signPopUp() {
  if (document.getElementById("logged_in").textContent == "True") {
    popUp.style.display = 'flex';
    SignUpForm.style.display = 'none';
    SignInForm.style.display = 'none';
    personalPopUp.style.display = 'flex';
    topBtn.style.display = 'none';
  }
  else {
    popUp.style.display = 'flex';
    document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 1)';
    document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 0)';
    SignInForm.style.display = 'flex';
    SignUpForm.style.display = 'none';
    personalPopUp.style.display = 'none';
    topBtn.style.display = 'flex';
  }
}

function showSignInForm(){
  document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 1)';
  document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 0)';
  document.getElementById("signInForm").style.display = 'flex';
  SignUpForm.style.display = 'none';
}

function showSignUpForm(){
  document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 1)';
  document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 0)';
  SignUpForm.style.display = 'flex';
  document.getElementById("signInForm").style.display = 'none';
}

function hideForms() {
  document.querySelector(".formContainer").style.display = 'none';
}


const OnSubmit = (e) => {
  if (/[0-9]/.test(FirstNameInput.value) || /[0-9]/.test(LastNameInput.value)) {
    e.preventDefault();
    msg.innerHTML = 'A name cannot contain numbers';
    popUp.style.display = 'flex';
    SignUpForm.style.display = 'flex';
    SignInForm.style.display = 'none';
  }
  else if (!EmailInput.value.includes("@")) {
    e.preventDefault();
    msg.innerHTML = 'Invalid Email';
    popUp.style.display = 'flex';
    SignUpForm.style.display = 'flex';
    SignInForm.style.display = 'none';
  }
  else if (!/[A-Z]/.test(PasswordInput.value) || PasswordInput.value.length < 8) {
    e.preventDefault();
    msg.innerHTML= 'The Password must contain at least one capital letter and contain at least 8 characters';
    popUp.style.display = 'flex';
    SignUpForm.style.display = 'flex';
    SignInForm.style.display = 'none';
  }
  else if (PhoneNumInput.value.charAt(0) != '0' || PhoneNumInput.value.length != 10 || isNaN(Number(PhoneNumInput.value))) {
    e.preventDefault();
    msg.innerHTML = 'Invalid Phone Number';
    popUp.style.display = 'flex';
    SignUpForm.style.display = 'flex';
    SignInForm.style.display = 'none';
  }
};


SignUpForm.addEventListener('submit',OnSubmit)

if (document.getElementById("errorSI").textContent != ""){
  popUp.style.display = 'flex';
}
if (document.getElementById("errorSU").textContent != ""){
  popUp.style.display = 'flex';
  SignUpForm.style.display = 'flex';
  SignInForm.style.display = 'none';
}

