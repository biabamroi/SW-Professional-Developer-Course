// sidebar-drawer menu 활성화 상태 toggle을 위한 코드

// const : 재할당 x 재선언 x 범위 {}
// querySelectorAll 함수를 사용해서 해당 CSS 선택자 요소를 모두 선택
// 찾아온 값들을 drawerMenuButtonList 상수에 저장
const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');
// console.log(drawerMenuButtonList)

function toggleDrawerMenu() {
  // this는 클릭 이벤트가 발생한 요소를 가르킨다.
  // parentNode 속성으로 클릭된 요소의 부모 요소를 찾는다.
  const drawerMenu = this.parentNode;
  // toggle : class가 있을 경우 제거, 없는 경우 추가

  // drawer Menu open, close
  drawerMenu.classList.toggle('is-open');
  // 선택된 요소(this) 메뉴의 아이콘 컬러 변경
  drawerMenu.classList.toggle('is-active');
}

// this
// 0 1 2
// forEach를 사용해서 drawerMenuButtonList 배열의 각 요소에 대해 반복해준다.
// forEach로 반복된 값을 button(매개변수)에 담아준다.
drawerMenuButtonList.forEach(function (button) {
  // 매개 변수로 받은 각 button 요소에 click 이벤트 추가
  // click 이벤트가 발생할 때마다 toggleDrawerMenu 함수 호출
  // 사용자가 클릭한 버튼의 부모 요소인 drawer-menu의 활성화 상태가 toggle 된다.
  button.addEventListener('click', toggleDrawerMenu);
})