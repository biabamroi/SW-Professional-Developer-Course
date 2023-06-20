const list = document.querySelector('.list')
// Array.from('배열로 만들 내용') 
const listItem = Array.from(list.querySelectorAll('.list-item'))

// nodelist 배열인지 확인 필요
// console.log(listItem)
// listItem.forEach(item=>console.log(item))

// event target 사용자의 행동에 의한 
// forEach 배열로 가져와서 자동으로 해라st  
listItem.forEach(item=>{
  item.addEventListener('click',()=>{
    // console.log(item)
    // 1. 모든 요소에서 active 클래스 삭제
    listItem.forEach(item=>item.classList.remove('active'))
    // 2. 클릭한 버튼에 active 클래스 추가 
    item.classList.add('active')
  })
})


// // forEach 원형
// // let i = 0; i < array1.length; i++ 이 부분이 압축되어 들어간 것.
// const array1 = ['a','b','c'];
// array1.forEach(element=>console.log(element));
// // 익명 함수 element
// // 화살표 함수 상태에서 매개 변수가 하나 이상일 때는 필히 ()로 정의


// for(let i = 0; i < 4; i++){
//   console.log(i)
// }
// 반복 작업 시 유용
// [0,1,2,3].forEach((item, index)=>{
//   console.log(item, index)
// })


// const char = ['a','b','c','d']

// // i를 0,1,2,3으로 증가시키는 for문
// for(let i=0; i<char.length; i++){
//   console.log('for문으로 돌린 결과'+char[i])
// }

// // 배열 char 요소들 길이에 맞게 증가시킨 값을 가져옴
// // forEach문에서는 item, index라는 매개 변수 2개를 제공한다.
// char.forEach((item, index)=>{
//   console.log("forEach로 돌린 결과"+item)
//   console.log("forEach문의 index 값"+index)
// })

