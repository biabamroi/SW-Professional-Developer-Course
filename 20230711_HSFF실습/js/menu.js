// jQuery
// $('.gnb-main-item').hover(function(){
//   // gnb-main-item에 hover했을 때, .sub class를 찾아서 slideDown()
//   $(this).find('.sub').stop().slideDown(300);
//   $(this).children('a').addClass('active');
// }, function(){
//   $(this).find('.sub').stop().slideUp(300);
//   $(this).children('a').removeClass('active');
// })


// vanilla JS
// CSS .sub 조정, .active 추가
let gnbItems = document.querySelectorAll('.gnb-main-item');

gnbItems.forEach(function(item){
  let subMenu = item.querySelector('.sub');
  item.addEventListener('mouseover', function(){
    subMenu.classList.add('active');
  })
})
