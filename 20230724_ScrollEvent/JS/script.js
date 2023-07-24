// AOS Animate On Scroll

// 1. 유저가 스크롤을 얼마나 내렸는지 파악
// window : 현재 HTML 페이지 (document와 같은 개념, window > document)
// Scroll event 관습적으로 window 부착
window.addEventListener('scroll', function(){
  // 현재 페이지에서 얼마나 스크롤했는지 px 단위로 알려주는 scollY
  // 세로 스크롤 : scrollY / 가로 스크롤 : scrollX
  // console.log(window.scrollY +'px');

  // 강제 스크롤바 특정 위치로 이동 : window. scrollTo(x,y)
  // this.window.scrollTo(0, 800);

  // 현재 페이지에서 100px 이상 스크롤 됐을 때
  // nav 태그의 배경색 변경
  if(window.scrollY >= 100){
    document.querySelector('nav').style.backgroundColor = '#ccc';
  }else{
    document.querySelector('nav').style.backgroundColor = 'white';
  }
})

// 2. 