// new Date() 한국 표준시
// n초마다 코드 실행하는 setInterval

setInterval(function(){
  let now = new Date();
  // 시, 분, 초 값을 각 변수에 할당
  let hr = now.getHours();
  // console.log(typeof(hr)); // number
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // 1. 조건문
  // hr(시) 10보다 크거나 같을 때 (두자리 수)
  // if(hr >= 10){
  //   hnum = hr;
  // }else{
  //   // 그렇지 않을 때 (한자리 수)
  //   hnum = '0' + hr;
  // }
  
  // if(min >= 10){
  //   mnum = min;
  // }else{
  //   mnum = '0' + min;
  // }
  
  // if(sec >= 10) {
  //   snum = sec;
  // }else{
  //   snum = '0' + sec;
  // }

  // document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`;


  // 2. padStart() method
  // 값.padStart(자리수, 자리수를 채울 문자)
  // 현재 문자열의 length가 자리수 보다 작을 경우
  // '채울 문자'에 작성된 문자로 자리수만큼 채워주는 method
  // String(숫자) → 숫자를 문자로 형변환  

  hr = String(hr).padStart(2, '0');
  // 받아온 hr을 문자열로 변환해서 두자리수로 만드는데, 남은 자리를 문자열 0으로 채움
  // console.log(typeof(hr)); // number가 string으로 바뀜
  min = String(min).padStart(2, '0');
  sec = String(sec).padStart(2, '0');
  // console.log(sec)

  
}, 1000)