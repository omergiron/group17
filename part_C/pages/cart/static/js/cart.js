//document.addEventListener('DOMContentLoaded', Cart);
const exit = document.getElementById("exitButton");
exit.addEventListener('click', hideMsg);

function hideMsg() {
  console.log("clicked");
  const Msg =   document.getElementById("temporaryMassage");
  Msg.style.display = 'none';
  console.log(Msg.style.display);
}

//function Cart(){
//  const Msg = document.getElementById('tempMsg');
//  Msg.style.display = 'flex';
//  setTimeout(function() {
//        Msg.style.display = 'none';
//    },2000);
//};
