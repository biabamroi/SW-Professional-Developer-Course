// .gnb li (메인메뉴)에 hover 했을 때
$('.gnb > li').hover(function(){
  //this : .gnb > li들 중에 hover된 
  $(this).find('ul').slideDown(500);
  $(this).find('a').addClass('on');
// .gnb li (메인메뉴)에 hover되지 않았을 때
// 마우스가 떠났을 때 (mouseleave)
// 콜백함수 : 앞 함수가 실행되고 또 다른 명령 수행
}, function(){
  $(this).find('ul').slideUp(500);
  $(this).find('a').removeClass('on');
})