// Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

// const promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{console.log('3초뒤')},3000)
// })

// promise.then(result=>result).catch(error=>console(error)).then(()=>{})

// async - await 잡힐 때까지 다음 구문으로 넘어가지 않고 기다렸다가 실행
// const promise = async ()=>{
//   try { // 받으려고 시도해서 실패하면
//     const getData = await fetch('주소')
//     const reult = await getData.json()
//   } catch (error) { // 실패 결과를 보여라
//     console.log(error)
//   }
// }





// ESNEXT
/**
 * import / export
 * export default는 1개의 값만 
 */

// const add = (number)=>{
//   return number + number
// }
// 함수를 다른 프로젝트에서도 쓰고 싶을 때
// 잘라내서 다른 script 파일로 --> app copy.js

// import add from './add.js'

// console.log(add(2)) // 4

// multiply
// 매개변수 number를 받아서 *2한 값을 반환
// 곱하기 함수를 파일로 만들어서 export 시키고
// app.js로 불러와서 실행하고 결과를 보여주세요.

// const multiply = (number)=>{
//   return number *2
// }

// import multiply from './multiply.js'

// console.log(multiply(3)) // 6



// util.js
// 두 가지 이상 함수를 불러올 때

// import {add, multiply} from './util.js'
// 이름 바꿀 때, as 
// ex. add as plus 부를 때 console.log(plus(2))

// console.log(add(4)) // 8
// console.log(multiply(5)) // 10

// * 전체 묶음 가져올 때
import * as calc from './util.js'
// 임의 이름 지정

console.log(calc.add(6)) // 12
console.log(calc.multiply(7)) //14
// 자식 요소처럼 임의 이름 '.''함수이름'(출력할 수)

// 네트워크 비용 감소,,, 


// util.js
// 함수 - double을 export
// 매개변수 - number
// double은 매개변수 number * number
// app.js 결과 

// export const double = (number)=>{
//   return number * number
// }

console.log(calc.double(2))


// node.js
// nodejs.org/ko
// 브라우저 밖으로 자바
// lTS 장기간 유지보수 보안 안정화
// 최신버전 변환 변동 
// 설치 후 
// git bash 에 node --version 버전 뜨면 잘 된 것.
// npm --version
// 자바스크립트 번들러 
// webpack.kr
// 뭉탱이 효율적으로 가져와서 쓰게끔 
// 프론트엔드 3대장 
// https://yozm.wishket.com/magazine/detail/1261/
// vite https://ko.vitejs.dev/guide/
// reatc.dev/learn  // Next.js React 프레임워크
// parcel ko.parceljs.org
// 뷰, 엥글러 

// folder - git bash - li -al 
// npm create vite@latest exam
// vite 최신버전을 가져와서 설치하겠다 
// 설치하려는 프레임워크 선택 - 화면 안 움직여도 화살표 숫자대로
// 해당 폴더에서 npm install

