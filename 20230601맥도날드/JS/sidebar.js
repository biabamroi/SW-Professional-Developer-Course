// 변수 선언 : var, let, const
// Javascript는 변수명을 만들 때 카멜 표기법을 사용한다. 대소문자 표기
// 문서에서 가져올 때는 선택자를 붙여야 한다.
const gnbIconBtn = document.querySelector('.gnb-icon-btn');
// getElementsByClassName, getElementById 앞에 . 또는 # 붙이지 않는다.
// const gnbIconBtn = document.getElementsByClassName('class명');
// const gnbIconBtn = document.getElementById('ID명');
// console 원하는 값이 잘 담겼는지 확인용
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');
console.log(gnbIconBtn,sidebar,sidebarOverlay);
// F12 개발자 모드에서 콘솔 뜨는지 확인

// 함수 function 함수명() { 실행 할 코드 }
// function openSidebar() {
//   // 1. gnbIconBtn 클릭 시 sidebar, sidebarOverlay한테 is-active 클래스 추가
//   // DOM 메소드 이용하여 클래스 추가 및 제거
//   // DOM : 스크립팅 언어가 미리 만든 웹 페이지에 접근해서 요소 조작 역할
//   // 현재 웹브라우저에서 DOM 조작 언어는 Javascript가 유일하다.
//   // DOM 데이터 타입 (메소드, 프로퍼티, 이벤트 리스너, 스타일 등)
//   sidebar.classList.add('is-active');
//   sidebarOverlay.classList.add('is-active');
// }

// // gnbIconBtn한테 click 이벤트 추가하고 openSidebar 함수를 실행
// gnbIconBtn.addEventListener('click', openSidebar);

// function closeSidebar() {
//   // is-active 클래스 제거
//   sidebar.classList.remove('is-active');
//   sidebarOverlay.classList.remove('is-active');
// }
// // sidebar.addEventListener('click', closeSidebar);
// sidebarOverlay.addEventListener('click', closeSidebar);

// 콜백 함수 : 함수를 활용하는 하나의 방식
// 변수의 유효범위(scope), 동기/비동기처리
// 코드가 작성된 순서대로 동작(가독성, 재사용성이 좋다)
// 함수 호출 시점이나 코드 동작 순서가 바뀐다. 

// gnbIconBtn 클랙 시 실행 할 함수
gnbIconBtn.addEventListener('click', function(){
  // 실행 할 코드
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
})

sidebarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
})