// find() : 자식 및 하위 태그 찾을 때 사용
// children() : 자식 요소만 찾을 때

// index / eq() : 

// $('.main-wrapper > li').hover(function(){
//   $('.sub-wrapper').css('visibility','visible');
// })


$('.gnb > div > a').hover(function(){
  $(this).find('.sub > div').stop().slideDown(500);
  $(this).find('a').addClass('on');
// .gnb li (메인메뉴)에 hover되지 않았을 때
// 마우스가 떠났을 때 (mouseleave)
// 콜백함수 : 앞 함수가 실행되고 또 다른 명령 수행
}, function(){
  $(this).find('.sub > div').stop().slideUp(500);
  $(this).find('a').removeClass('on');
})

