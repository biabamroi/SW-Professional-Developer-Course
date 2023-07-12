// const gnbMenu = document.querySelectorAll('.gnb > li');
// const subMenu = document.querySelectorAll('.sub')

// gnbMenu.forEach(function(item){
//   item.addEventListener('mouseover', function(){
//     subMenu.forEach(function(e){
//       e.classList.add('active');
//     })
//   })
// })


$('.gnb > li').hover(function(){
  $(this).find('ul').stop().slideDown(300);
}, function(){
  $(this).find('ul').stop().slideUp(300);
})



let buttons = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');


buttons.forEach((btn,index)=>{
  btn.addEventListener('click', ()=>{
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
  })  
})