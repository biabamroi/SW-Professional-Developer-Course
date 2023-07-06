// dropdown-btn을 클릭했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove

const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownMenu = document.querySelector('.dropdown-menu')
// console.log(dropdownBtn, dropdownMenu)

dropdownBtn.addEventListener('click', function(e){
  e.preventDefault() // 이벤트값 초기화
  // dropdownMenu.classList.toggle('active');
  
  
  // 조건문으로 toggle 기능 구현
  // () 내부 조건이 True → {} 내부 코드 실행
  // 조건이 false → else 구문 실행
  
  // active로 현재 버튼 활성화 상태 확인
  // 활성화 : True → if {} 실행
  // 비활성화 : False → else {} 실행
  
  if(this.active){
    // active 활성화 → .active remove
    dropdownMenu.classList.remove('active');
  }else{
    // active 비활성화 → .active add
    dropdownMenu.classList.add('active');
  }
  
  this.active = !this.active

  // NOT 연산자 !
  // 버튼이 비활성화 상태라면 활성 상태로 바꿔주고
  // 활성 상태라면 비활성화 상태로 바꿔주는 연산자
  // this.active : 현재 버튼 활성 상태
  // !this.active : 현재 버튼 활성 상태의 반대값
})
// dropdownBtn.addEventListener('click', ()=>{
//   dropdownMenu.classList.toggle('active');
// })

