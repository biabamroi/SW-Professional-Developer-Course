import React from 'react';
import Box from './Box';

function Practice(){
  // 변수에 태그 작성
  let element = <h1>Hello, World!</h1>;
  // HTML 코드 : return() 안에 작성해야 한다.
  // return() 안에는 무조건 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.
  // 태그를 병렬로 기입하면 안 된다.
  return(
    // class -> className
    // 리액트에서 class를 Javascript class 문법으로 인식하기 때문
    <div className='Wrapper'>
      {/* 태그에서 스타일 속성 지정할 때
      style ={{key : value}} 형태로 작성
      // key : 스타일명 : value : '스타일값'
      key값은 낙타표기법 background-color -> backgroundColor */}
      <h1 className='text' style={{backgroundColor:'grey'}}>text test</h1>
    
      {/* 변수를 넣을 때는 중괄호{}로 데이터 바인딩 */}
      {element}
    
      {/* 클로징 태그가 반드시 있어야 한다. */}
      {/* component 사용 */}
      <Box></Box>
      {/* self-closing </> */}
      <Box/>
    </div>
  )
}

export default Practice;