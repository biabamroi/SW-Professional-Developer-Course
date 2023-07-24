// progress bar 프로그래스 바
// 페이지 내에서 사용자가 얼마나 읽고 있는지 현재 스크롤되고 있는 값을 UI로 표현해 주는 것
// 스크롤 높이, 현재 스크롤 값, 화면 높이값 
// 스크롤바를 1% 내리면 bar width값도 1% 증가

// html, css에서 bar를 어떤 위치에서 어떻게 보여줄지 디자인
// window scroll event 추가

window.addEventListener('scroll', function(){
  let scrollTop = document.querySelector('html').scrollTop;
  let clientH = document.querySelector('html').clientHeight;
  let scrollH = document.querySelector('html').scrollHeight;
  // console.log('스크롤 양 : ' + scrollTop, '화면 높이 : ' + clientH, '스크롤 높이 : ' + scrollH);

  // 백분율 환산
  // (구하려는 백분율을 나타내는 수 / 전체 수) * 100
  let progress = (scrollTop / (scrollH-clientH)) * 100;
  // console.log(progress);
  document.querySelector('.line').style.width = progress + '%';
})


// mine
window.addEventListener('scroll', function(){
  let all = document.querySelector('html');
  let scrolling = (all.scrollTop / (all.scrollHeight-all.clientHeight)) * 100;
  document.querySelector('.bar').style.width = scrolling +'%';
})

