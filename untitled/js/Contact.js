const SignUpForm = document.querySelector("#ContactForm")
const FirstNameInput = document.querySelector("#FirstName")
const LastNameInput = document.querySelector("#LastName")
const EmailInput = document.querySelector("#email")
const PhoneNumInput = document.querySelector("#PhoneNum")
const MessageInput = document.querySelector("#message")
const msg = document.getElementById("msg")


const OnSubmit = (e) => {
  e.preventDefault();
  if (/[0-9]/.test(FirstNameInput.value) || /[0-9]/.test(LastNameInput.value)) {
    msg.innerHTML = 'A name cannot contain numbers'
  }
  else if (!EmailInput.value.includes("@")) {
    msg.innerHTML = 'Invalid Email'
  }
  else if(PhoneNumInput.value.charAt(0) != '0' || PhoneNumInput.value.length != 10 || isNaN(Number(PhoneNumInput.value))) {
    msg.innerHTML = 'Invalid Phone Number'
  }
  else if(MessageInput.value===""){
    msg.innerHTML = 'Your message is empty'

  }
  else {
    alert("Your message was sent successfully!");
    window.location.href = '../Pages/Y&OHomePage.html';
  }

};

SignUpForm.addEventListener('submit',OnSubmit)




