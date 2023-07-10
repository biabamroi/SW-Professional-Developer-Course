let buttons = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');

buttons.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
    
    // btnGroup 배열을 한 번 더 돌면서 모든 버튼이 갖고 있는
    // active class remove
    // buttons.forEach(function(otherBtn){
    //   otherBtn.classList.remove('active');
    // })
    // 클릭된 버튼에만 active class add 
    btn.classList.add('active');

    // ↑ 전체적으로 삭제 ↓ 조건식으로 삭제

    // 조건문
    // 현재 클릭된 버튼이 아닐 때 && active라는 class를 포함하고 있다면
    // 위 조건이 true일 때 active class remove
    buttons.forEach(function(otherBtn){
      if(otherBtn !== btn && otherBtn.classList.contains('active')){
        otherBtn.classList.remove('active');
      }
    })

  })  
})



let sBtnL = document.querySelector('.side-button-left');
let sBtnR = document.querySelector('.side-button-right');

sBtnR.addEventListener('click', ()=>{
  slideList.style.transform = 'translateX(-100vw)';
})