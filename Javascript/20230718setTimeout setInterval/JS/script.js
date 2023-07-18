let count = document.querySelector('.count');

// n초 후에 코드 실행하는 함수 setTimeout()

setTimeout(() => {
  count.classList.add('is-active');
  // console.log('창 사라졌다');
  // 함수를 변수 선언하여 가져와서 클리어로 멈춤
  // clearInterval(hexBgcChange);
  clearInterval(rgbBgcChange);
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


// let hexBgcChange = setInterval(function(){
//   let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
//   console.log(randomColor);
//   // console.log(Math.round(Math.random()))
//   count.style.backgroundColor = randomColor;
// }, 1000)



// RGB 값으로 랜컴 컬러 변경
// 최솟값, 최댓값을 지정하고 그 사이에서 랜덤한 값(정수)을 만드는 함수

// rand라는 함수에 최소, 최대 값을 매개변수로 받는다.

// Math.random() : 0 이상 1 미만의 부동 소수점 난수 생성 함수 
// Math.round : 소수점 이하 값 반올림으로 정수 변환

// (max - min + 1) 최소, 최대 값 범위 내에서 랜덤한 값을 얻기 위한 코드
// (255 - 0 + 1) + 0 = 256
// 1을 더해주지 않으면 255미만이기 때문에 254까지만 랜덤 수로 가져올 수 있어서
// (20 - 10 + 1) + 10 = 21 / 20

function rand(min, max){
  return Math.round(Math.random() * (max-min+1)+min);
}

let cho = document.querySelector('.cho');
let index = cho;
index = 5;

let rgbBgcChange = setInterval(function(){
  let r = rand(0,255);
  let g = rand(0,255);
  let b = rand(0,255);
  // count.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  count.style.backgroundColor = `rgb(${r},${g},${b})`;

  index--;
  count.textContent = index+'초마다 배경색 바꾸기';

}, 1000)
