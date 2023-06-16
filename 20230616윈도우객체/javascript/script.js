// alert( window.name );    // 현재 없음
// alert( window.screenX );    // -11 브라우저 위치
// alert( window.innerWidth );

// $(window).resize(function(){ 아래쪽 코드 })
// var ww = $(window).width();  // jQuery로 할 경우



// --------------------- 중요 -------------------------------

// setTimeout(해야할일,지연시간); 시한폭탄

// setTimeout(function(){
//   // alert("인사가 3초 늦었습니다. 안녕하세요.");
//   // location.href="http://www.naver.com";
//   // redirect 리다이렉트 : 검색엔진 평가 주의
// },3000);



// setInterval(해야할일,지연시간마다); 반복

// setInterval(function(){
//   document.body.innerHTML = document.body.innerHTML + "A";
// }, 500);     // a = a + 1;

// 시계 -------------------------------------------------------

function chktime(){
  var now = new Date();  // 새로운 객체, 메소드, 첫 번째 글자 대문자
  var hour = now.getHours();  // now 객체에서 시간을 뽑아냄
  var min = now.getMinutes();
  var sec = now.getSeconds();
  // hour = addzero(hour);  // 한자리수 표기 함수 
  // min = addzero(min);
  // sec = addzero(sec);
  // alert(hour + ":" + min + ":" + sec);  // 한자리수 표기 문제 
  document.getElementById("si").innerHTML = addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(sec);
}

function addzero(num){
  // 한자리수에 0 추가하기 위한 함수
  // 문자열로 바뀌기 때문에 계산 마지막에
  if(num<10){
    return "0"+num;
  }else{
    return num;
  }
}

setInterval(chktime,0);




