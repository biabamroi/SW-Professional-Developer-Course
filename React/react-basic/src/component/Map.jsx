import React from 'react';

// map() 함수 
// 코드를 간결하고 가독성 있게 유지하는데 유용하다.
// 모든 Array(배열) 뒤에 사용할 수 있다.
const Map = () => {
  let num = [1,2,3,4,5];
  // let arrPlus = num.map(()=>num+1)
  // console.log(num)
  // console.log(arrPlus)

  // num 제곱근
  let newArr = num.map((num)=>{
    // 제곱 구하는 함수 Math.pow()
    return Math.pow(num, 2)
  })
  console.log(newArr)

  return (
    <div>
      {
        // map((para1, para2)=>{})
        // para1 : 배열 반복 값
        // para2 : 배열 인덱스 번호
        [1,2,3].map((item, index)=>{
          return (
            <div key={index}>
              <div>배열 값 : {item}</div>
              <div>배열 인덱스 : {index}</div>
            </div>
          );
        })
      }

      <br />

      {
        // console.log 두 번 찍히는 이유 -> React.StrictMode 때문(index.js)
        [1,2,3,4,5].map((num,i)=>{
          // console.log(num)
          return (
            <span key={i}>
              <span>{num}</span>
            </span>
          )
        })
      }

      <br />
      <br />

      {
        // 배열 속 문자를 대문자로 변환
        ['kim', 'lee', 'park', 'bebe', 'kang'].map((str, i)=>{
          return (
            <div key={i}>
              <div>소문자 {str} → 대문자 {str.toUpperCase()}</div>
            </div>
          )
        })
      }

      <br />

      {
        // 객체 속성값 추출
        [
          {
            name : 'picachu',
            age : 3
          },{
            name : 'firy',
            age : 1
          },{
            name : 'mu',
            age : 7
          }
        ].map((info,i)=>{
          return (
            <div key={i}>
              <div>Pokemon : {info.name}({info.age})</div>
            </div>
          )
        })
      }

      <br />

      {
        [1,2,3,4,5].map((num, index)=>{
          return num + index
        })
      }
    </div>
  );
};

export default Map;