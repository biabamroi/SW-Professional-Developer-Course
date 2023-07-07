let btnGroup = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');

btnGroup.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
  })  
})