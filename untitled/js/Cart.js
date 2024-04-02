//Added an event listener to the page so that as soon as the page loads a temporary message appears for 5 seconds
document.addEventListener('DOMContentLoaded', Cart);
function Cart(){
  const Msg = document.getElementById('tempMsg');
  Msg.style.display = 'flex';
  setTimeout(function() {
        Msg.style.display = 'none';
    },5000);
};

//Added an event listener to the deletion buttons so that as soon as the customer clicks the button, the product
//is deleted from the shopping cart
const deleteBtns = document.getElementsByClassName("deleteBtn");
for (let i=0; i<deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', function() {deleteItem(this);})
}

function deleteItem(btn) {
  let row = btn.closest('tr');
  row.remove();
}


