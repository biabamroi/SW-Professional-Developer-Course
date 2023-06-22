const title = document.getElementById('title')
// console.log('title')
// console.log(title.textContent)  // 띄어쓰기까지, 공백도 문자로 인식
// console.log(title.innerText)
// 매개변수 - 구분자 
const chars = title.innerText.split('')  // 쪼개서 배열로
// () 내부 세부 내용 찾아봐야 할 듯 
// console.log(chars)

// title.addEventListener('click',()=>{
//   title.classList.toggle('active')
// })

// 1. html에 있는 title 안의 문자열 삭제
title.innerText = '';

// 2. span 태그에 담아서 title에 javascript로 생성한 문자열 삽입
chars.forEach((char, index) => {
  // console.log(chars)
  // title.innerText = char    // 마지막 글자 m 출력
  // span element 생성
  const span = document.createElement('span')
  // class 'char' 추가 
  span.classList.add('char')
  // 생성된 span 태그에 char 문자 삽입
  span.textContent = char
  // title에 자식 요소로 문자가 담긴 span 태그 삽입
  title.appendChild(span)
  // console.log('span')

  setTimeout(() => {
    span.classList.add('active')
  }, 200 * index)
})

// setTimeout은 순차적으로 실행되는 것이 아니라
// 자신이 갖고 있는 Timer에 맞게 실행 타이밍을 가져간다.
// 비동기 함수
// setTimeout(() => {console.log('첫 번째 setTimeout')}, 300)
// setTimeout(() => {console.log('두 번째 setTimeout')}, 100)
// setTimeout(() => {console.log('세 번째 setTimeout')}, 200)

