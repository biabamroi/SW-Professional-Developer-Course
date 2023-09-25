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
  let [comSelect, SetComSelect] = useState(null);
  let [result, setResult] = useState('');

  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      <div className="btn-list">
        <button type='button'>✌️</button>
        <button type='button'>👊</button>
        <button type='button'>🖐️</button>
      </div>
    </div>
  );
}

export default App;
