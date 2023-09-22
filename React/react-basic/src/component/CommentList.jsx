import React from 'react';
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

const CommentList = () => {
  return (
    <div>
      {
        comments.map((item, i)=>{
          return (
            <Comment name={item.name} text={item.content}/>
          )
        })
      }
    </div>
  );
};

export default CommentList;