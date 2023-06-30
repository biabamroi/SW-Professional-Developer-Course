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

// 싱글 페이지 애플리케이션 SPA : 1개의 페이지에서 모두 함.
// CSR 클라이언트 사이드 렌더링, SSR 서버 사이드 렌더링
// Client Side Rendering 고객 위치에서 렌더링
// Server Side Rendering 서버에서 렌더링하고 던짐
// 네이버 같은 검색엔진들이 제대로 못 읽고 감 → NEXTJS
// 구글은 전체 페이지 실행될 때까지 기다렸다가 읽고 감 

// 웹 컴포넌트 - YOUTUBE

function App(){
  return (
    <>
    {/* React.Fragment */}
      <div>
        {/* 원래는 형제 태그를 감싸야 함 */}
      <h1>Hello, World!</h1>
      {/* <p><b>React 입문</b></p> */}
      {/* self close */}
      
      {/* <Heading name="안녕하세요" color="gray"/> */}

      <Flex>

      {/* <Button title="1번" color="red" size="16px" border="black" bgc="#9de8ffbb" right="1rem"/>
      <Button title="2번" color="green" size="18px" border="black" bgc="#9de8ffbb" right="1rem"/>
      <Button title="3번" color="blue" size="24px" border="black" bgc="#9de8ffbb" right="1rem"/> */}
      
      <Button title="1번" primary/>
      {/* <Button title="1번" primary={true}/> */}
      <Button title="2번" secondary/>
      <Button title="3번"/>
      
      </Flex>
      </div>
    </>
  )
}

export default App


// 개발 - 번들러 - 프로덕션 배포
// vit webpack vercel 등등
//  소스 완성 상태에서 git bash 에서
// npm run build 
// - dist 폴더 // 서버를 통해서 열어야 함
// npm run preview (미리보기)
// netlify 업로드 add new (깃) 등
// online 배포하기 쉬운 곳 
