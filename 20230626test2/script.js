// 1번 

// const start = document.getElementById('start')
// const stop = document.getElementById('stop')
// const app = document.getElementById('app')

// start.addEventListener('click', (e)=>{
//   console.log(start.innerText)
//   console.log(e.currentTarget.textContent)
// })
// stop.addEventListener('click', ()=>{
//   console.log(stop.textContent)
// })



// 2번

// 1. title, plus, minus, index 변수 선언
// 2. addEventListener를 각각 버튼마다 이벤트
// 3. plus 클릭 시 1px씩 폰트 사이즈 증가
// title.style.fonsSize = `${index}px`
// 4. minus 클릭 시 1px씩 폰트 사이즈 감소
// title.style.fonsSize = `${index}px`

const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let index = 16;

// 오타...........................

plus.addEventListener('click', ()=>{
  index++
  title.style.fontSize = `${index}px`
})
minus.addEventListener('click', ()=>{
  index--
  title.style.fontSize = `${index}px`
})



// 3번

// 5. change 버튼 클릭 시 title 컬러가 변화
// - active 클래스로 제어 (추가/삭제)
// title.classList.contains('active') / true, false
// add() - 추가
// remove() - 제거
// setTimeout 사용, 1초 뒤에 변경
// console.log('변경')

const change = document.getElementById('change')

change.addEventListener('click',()=>{
  // title.classList.toggle('active') // 참, 거짓 판별
  setTimeout(()=>{
    if(title.classList.contains('active')){
      title.classList.remove('active')
      console.log('active 삭제')
    }else{
      title.classList.add('active')
      console.log('active 추가')
    }
  },1000)
})







