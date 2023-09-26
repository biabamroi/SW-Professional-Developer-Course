import { useState } from 'react';
import './App.css';
import Box from './component/Box';

let choice = {
  rock : {
    name : 'Rock',
    img : 'https://cdn.pixabay.com/photo/2014/12/22/00/01/stone-576620_1280.png'
  },
  paper : {
    name : 'Paper',
    img : 'https://cdn.pixabay.com/photo/2013/07/13/12/34/typewriter-159878_640.png'
  },
  scissors : {
    name : 'Scissors',
    img : 'https://cdn.pixabay.com/photo/2019/06/21/22/35/vintage-4290490_640.png'
  }
}

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 01. 컴퓨터 랜덤 값 선택
  let randomChoice = () => {
    // choice object 키값(rock, paper, scissors)을 배열로 만들어주는 함수 사용
    // Object.keys() : 객체의 key 값을 뽑아서 Array로 만들어주는 함수
    let itemArr = Object.keys(choice);

    // Math.floor 소수점 이하를 버리는 함수
    // 0부터 2사이 숫자 중 랜덤 선택
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem]

    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final]
  }


  // 02. 유저랑 컴퓨터가 선택한 값 업데이트
  let play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let comChoice = randomChoice();
    setComSelect(comChoice);

    // ** 결과 state 변경 함수에 judgment 를 호출해서 유저 선택값 & 컴퓨터 선택값을 넘겨준다.
    setResult(judgment(choice[userChoice], comChoice))
  }

  
  // 03. 유저랑 컴퓨터가 선택한 값으로 누가 이겼는지 판단(조건문)
  // ** play 함수에서 넘겨준 유저, 컴퓨터 선택값을 매개변수(user, computer)로 받는다.
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
        {/* 자식 컴포넌트 Box에 props로 값 전달(title, select, result) */}
        <Box title="You" select={userSelect} result={result}/>
        <Box title="Computer" select={comSelect} result={result}/>
      </div>
      <div className="btn-list">
        {/* 각 버튼을 클릭 했을 때 play 함수에 매개변수로 choice 키 값 전달 */}
        <button type='button' onClick={()=>play('scissors')}>✌️</button>
        <button type='button' onClick={()=>play('rock')}>👊</button>
        <button type='button' onClick={()=>play('paper')}>🖐️</button>
      </div>
    </div>
  );
}

export default App;
