// var variable = "text";
// var number = "0";
// var boolean = true
// scope 변수 어디 범위

// function check () {
//   console.log(boolean)
// }

// var text = "text content"
// const app = document.getElementById('app')
// console.log(app)
// ctrl+shift+i 개발자 모드
// app.innerHTML('text')
// app.innerText('text')
// app.textContent = text;  // text만 넣는 경우 가장 빠른 



// var > ES5 버전
// 현재 ES6  -  ESNEXT

// const 변하지 않는 타겟
// let 변하는 값 

// for(let i=0; i<10; i++){
//   console.log(i)
// } // scope 범위 지정 부분 확인해서 호출하여 사용
// const text = 'text';
// console.log(text)



// 버튼을 눌렀을 때, 값이 증가한다.
// 1. 버튼을 변수에 저장하는 과정
const btnInc = document.getElementById('increase')
const btnDec = document.getElementById('decrease')
// console.log(btnInc)
// 2. number 라는 변수에 id-num 저장
const number = document.getElementById('num')   // const는 상수 : 변하지 않는 것
// console.log(num)
let incNum = 0    // 값 초기화

// btnInc 눌렀을 때 숫자 증가
btnInc.addEventListener('click', function(){
  incNum = incNum + 1;   // 초기화된 값을 변화
  // console.log(incNum)
  number.textContent = incNum;
})

btnDec.addEventListener('click', function(){
  incNum = incNum - 1;
  number.textContent = incNum;
})

