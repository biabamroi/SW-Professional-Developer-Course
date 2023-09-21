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
            showBtn && <button className='front-btn' type='button'>button</button>
          }
        </div>
      </section>
    </>
  )
}

export default Back;