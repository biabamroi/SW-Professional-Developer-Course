import React from 'react';
import './Box.css';

const Box = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img src="https://cdn.pixabay.com/photo/2014/12/22/00/01/stone-576620_1280.png" alt="Rock" />
      <h2>Win</h2>
    </div>
  );
};

export default Box;