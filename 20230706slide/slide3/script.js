let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-list li');

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentSlide = 0;


nextBtn.addEventListener('click', function(){
  // slideItems 배열 length의 -1보다 값이 작을 때
  if(currentSlide < slideItems.length - 1){
    currentSlide++;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(currentSlide > 0){
    currentSlide--;
    slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  }
})


// 내 코드

let sBtnL = document.querySelector('.side-button-left');
let sBtnR = document.querySelector('.side-button-right');

var pageChk = 0;

sBtnR.addEventListener('click', ()=>{
  if(pageChk === 0){
    slideList.style.transform = 'translateX(-100vw)';
    return pageChk = 1;
  }else if(pageChk === 1){
    slideList.style.transform = 'translateX(-200vw)';
    return pageChk = 2;
  }else{
    alert("마지막 페이지입니다.");
    e.preventDefault();
  }
})

sBtnL.addEventListener('click', ()=>{
  if(pageChk === 0){
    alert("첫 번째 페이지입니다.")
  }else if(pageChk === 1){
    slideList.style.transform = 'translateX(0vw)';
    return pageChk = 0;
  }else{
    slideList.style.transform = 'translateX(-100vw)';
    return pageChk = 1;
  }
})