import React from 'react';

let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between'
  }
}

const Comment = () => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user image" />
      </div>
    </div>
  );
};

export default Comment;