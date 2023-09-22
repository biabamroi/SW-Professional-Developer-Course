import React from 'react';

let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : '0 20px',
    border : '1px solid #ccc',
    borderRadius : '16px'
  },
  img : {
    width : '50px',
    height : '50px',
    borderRadius : '50%'
  },
  contentBox : {
    flexGrow : 1,
    marginLeft : '16px'
  }
}


const Comment = () => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user image" />
      </div>
      <div style={styles.contentBox}>
        <h3>User name</h3>
        <p>Content</p>
      </div>
      <button type='button'>🆇</button>
    </div>
  );
};


export default Comment;