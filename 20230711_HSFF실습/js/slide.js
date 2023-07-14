let buttons = document.querySelectorAll('.slide-btn li');
let slideList = document.querySelector('.slide-list');

buttons.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
  })  
})