

const SignUpForm = document.querySelector("#signUpForm")
const FirstNameInput = document.querySelector("#FirstName")
const LastNameInput = document.querySelector("#LastName")
const EmailInput = document.querySelector("#email")
const PasswordInput = document.querySelector("#Password")
const PhoneNumInput = document.querySelector("#PhoneNum")
const msg = document.getElementById("msg")


const OnSubmit = (e) => {
  e.preventDefault();
  if (/[0-9]/.test(FirstNameInput.value) || /[0-9]/.test(LastNameInput.value)) {
    msg.innerHTML = 'A name cannot contain numbers'
  }
  else if (!EmailInput.value.includes("@")) {
    msg.innerHTML = 'Invalid Email'
  }
  else if (!/[A-Z]/.test(PasswordInput.value)) {
    msg.innerHTML= 'The Password must contain at least one capital letter'
  }
  else if(PhoneNumInput.value.charAt(0) != '0' || PhoneNumInput.value.length != 10 || isNaN(Number(PhoneNumInput.value))) {
    msg.innerHTML = 'Invalid Phone Number'
  }
  else {
    window.location.href = '../Pages/PersonalArea.html';
  }
};

SignUpForm.addEventListener('submit',OnSubmit)




