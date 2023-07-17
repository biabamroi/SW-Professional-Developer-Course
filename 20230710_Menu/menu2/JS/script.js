// find() : 자식 및 하위 태그 찾을 때 사용
// children() : 자식 요소만 찾을 때

// index / eq() : 

// - **index, eq( ) 사용**
//     - 서브메뉴 li index
//     - 메인메뉴 li eq(서브메뉴인덱스값)에 class 추가 제거

$('.main-menu li, .submenu-wrapper').hover(function(){
  // hover시 실행할 함수
  $('.submenu-wrapper').stop().slideDown(500);
}, function(){
  // leave 됐을 때 실행할 함수
  $('.submenu-wrapper').stop().slideUp(500);
})

// $('선택자').hover(function(){
  // horver 시 실행
// }, function(){
  // leave 시 실행
// })

$('.submenu-list > li').hover(function(){
  // .submenu-list > li 4개 중
  // hover된 자신의 index 번호를 i라는 변수에 저장
  let i = $(this).index();
  // eq() : 인덱스 번호로 어떤 요소를 찾을 때 사용
  $('.main-menu').find('a').eq(i).addClass('on');
}, function(){
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).removeClass('on');
})
