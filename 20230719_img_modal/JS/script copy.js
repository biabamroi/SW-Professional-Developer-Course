let modalOpen = document.querySelector('.modal-item div');
let modalPop = document.querySelector('.modal-popup');
let modalOver = document.querySelector('.modal-overay');
let modalBtn = document.querySelector('.modal-btn');
let modalBtn2 = document.querySelector('.modal-btn2');

modalOpen.addEventListener('click', function(){
  modalPop.classList.add('show');
  modalOver.classList.add('show');
})

modalBtn.addEventListener('click', function(){
  modalPop.classList.remove('show');
  modalOver.classList.remove('show');
})

$(".modal-btn").on("click", function() {
  $(".modal-popup").fadeout(slow);
  $(".modal-overay").fadeout(slow);
});


let modalImg = document.querySelectorAll('.modal-item img');
let modalImgPop = document.querySelector('.modal-img-popup');
let modalImgPopImg0 = document.querySelector('.modal-img-popup img');

modalImg.forEach(item => {
  item.addEventListener('click', function(){
    modalImgPop.classList.add('show2');
    modalOver.classList.add('show');
    let imgSrc = this.src;
    modalImgPopImg0.src = imgSrc;
  })
});

modalBtn2.addEventListener('click', function(){
  modalImgPop.classList.remove('show2');
  modalOver.classList.remove('show');
})



