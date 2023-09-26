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
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 유저랑 컴퓨터가 선택한 값 업데이트
  let play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgment(choice[userChoice], comChoice))
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
  let judgment = (user, com) => {
    // user가 이겼는지, computer가 이겼는지
    // 어떤 값을 이용해서 판단할 건지 결정
    // 사용자가 rock, computer가 scissors면 사용자 win, computer lose
    // 사용자가 선택한 값, 컴퓨터가 선택한 값 비교
    if (user.name === com.name) {
      return 'tie';
    } else if (user.name === 'Rock') return com.name === 'Scissors' ? 'win' : 'lose';
    else if(user.name === 'Paper') return com.name === 'Rock' ? 'win' : 'lose';
    else if(user.name === 'Scissors') return com.name === 'Paper' ? 'win' : 'lose';
  }

  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You" select={userSelect} result={result}/>
        <Box title="Computer" select={comSelect} result={result}/>
      </div>
      <div className="btn-list">
        <button type='button' onClick={()=>play('scissors')}>✌️</button>
        <button type='button' onClick={()=>play('rock')}>👊</button>
        <button type='button' onClick={()=>play('paper')}>🖐️</button>
      </div>
    </div>
  );
}

export default App;
