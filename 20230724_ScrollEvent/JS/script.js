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
    document.querySelector('nav').style.backgroundColor = 'white';
  }else{
    document.querySelector('nav').style.backgroundColor = '#ccc';
  }
})

let lorem = document.querySelector('.lorem');
// 2. 스크롤이 끝까지 갔을 때 alert창으로 '스크롤 끝!'
lorem.addEventListener('scroll', function(){
  // scrollTop, clientHeight, scrollHeiht
  // scrollTop : 스크롤된 양
  let scrollAmount = document.querySelector('.lorem').scrollTop;
  // clientHeight : 박스가 화면에 보이는 높이값
  let displayHeight = document.querySelector('.lorem').clientHeight;
  // scrollHeight : 박스에 스타일로 지정된 높이값이 아니라 스크롤 가능한 높이값을 나타낸다.
  let scrollHeights = document.querySelector('.lorem').scrollHeight;
  // console.log(scrollAmount, displayHeight, scrollHeights);

  if(scrollAmount + displayHeight == scrollHeights){
    alert('Scroll end!');
  }
})

// window scroll 다 됐을 때 alert창 '전체 스크롤 완료!'
window.addEventListener('scroll', function(){
  // documentElement == querySelector('html') 동일
  let 문서스크롤양 = document.querySelector('html').scrollTop;
  let 문서높이 = document.querySelector('html').clientHeight;
  let 문서스크롤높이 = document.querySelector('html').scrollHeight;
  // console.log(문서스크롤양,문서높이,문서스크롤높이);
  if(문서스크롤양+문서높이==문서스크롤높이){
    alert('전체 문서 스크롤 완료!');
  }
})
// 내가 짠 코드
// window.addEventListener('scroll', function(){
//   let all = document.querySelector('*');
//   if(all.scrollTop + all.clientHeight == all.scrollHeight){
//     alert('All Scroll Complete!');
//   }
//   console.log(all.scrollTop, all.clientHeight, all.scrollHeight);
// })