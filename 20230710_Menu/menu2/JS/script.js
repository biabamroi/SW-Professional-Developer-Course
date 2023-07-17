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





// $('.main-wrapper > li').hover(function(){
//   $('.sub-wrapper').css('visibility','visible');
// })