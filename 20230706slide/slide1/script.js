let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
// console.log(btn1,btn2,btn3)

let slideList = document.querySelector('.slide-list');
// console.log(slideList)


// 버튼 1 클릭했을 때 이미지 (0) translateX()
// addEventListener('click')
btn1.addEventListener('click', function(){
  slideList.style.transform = 'translateX(0)';
})

// 버튼 2 클릭했을 때 이미지 (1) translateX()
btn2.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-100vw)';
})

// 버튼 3 클릭했을 때 이미지 (2) translateX()
btn3.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-200vw)';
})

// 기본형---------------------------------------------------
// 