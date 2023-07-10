let btnGroup = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');

btnGroup.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
  })  
})

let sBtnL = document.querySelector('.side-button-left');
let sBtnR = document.querySelector('.side-button-right');

btnGroup.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
  })  
})