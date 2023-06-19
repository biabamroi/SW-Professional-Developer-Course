
// 최저시급 DOM
const salaryElem = document.getElementById('salary')
// 최저시급 content 값
let salary = +salaryElem.textContent  // parseInt 정수로 바꿔줌, 축약어는 +
// console.log(salary)
// console.log(typeof salary) // 타입이 뭐냐 - string 문자열


// 결과 DOM
const resultElem = document.getElementById('result')
// 결과 content 값
let result = resultElem.textContent
// console.log(result)


// 계산 버튼
const actionElem = document.getElementById('action')
actionElem.addEventListener('click', () => {
  // 근무시간
  const timeElem = document.getElementById('time')
  // 숫자일 경우 +를 붙여서 변환
  // paraInt(value) string -> number 변환
  // == 같다. === 같다(타입 체크, 같은 형식 체크)
  let timeValue = +timeElem.value 

  // 결과 계산 = 근무시간 x 최저시급
  result = timeValue * salary;
  resultElem.textContent = result   // innerText, textContent 최적화
})
// console.log(result)



// ES5
// function func(number, text) {
//   return console(number, text);
// }

// ES6+, ESNEXT(미래형)     --- ECMAScipt 단체 
// const func = (number, text) => console.log(number, text)  // 축약

// var 예기치 못한 상황 유발, 오류 발생 우려가 있어 점차 사용하지 않는 추세
// let 변할 수 있는 값, 내용
// const 변할 수 없는 값, 내용

// console.log() 확인용
// console.log(typeof variable(변수명))
// number, string, boolean(참/거짓) 등 타입 체크
// 타입 자료형 - 자료의 형태 - number, string, boolean, object...

// addEventListener - 이벤트 청취, 관찰
// 사용자가 특정 동작을 했을 때 
// addEventListener('click', function(){})
// mousemove, scroll, resize, mouseover, mouseleave, mouseenter...
// touch event
