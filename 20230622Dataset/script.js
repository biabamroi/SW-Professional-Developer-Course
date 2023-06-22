const container = document.querySelectorAll('.container')

container.forEach(item => {
  // console.log(item) // 확인 과정
  // item : 부모, container
  // container[0], container[1], container[2]
  // 부모에서 bar를 찾고
  const bar = item.querySelector('.bar')   // 문서가 아니라 item에서 
  // 부모에서 number를 찾고
  const number = item.querySelector('.number')
  // console.log(bar.dataset.number) // 확인 과정

  // data-number 값을 접근할 때 dataset.number
  // data-number값 가져와서 dataNumber 할당
  const dataNumber = bar.dataset.number;
  // bar.data-numer : javascript 인지 불가
  // bar.dataset.number : javascript 인지 가능

  // number에 숫자 변경/삽입
  number.textContent = dataNumber;
  // bar 그래프의 width 값으로 퍼센트 표현
  bar.style.width = dataNumber + '%'

  // console.log(dataNumber)

  // 차오르는 그래프
  let index = 0;
  let Interval;
  setInterval(() => {
    index++
    if(index < dataNumber){
      bar.style.width = index + '%'
    }
  }, 30)
  // clearInterval(Interval)

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


