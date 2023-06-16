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
  var msec = now.getMilliseconds();  // 0~999 (세자리수)
  // hour = addzero(hour);  // 한자리수 표기 함수 
  // min = addzero(min);
  // sec = addzero(sec);
  // alert(hour + ":" + min + ":" + sec);  // 한자리수 표기 문제 
  document.getElementById("si").innerHTML = addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(sec);
  document.getElementById("mcho").innerHTML = addzero2(msec);
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

function addzero2(num){
  if(num<10){
    return "00"+num;
  }else if(num<100){
    return "0"+num;
  }else{
    return num;
  }
}

// setInterval(chktime, 1);
// 원래는 window.setInterval(chktime, 1);





// element 객체, 메소드 / 누구든 무엇이든 어디든 ----------------

// length -------------------

// alert(document.getElementsByTagName("span").length);

// var arr = [1, 5, 5, 6, 9, "a", true];
// alert( arr.length );

// var text = "Hello, World!";
// alert( text.length );
// alert( text.split(" ").length );

// document.getElementById("si").style.fontSize = "2em";
// document.getElementById("si").style.fontWeight = "bold";

// alert(location.href);  // get 읽어들일 
// location.href="";  // set 세팅할  - redirect (사용자 권리 침해)

document.getElementById("saero").onclick = function(){
  location.reload();
} // history : 0 새로고침


// Number, 숫자 재료 관리 
// Math, 계산

// 숫자 전역 메소드 Number, parselnt, parseFloat

// 계산기
// var a = window.prompt("더할 첫 번째 값을 입력하시오.");
// var b = window.prompt("더할 두 번째 값을 입력하시오.");
// // prompt : 문자열 
// a = Number(a);
// b = Number(b);
// window.alert(a+b);

// 7 나누기 3 의 몫
// alert(parseInt(7/2)); // 정수로 만들어서 
// alert(7%2); // 나머지 

// PI 파이 원주율 3.141592653589793
// SQRT2 루트2 1.4142135623730951



// 랜덤 -----------------------------------------------------------
// 최소, 최대값을 지정하고 그 사이의 임의 정수를 추출하는 함수
function rand(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// alert(rand(1,6));

// alert(Math.random());  // 임의의 쓸 수 없는 수 0~0.99999...
// alert(Math.random()*6);  // 맥시멈 수는 나오지만...

// 최소값이 1, 최대값이 6
// alert(  Math.floor(Math.random()*(6-1+1)+1)  );



