// 1. list 엘리먼트를 변수에 담아주세요
const list = document.querySelector('.list')
// 2. list 엘리먼트에서 자식요소 list__item 요소를
// querySelecorAll() 이용해서 변수 선언
const listItem = document.querySelectorAll('.list__item')
// console.log(list, listItem)

// listItem을 forEach 이용하여 item 요소들을 console.log로 보여주세요.

listItem.forEach((item)=>{
  console.log(item)
})


