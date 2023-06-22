const bar = document.querySelector('.bar')   // 오타!!! 항상 확인!!!
const number = document.querySelector('.number')
// console.log('bar')
// data-number, dataset.number
const dataNumber = bar.dataset.number;
// number에 숫자 변경/삽입
number.textContent = dataNumber;
// bar 그래프의 width 값으로 퍼센트 표현
bar.style.width = dataNumber + '%'       // 자동완성 주의!!!
console.log(dataNumber)