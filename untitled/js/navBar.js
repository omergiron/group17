const signIcon = document.getElementById("popUpBtn");
const siBtn = document.getElementById("siBtn");
const jBtn = document.getElementById("jBtn");
const exitBtn = document.getElementById("exit");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

exitBtn.addEventListener('click', hideForms);
signIcon.addEventListener('click', signPopUp);
siBtn.addEventListener('click', showSignInForm);
jBtn.addEventListener('click', showSignUpForm);
signInBtn.addEventListener('click', hideForms);
signUpBtn.addEventListener('click', hideForms);

function signPopUp() {
  const popUp = document.querySelector(".formContainer");
  popUp.style.display = 'flex';
  document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 1)';
  document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 0)';
  document.getElementById("signInForm").style.display = 'flex';
  document.getElementById("signUpForm").style.display = 'none';
}

function showSignInForm(){
  document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 1)';
  document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 0)';
  document.getElementById("signInForm").style.display = 'flex';
  document.getElementById("signUpForm").style.display = 'none';
}

function showSignUpForm(){
  document.getElementById("jBtn").style.background = 'rgba(255, 255, 255, 1)';
  document.getElementById("siBtn").style.background = 'rgba(255, 255, 255, 0)';
  document.getElementById("signUpForm").style.display = 'flex';
  document.getElementById("signInForm").style.display = 'none';
}

function hideForms() {
  document.querySelector(".formContainer").style.display = 'none';
}
