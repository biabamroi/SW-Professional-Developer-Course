import React from 'react';

const Box = (props) => {
  return (
    <div className='box-item'>
      <h1>{props.title}</h1>
      {/* 
        null error 해결 => 조건부 렌더링
        null이 아닐 때만 값이 렌더링 되도록
      */}
      <h2>{props.select && props.select.name}</h2>
      <img src={props.select && props.select.img} alt={props.select && props.select.alt} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;