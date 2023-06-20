const list = document.querySelector('.list')
const listItem = list.querySelectorAll('.list-item')

// for(let i = 0; i < 4; i++){
//   console.log(i)
// }
// 반복 작업 시 유용
// [0,1,2,3].forEach((item, index)=>{
//   console.log(item, index)
// })

const char = ['a','b','c','d']
for(let i=0; i<char.length; i++){
  console.log('for문으로 돌린 결과'+char[i])
}
char.forEach((i)=>{
  console.log("forEach로 돌린 결과"+i)
})
