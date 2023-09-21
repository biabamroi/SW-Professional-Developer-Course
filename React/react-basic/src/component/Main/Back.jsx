import React from 'react';
import './Back.css';

// 부모 컴포넌트
const Back = () => {
  return (
    <div>
      <Box layout='background' name='front-txt' />
      <Box layout='top' name='second-txt' />
    </div>
  );
};

function Box(props){
  // 조건부 랜더링
  let showBtn = props.name === 'front-txt'
  return (
    <>
      <section className={props.layout}>
        <div className={props.name}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam enim aspernatur vero, deleniti neque iusto sequi! Ea, error odit.</p>
          {
            // html 조건부로 보여줄 때
            // showBtn이 true일 때만 Button을 랜더링
            // &&(and) 우항, 좌항 둘 다 true일 경우 랜더링
            // 좌항 false일 경우 바로 false 반환 (랜더링x)
            
            // 이벤트 핸들러에 함수가 아닌 표현식이나 값을 바로 전달 했을 경우
            // 컴포넌트가 재랜더링 될 때마다 해당 값이 실행된다.
            // onClick 됐을 때 실행되게 하려면 이벤트 핸들러에 값을 함수로 전달해야 한다.
            showBtn && <button className='front-btn' type='button' onClick={()=>alert('Hello, World!')}>button</button>
          }
        </div>
      </section>
    </>
  )
}

export default Back;