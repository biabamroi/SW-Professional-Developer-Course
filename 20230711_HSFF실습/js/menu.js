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
    // sub Menu 보이게 max-height : 265px;
    subMenu.classList.add('active');
    // gnb-main-item a 태그에 on class 추가 시 
    // Main Menu 변경된 색상 유지 (hover)
    this.querySelector('a').classList.add('on');
  })

  item.addEventListener('mouseleave', function(){
    // sub Menu 보이지 않게 max-heigh : 0;
    subMenu.classList.remove('active');
    this.querySelector('a').classList.remove('on');
  })
})


