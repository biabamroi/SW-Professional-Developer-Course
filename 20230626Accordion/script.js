// 1. list 엘리먼트를 변수에 담아주세요
const list = document.querySelector('.list')
// 2. list 엘리먼트에서 자식요소 list__item 요소를
// querySelecorAll() 이용해서 변수 선언
const listItem = document.querySelectorAll('.list__item')
// console.log(list, listItem)

// listItem을 forEach 이용하여 item 요소들을 console.log로 보여주세요.
listItem.forEach((item)=>{
  // listItem에서 요소들을 꺼내와서 consolo.log()
  // console.log(item)

  // 불러온 item을 클릭할 때마다 active 클래스 추가 또는 삭제
  item.addEventListener('click',()=>{
    // item 하나만 active class를 가질 수 있다.
    listItem.forEach(e => e.classList.remove('active'))
    // item에 active 클래스를 추가 또는 삭제
    // item.classList.toggle('active')
    item.classList.add('active')
  })
})

// items.forEach((e)=>{
//   //하나만 선택되도록 기존의 효과를 지워준다.
//     e.classList.remove('active');
// })


