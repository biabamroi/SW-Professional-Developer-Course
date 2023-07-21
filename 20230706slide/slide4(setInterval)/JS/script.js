// 현재 인덱스를 저장하는 변수 (초기값 0)
// 커렌트, 렝스 약자 사용
let cur = 0;
// .slide-item 클래스 요소 총 개수 저장
let len = $('.slide-item').length;

for(i=0; i<len; i++){
  $('#dots').append('<div></div>');
}

// 슬라이드 이동하는 함수
// dir 매개변수에 따라 이전이나 다음으로 이동
function sliding(dir){
  cur = cur + dir;

  // cur 값이 양수일 경우 다음 슬라이드로 이동
  // cur 값이 음수일 경우 이전 슬라이드로 이동
  // 마지막 슬라이드에서 다음 버튼을 누르면 처음 슬라이드로 이동
  // 처음 슬라이드에서 이전 버튼을 누르면 마지막 슬라이드로 이동
  if(cur >= len){
    cur = 0
  }else if(cur < 0){
    cur = len - 1;
  }

  // siblings : 형제 요소를 찾는 함수
  // siblings 이용
  // 현재 슬라이드(인덱스cur번호를 가진 슬라이드) 제외
  // 나머지 슬라이드 fadeOut
  $('.slide-item').eq(cur).siblings('.slide-item').stop().fadeOut();

  // fadeIn으로 현재 슬라이드를 화면에 보이게 한다.
  $('.slide-item').eq(cur).stop().fadeIn(function(){
    $(this).siblings('.slide-item').children('p').css({
      // 문자열 ""
      marginTop : "20px",
      opacity : 0
    })
    $(this).children('p').stop().animate({
      // 텍스트가 밑에서 위로 올라오는 효과를 위한
      marginTop : 0,
      opacity : 1
    }, 600)
  });

  $('#dots div').removeClass('is-active');
  $('#dots div').eq(cur).addClass('is-active');
}



// 함수 호출, dir 매개변수 0
// 이미지, 텍스트, dots 상태 확인
// sliding(2)


sliding(0)

// 이전 슬라이드로 가야 하는 버튼
// 음수값을 매개변수로 전달
$('#prev').click(function(){sliding(-1)});
// 다음 슬라이드로 가야 하는 버튼
// 양수값을 매개변수로 전달
$('#next').click(function(){sliding(1)});


let auto = setInterval(sliding, 5000, 1);


// dots div(btn)을 클릭했을 때 해당 슬라이드로 이동하는 코드
$('#dots div').click(function(){
  cur = 0;
  let num = $(this).index();
  sliding(num);
})


