const productImages = document.querySelectorAll(".productImg");
const zoomDiv = document.querySelector(".zoomImg");
const bigImg = document.querySelector(".bigImg");
const exit = document.querySelector(".exitBtn");
const quantityInput = document.querySelectorAll("input");

for(let i=0; i<quantityInput.length;i++) {
  quantityInput[i].min = "1";
  quantityInput[i].defaultValue = "1";
}

for(let i=0; i<productImages.length;i++) {
  productImages[i].addEventListener('click', function() {zoomImg(this);})
}

function zoomImg(img){
    zoomDiv.style.display = 'block';
    bigImg.src = img.src;
}

exit.addEventListener('click', function() {
  zoomDiv.style.display = 'none';
})

