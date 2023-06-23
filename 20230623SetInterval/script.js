const number = document.querySelector('.number')

let index = 0;
// 1000 milliseconds - 1 second
setInterval(()=>{
  index++
  // console.log(index)  // 콘솔 로그에서 수 증가 확인
  number.textContent = index;
  // console.log(index)  // 브라우저에서도 수 증가 확인
  
},1000)

