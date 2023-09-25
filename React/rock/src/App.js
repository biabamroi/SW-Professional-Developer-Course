import { useState } from 'react';
import './App.css';
import Box from './component/Box';

let choice = {
  rock : {
    name : 'Rock',
    img : 'https://cdn.pixabay.com/photo/2014/12/22/00/01/stone-576620_1280.png',
    alt : 'rock'
  },
  paper : {
    name : 'Paper',
    img : 'https://cdn.pixabay.com/photo/2013/07/13/12/34/typewriter-159878_640.png',
    alt : 'paper'
  },
  scissors : {
    name : 'Scissors',
    img : 'https://cdn.pixabay.com/photo/2019/06/21/22/35/vintage-4290490_640.png',
    alt : 'scissors'
  }
}

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, SetComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 유저랑 컴퓨터가 선택한 값 업데이트
  let play = () => {

  }

  // 컴퓨터 랜덤값 선택
  let randomChoice = () => {
    // object key값을 배열로 만들어서 랜덤으로 선택
    // keys() : 객체의 key값을 뽑아서 Array로 만들어 주는 함수
    let itemArr = Object.keys(choice);
    // Math.floor로 소수점 이하를 버리고 random으로 0부터 2사이에 있는 랜덤 값 
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem]

    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final]
  }

  // 조건문으로 유저, 컴퓨터 중 누가 이겼는지 판단
  let judgment = () => {

  }

  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      <div className="btn-list">
        <button type='button' onClick={()=>{}}>✌️</button>
        <button type='button' onClick={()=>{}}>👊</button>
        <button type='button' onClick={()=>{}}>🖐️</button>
      </div>
    </div>
  );
}

export default App;
