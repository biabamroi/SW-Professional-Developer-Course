// 1. toggle-container 변수에 담기
const toggle = document.querySelector('.toggle-container')
console.log(toggle) // ('')는 문자열로 인식 

let check = false;

toggle.addEventListener('click',(e)=>{
  // 자체적으로 갖고 있는 이벤트를 취소 ----------------------- ★
  e.preventDefault()
  // 2. toggle-container 클릭 시 active 클래스 추가/삭제
  toggle.classList.toggle('active')

  // 활성화 input#toggle:checked + .switch
  const input = e.currentTarget.querySelector('input')
  input.checked = check;
  
  // true, false 뒤집는 역할
  check = !check
  console.log(check)
  // if(check){
  //   check = false
  //   console.log(check)
  // }else{
  //   check = true
  //   console.log(check)
  // }
})