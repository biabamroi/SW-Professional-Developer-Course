const number = document.querySelector('.number')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const list = document.getElementById('list')

let index = 0;
let timerId;

startBtn.addEventListener('click',() => {
  index = 0;
  timerId = setInterval(()=>{
    index++
    number.textContent = index;
  },100)
})

stopBtn.addEventListener('click',()=>{
  clearInterval(timerId)
  const li = document.createElement('li')
  li.textContent = index
  list.appendChild(li)
})

// let index = 0;
// // 1000 milliseconds - 1 second
// setInterval(()=>{
//   index++
//   // console.log(index)  // 콘솔 로그에서 수 증가 확인
//   number.textContent = index;
//   // console.log(index)  // 브라우저에서도 수 증가 확인

// },100)

