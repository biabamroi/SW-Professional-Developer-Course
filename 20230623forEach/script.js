const app = document.getElementById('app')
const list = ['a','b','c','d','e']

// 1. p 태그 생성
// 2. p 태그 안에 item 문자열 삽입
// 3. app 안에 p 삽입

list.forEach((item, index) => {
  const p = document.createElement('p')
  p.textContent = item
  app.appendChild(p)
})
console.log(app)


// index 출력
// list.forEach((item, index) => {
//   console.log(item, index)
// })


// forEach로 했을 때
// list.forEach((item)=>{
//   console.log(item)
// })

// lenght 확인용
// console.log(list.length)

// for로 했을 때
// for(let index=0; index<list.length; index++){
//   console.log(list[index])
// }

