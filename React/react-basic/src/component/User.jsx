import React from "react";

function User(){
  let name = 'Kai';
  return(
    <div>
      <h1>안녕하세요, {name === 'Kai' ? name : '?'}님!</h1>
    </div>
  )
}

export default User;