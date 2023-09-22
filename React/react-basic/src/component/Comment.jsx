import React from 'react';

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
  img : {
    width : '50px',
    height : '50px',
    borderRadius : '50%'
  },
  contentBox : {
    flexGrow : 1,
    marginLeft : '16px',
    lineHeight : '50%'
  },
  button : {
    fontSize : '32px',
    border : 'none',
    backgroundColor : 'transparent',
    cursor : 'pointer'
  }
}

// 부모 컴포넌트로 부터 받아온 값 바인딩 props
// props.부모가 넘겨 준 이름
const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user image" />
      </div>
      <div style={styles.contentBox}>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
      <button style={styles.button} type='button' onClick={props.delete}>✘</button>
    </div>
  );
};


export default Comment;