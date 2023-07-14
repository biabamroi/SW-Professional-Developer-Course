let buttons = document.querySelectorAll('.slide-btn li');
let slideList = document.querySelector('.slide-list');

// buttons라는 배열(li*3)을 forEach로 반복한다.
// forEach 매개변수 1. 반복한 값, 2. 인덱스 값
buttons.forEach(function(button, index){
  // 실행 될 코드
  button.addEventListener('click', function(){
    // index(0,1,2) * 100 → 0, -100, -200
    // 두 번째 이미지 : index 1 → -1 * 100 + 'vw' → -100vw
    let translateValue = -index * 100 + 'vw';
    // translasteX(-100vw)
    // slideList.style.transform = 'translateX('+translateValue+')';
    slideList.style.transform = `translateX(${translateValue})`;
  })
})

// buttons.forEach((btn,index)=>{
//   btn.addEventListener('click', ()=>{
//     let xValue = -index * 100 + 'vw';
//     slideList.style.transform = `translateX(${xValue})`;
//   })  
// })