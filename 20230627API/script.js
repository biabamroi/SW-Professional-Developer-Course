// 동기 - 순차적으로 실행
// ex. 1번 줄부터 마지막 줄까지 실행

// 비동기 ex.난입
// 자신만의 실행 순서 존재
// ex. 서버에서 오는 데이터, 거리에 따라
// 전송 속도가 달라서 대기 시간이 필요하다.

// Promis 프로미스 약속

// eventLoop, browser 
// console.log('실행')
// // 1000ms = 1s
// // setInterval 
// setTimeout(()=>{
//   console.log('1초 뒤에 실행')
// },1000)
// setTimeout(()=>{
//   console.log('3초 뒤에 실행')
// },3000)
// setTimeout(()=>{
//   console.log('2초 뒤에 실행')
// },2000)
// ---------------------------------------------

// const app = document.getElementById('#app')

// // promise 안에 약속(Promise)를 담은 상태
// // promise는 비동기처리 → 동기처럼 순서를 기다리기 위해서
// let Promis = new Promise((resolve, reject)=>{ // 약속, 익명 함수, 매개 변수 순서 주의
//   setTimeout(()=>{
//     resolve('응답을 받았습니다.')
//   },2000)
// }) 
// // Promise → then을 통해 데이터를 받아오거나 catch로 에러를 받아온다.
// Promis.then(result => console.log(result)).catch(reject => console.log(reject))
// // catch 데이터를 못 받았을 때
// ---------------------------------------------

// https://jsonplaceholder.typicode.com/

let todo = fetch('https://jsonplaceholder.typicode.com/todos/1')
todo.then(response => response.json()).then(json => console.log(json))