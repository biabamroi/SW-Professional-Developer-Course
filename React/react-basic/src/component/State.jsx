import React from 'react';
import { useState } from 'react';

// state : 상태 
// state : 현재 컴포넌트 상태를 의미한다.
// React에서 상태를 관리하기 위한 Hook 중에 하나 
// state를 사용해서 상태를 변경하면,
// React가 변경된 상태를 감지하여 자동으로 컴포넌트를 재랜더링한다.

// useState()
// Javascript 변수 다루듯 값을 직접 수정할 수 없다.
// useState() 함수를 이용해서 값을 변경해야 한다.

// 1. import {useState} from 'react';
// 2. let [변수 이름, set 변수 이름] = useState(초기값)

const State = () => {
  // let num = 0;
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState('너를 위한 과거');
  let [name, setName] = useState(['홍길동','김철수','이영희','이순신','왕세종']);

  let [bg, setBg] = useState('white');
  let changeBg = ()=>{
    // 삼항연산자로 현재 배경색이 white라면 다른 색으로 바꾸고, 아니라면 white로 바꿔라.
    let newBg = bg === 'white' ? 'yellow' : 'white';
    setBg(newBg);
  };

  // count : 해당 상태값을 의미하는 변수
  // setCount : 해당 상태값을 변경하는 함수
  // 이 함수를 호출할 때 변경된 값을 인수로 전달한다.
  // (0) : 초기상태값 / 컴포넌트가 처음 랜더링될 때 사용되는 값
  return (
    <div style={{backgroundColor:bg}}>
      <button onClick={changeBg}>배경색 변경</button>
      <br />
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click</button>

      <h2>{title}</h2>
      <button onClick={()=>{
        // state는 등호로 상태를 변경할 수 없다.
        // state 변경 함수에는 이름 앞에 set을 붙여준다.
        // state 변경 함수로 값을 변경해야 html이 재랜더링 된다.
        // state 변경 함수는 state가 가지고 있는 값을 비교해서
        // 같은 값이면 변경하지 않고, 다른 값이면 state함수 호출 값으로 변경한다.
        let titleCopy = [...title];
        titleCopy = '나를 위한 현재';
        // console.log(title === titleCopy)
        setTitle(titleCopy)
      }}>제목 변경</button>

      <h3>{name}</h3>
      <button onClick={()=>{
        let nameCopy = [...name];
        nameCopy[0] = '전우치';
        setName(nameCopy)
      }}>이름 변경</button>

      
    </div>
  );
};

export default State;