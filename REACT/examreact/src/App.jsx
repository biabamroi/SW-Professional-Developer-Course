import './App.css'

// 자원 재활용을 위한 용도 
// 오픈 소스 
// 컴포넌트는 앞 글자 대문자

import Button from './components/Button.jsx'

// components/Heading.jsx
// export default function Heading()
// h1 태그
// name 속성을 받아서 화면에 렌더링
// import Heading from './components/Heading.jsx'

import Heading from './components/Heading.jsx'

import Flex from './components/Flex.jsx'

function App(){
  return (
    <>
    {/* React.Fragment */}
      <div>
        {/* 원래는 형제 태그를 감싸야 함 */}
      <h1>Hello, World!</h1>
      <p><b>React 입문</b></p>
      {/* self close */}
      
      <Heading name="안녕하세요" color="gray"/>

      <Flex>

      <Button title="1번" color="red" size="16px" border="black" bgc="#9de8ffbb" right="1rem"/>
      <Button title="2번" color="green" size="18px" border="black" bgc="#9de8ffbb" right="1rem"/>
      <Button title="3번" color="blue" size="24px" border="black" bgc="#9de8ffbb" right="1rem"/>
      
      </Flex>
      </div>
    </>
  )
}

export default App
