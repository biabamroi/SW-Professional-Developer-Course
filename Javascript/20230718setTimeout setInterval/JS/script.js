let count = document.querySelector('.count');

// n초 후에 코드 실행하는 함수 setTimeout()

setTimeout(() => {
  count.classList.add('is-active');
  // console.log('창 사라졌다')
  // 함수를 변수 선언하여 가져와서 클리어로 멈춤
  clearInterval(hexBgcChange)
}, 5000);



// n초 후가 아니라 n초마다 코드를 실행하고 싶다면
// setInterval(function(){},5000)

// setTimeout() :: n초 후 코드 실행
// setInterval() :: n초마다 코드 실행



// Hex(16진수) 코드로 랜덤 컬러 변경
// 16진수 hex값 앞에 CSS는 #을 붙여서 사용

// Math.random() : 0 이상 1 미만의 부동 소수점 난수 생성 함수 
// Math.round : 소수점 이하 값 반올림으로 정수 변환

// 16진수로 표현하려면 0x를 표현하고자 하는 숫자 앞에 붙인다.
// ffffff : RGB 255 255 255 (white)
// ff : 255
// toString(16) : 16진수로 변환

let hexBgcChange = setInterval(function(){
  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  console.log(randomColor);
  // console.log(Math.round(Math.random()))
  count.style.backgroundColor = randomColor;
}, 1000)
