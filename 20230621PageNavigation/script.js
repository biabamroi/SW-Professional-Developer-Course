const container = document.querySelector('.container')
const nav = document.querySelector('.nav')
// 자식 요소들만 모아놓은 변수
const pages = container.querySelectorAll('.page')
const navItems = nav.querySelectorAll('.button')
// console.log(연결확인)
// console.log(pages[0])

// 버튼 클릭 시 버튼과 같은 index 값을 가진 page도 동일하게 active class를 갖는다.

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // console.log(item)
//     // 어떤 버튼을 누르든 active 모두 제거 - 초기화 
//     navItems.forEach(item => item.classList.remove('active'))
//     // 현재 누른 아이템에 active 클래스 부여
//     item.classList.add('active')
//   })
// })

navItems.forEach((item,index) => {
  item.addEventListener('click', () => {
    // active 제거
    navItems.forEach(item => item.classList.remove('active'))
    pages.forEach(item => item.classList.remove('active'))
    // 현재 누른 아이템 active 추가
    item.classList.add('active')
    // 현재 누른 아이템과 동일한 index값을 가진 페이지에 active 추가
    pages[index].classList.add('active')
  })
})


// for와 forEach
// // for
// for(let index = 0; index < 5; index++){
//   console.log(index)
// }

// // forEach
// const char = ['a','b','c','d','e']
// char.forEach((item,index) => console.log(item+index))


// // 기존 함수
// function func (content, element){
//   return console.log(content, element)
// } func('con','ele')

// // 화살표 함수
// const func2 = (content, element) => {
//   console.log(content, element)
// } func2('con2','ele2')