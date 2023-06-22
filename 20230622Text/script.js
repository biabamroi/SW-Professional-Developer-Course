const title = document.getElementById('title')
// console.log('title')
// console.log(title.textContent)  // 띄어쓰기까지, 공백도 문자로 인식
// console.log(title.innerText)
// 매개변수 - 구분자 
const chars = title.innerText.split('')  // 쪼개서 배열로
// console.log(chars)

// title.addEventListener('click',()=>{
//   title.classList.toggle('active')
// })

// 1. title 안의 문자열 삭제
title.innerText = '';

// 2. span 태그에 담아서 title에 문자열 삽입
chars.forEach(char => {
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
  }, 200)
})