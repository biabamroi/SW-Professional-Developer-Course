let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-list li');
let slideItemContents = document.querySelectorAll('.slide-item-content');

let slideBtn = document.querySelectorAll('.slide-btn');
let slideBtn1 = document.getElementById('.slide-btn1');
let slideBtn2 = document.getElementById('.slide-btn2');
let slideBtn3 = document.getElementById('.slide-btn3');

let prevBtn = document.querySelector('.left-btn');
let nextBtn = document.querySelector('.right-btn');


slideBtn.forEach((otherBtn,index)=>{
  setInterval(function(){
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
    slideBtn.forEach(function(hidden){
      hidden.classList.add('hidden');
    })
    otherBtn.classList.remove('hidden');
  }, 3000)

  // slideBtn.forEach(function(btn){
  //   buttons.forEach(function(otherBtn){
  //     if(otherBtn !== btn && otherBtn.classList.contains('active')){
  //       otherBtn.classList.remove('active');
  //     }
  //   })
  // })
})






let pageChk = 0;

nextBtn.addEventListener('click', function(){
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

prevBtn.addEventListener('click', function(){
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