
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
  let timeValue = +timeElem.value

  // 결과 계산 = 근무시간 x 최저시급
  result = timeValue * salary;
  resultElem.textContent = result
})
// console.log(result)

