const list = document.querySelector('.list')
// Array.from('배열로 만들 내용') 
const listItem = Array.from(list.querySelectorAll('.list-item'))

// nodelist 배열인지 확인 필요
// console.log(listItem)
// listItem.forEach(item=>console.log(item))




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

