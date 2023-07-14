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

    // buttons라는 배열 내부 모든 요소
    // 클릭된 이미지 페이지에서 버튼(hover) 색상 유지
    buttons.forEach(function(otherBtn){
      // 전체 클래스에서 제거 후
      otherBtn.classList.remove('active');
    })
    // 현재 클릭 이벤트 내부 : 클릭된 요소에만 active class add 
    button.classList.add('active');
  })
})

// buttons.forEach((btn,index)=>{
//   btn.addEventListener('click', ()=>{
//     let xValue = -index * 100 + 'vw';
//     slideList.style.transform = `translateX(${xValue})`;
//   })  
// })