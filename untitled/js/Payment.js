const PayForm = document.querySelector("#payForm")
const CreditCardInput = document.querySelector("#creditCard")
const ExpMonthInput = document.querySelector("#expMonth")
const ExpYearInput = document.querySelector("#expYear")
const CvvInput = document.querySelector("#cvv")
const IdInput = document.querySelector("#Id")
const msg = document.getElementById("msg")

const Pay = (e) => {
  e.preventDefault();
  const d = new Date();
  if (isNaN(Number(CreditCardInput.value)) || CreditCardInput.value.length != 16) {
        msg.innerHTML = 'Credit card number should contain 16 numbers'
  }
  else if(isNaN(Number(ExpYearInput.value))|| isNaN(Number(ExpMonthInput.value))){
        msg.innerHTML = 'Exp date should only contain numbers'
  }
 else if(ExpYearInput.value.length != 4){
        msg.innerHTML = 'Year should contain 4 digits'
  }
 else if (ExpMonthInput.value.length != 2){
        msg.innerHTML = 'Month should contain 2 digits'
  }
 else if (Number(ExpMonthInput.value) <= 0 || Number(ExpMonthInput.value) > 13){
           msg.innerHTML = 'Invalid month'
  }
  else if(Number(ExpYearInput.value) == d.getFullYear()&& Number(ExpMonthInput.value) < d.getMonth()+1){
        msg.innerHTML = 'Invalid Exp.'
  }
  else if(Number(ExpYearInput.value) < d.getFullYear()){
        msg.innerHTML = 'Invalid Exp.'
  }
  else if (CvvInput.value.length != 3 || isNaN(Number(CvvInput.value))) {
    msg.innerHTML = 'Cvv contains only 3 numbers'
  }
  else if (isNaN(Number(IdInput.value)) || IdInput.value.length != 9 ) {
    msg.innerHTML= 'Invalid Id'
  }
  else {
    alert("The payment was made successfully, thank you for shopping with us!");
    window.location.href = '../Pages/Y&OHomePage.html';
  }

};

PayForm.addEventListener('submit',Pay)




