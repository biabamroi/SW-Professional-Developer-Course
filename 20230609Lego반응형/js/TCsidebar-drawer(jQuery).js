// 목표
// drawer-menu-button(3) 클릭했을 때
// this(클릭한 버튼)의 부모 요소에 
// is-open is-active 클래스 toggle

const drawerMenuButtonList = $('.drawer-menu-button');
// console.log(drawerMenuButtonList)

function toggleDrawerMenu(){
  const drawerMenu = $(this).parent();
  // console.log(drawerMenu)
  drawerMenu.toggleClass('is-open is-active');
}
// toggleDrawerMenu() 함수를 호출해야 콘솔 로그

// 클릭할 때마다 함수 toggleDrawerMenu 호출
drawerMenuButtonList.on('click', toggleDrawerMenu)



// 잘못된 접근 방식,,, 

// $('.drawer-menu-button').unbind('click');

// $('button.drawer-menu-button').on('click', function(){
//   $(this).toggleClass('is-open is-active');
//   $(this).siblings().toggleClass('is-open is-active');
// });


// $(document).ready(function(){
//   $('button.drawer-menu-button').click(function(){
//     $(this).toggleClass('is-open is-active');
//   });
// });


// $(document).ready(function(){
//   $('button.drawer-menu-button').click(function(){
//     $('.drawer-menu-button').removeClass('is-open is-active');
//     $(this).addClass("is-open is-active");
//   });
// });
// $(document).ready(function(){
//   drawerMenuButtonList.click(function(){
//     drawerMenuButtonList.removeClass('is-open is-active');
//     $(this).addClass("is-open is-active");
//   });
// });


// function myFunction(){
//   drawerMenuButtonList.click(function(){
//     $(this).toggleClass('is-open is-active');
//   });
// }
// $(document).on('click', drawerMenuButtonList, myFunction);


// $(document).ready(function(){
//   drawerMenuButtonList.on('click',function(){
//     drawerMenuButtonList.toggleClass('is-open is-active');
//   });
// });


// $('.drawer-menu-button').click(function(){
//   $(this).toggleClass('is-open is-active');
// });