import React, { useState } from 'react';
import Comment from './Comment';

let comments = [
  {
    name : '마이콜',
    content : '꼬불꼬불 맛좋은 라면, 후루룩 쨥쨥'
  },
  {
    name : '도우너',
    content : '가루가루 고춧가루'
  },
  {
    name : '둘리',
    content : '호잇~!'
  }
]

let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    margin : '5px',
    padding : '10px 20px',
    border : '1px solid #ccc',
    borderRadius : '30px'
  },
  contentBox : {
    flexGrow : 1,
    marginLeft : '16px'
  },
  button : {
    fontSize : '24px',
    border : 'none',
    backgroundColor : 'transparent',
    cursor : 'pointer'
  },
  input1 : {
    width : '150px',
    height : '32px',
    fontSize: '15px',
    border: '0',
    borderRadius: '15px',
    outline: 'none',
    paddingLeft: '10px',
    backgroundColor: 'rgb(233, 233, 233)'
  },
  input2 : {
    width : '70%',
    height : '32px',
    fontSize: '15px',
    border: '0',
    borderRadius: '15px',
    outline: 'none',
    paddingLeft: '10px',
    backgroundColor: 'rgb(233, 233, 233)'
  }
}

const CommentList = () => {
  let [list, setList] = useState(comments);
  let [name, setName] = useState('');
  let [text, setText] = useState('');

  // 삼항연산자로 value 값이 빈 값이라면 List 추가 없이 alert
  let addComment = () => {
    name === '' || text === '' ? alert('빈 칸을 채워주세요.') : (
      // 즉시 실행 함수 (IIFE) JS문법 
      // 삼항연산자 조건이 false일 때 name, text 값이 있으면
      // 다음 함수가 즉시 실행되도록 한다.
      (()=>{
        // 첫번째 name : key값
        // 두번째 name : let [name, setName]의 초기값
        let add = {name:name, content:text};
        setList([add,...list])
        // 글추가 후 input satate 변경 함수로 비우기
        setName('')
        setText('')
      })()
    )
  }

  let deleteComment = (index) => {
    let newList = [...list];
    // splice(배경 변경할 인덱스 값, 제거할 요소의 수)
    newList.splice(index, 1)
    setList(newList)
    console.log(index)
  }

  return (
    <div>
      {
        list.map((item, i)=>{
          return (
            // 자식 comment component에 name, text이름으로 값 전달
            <Comment name={item.name} text={item.content} key={i} delete={() => deleteComment(i)} />
          )
        })
      }
      <div style={styles.wrapper}>
        <span>작성자&nbsp;&nbsp;<input value={name} onChange={(e)=>setName(e.target.value)} style={styles.input1}/></span>
        <span style={styles.contentBox}>내용&nbsp;&nbsp;<input value={text} onChange={(e)=>setText(e.target.value)} style={styles.input2}/></span>
        <button style={styles.button} onClick={addComment}>⍩⃝</button>
      </div>
    </div>
  );
};

export default CommentList;