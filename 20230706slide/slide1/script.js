let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
// console.log(btn1,btn2,btn3)

let slideList = document.querySelector('.slide-list');
// console.log(slideList)


// 버튼 1 클릭했을 때 이미지 (0) translateX()
// 기본형---------------------------------------------------
addEventListener('click')
btn1.addEventListener('click', function(){
    slideList.style.transform = 'translateX(0)';
})

// ----------------------onClick---------------------------

// Click 이벤트 추가하는 방법
// 1. HTML onclick="함수()"
// 2. 함수 생성 후 이벤트 대상.addEventListener('click',함수)
// 3. 이벤트대상.addEventListner('click', fuction(){}) 콜백

// 함수
function Btn1(){
  slideList.style.transform = 'translateX(0)';
}
// 이벤트
btn1.addEventListener('click', Btn1)



// 버튼 2 클릭했을 때 이미지 (1) translateX()
// 기본형---------------------------------------------------
// btn2.addEventListener('click', function(){
  //   slideList.style.transform = 'translateX(-100vw)';
  // })
// ----------------------onClick---------------------------
function Btn2(){
  slideList.style.transform = 'translateX(-100vw)';
}



// 버튼 3 클릭했을 때 이미지 (2) translateX()
// 기본형---------------------------------------------------
// btn3.addEventListener('click', function(){
//   slideList.style.transform = 'translateX(-200vw)';
// })
// ----------------------onClick---------------------------
function Btn3(){
  slideList.style.transform = 'translateX(-200vw)';
}
  

