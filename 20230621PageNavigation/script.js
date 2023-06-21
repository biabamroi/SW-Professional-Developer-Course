const container = document.querySelector('.container')
const pages = container.querySelectorAll('.page')
const nav = document.querySelector('.nav')
const navItems = nav.querySelectorAll('.button')
// console.log(연결확인)

// 버튼 클릭 시 버튼과 같은 index 값을 가진 page도 동일하게 active class를 갖는다.

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // console.log(item)
    // 어떤 버튼을 누르든 active 모두 제거 - 초기화 
    navItems.forEach(item => item.classList.remove('active'))
    // 현재 누른 아이템에 active 클래스 부여
    item.classList.add('active')
  })
})

