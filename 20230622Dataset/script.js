const container = document.querySelectorAll('.container')

container.forEach(item => {
  // console.log(item)
  const bar = item.querySelector('.bar')   // 문서가 아니라 item에서 
  const number = item.querySelector('.number')
  // console.log(bar.dataset.number)
  const dataNumber = bar.dataset.number;
  number.textContent = dataNumber;
  bar.style.width = dataNumber + '%'
})





// -------------------------------------------------------------------
// querySelector는 한 번만 처리하므로 다중 작업 시 재작업 필요

// const bar = document.querySelector('.bar')     // 오타!!! 항상 확인!!!
// const number = document.querySelector('.number')
// console.log('bar')

// // data-number, dataset.number
// const dataNumber = bar.dataset.number;
// // number에 숫자 변경/삽입
// number.textContent = dataNumber;
// // bar 그래프의 width 값으로 퍼센트 표현
// bar.style.width = dataNumber + '%'       // 자동완성 주의!!!

// console.log(dataNumber)


