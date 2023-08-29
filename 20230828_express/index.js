// Express 라이브러리 사용 서버 구축
// 폴더 생성 -> cd 해당 폴더 경로 이동
// cd, cd .., ls

// npm init
// npm install express 

// express로 서버 만드는 문법
const express = require('express');
const app = express();

// port : 컴퓨터에는 외부 네트워크랑 통신을 할 수 있는 
// 여러 개의 구멍이 있는데, 그중에 내가 몇번째 port로 접속할 건지 
// listen 함수 사용하여 서버를 열어준다.
// listen(para1, para2)
// para1 : 서버를 띄워줄 포트 번호 작성
// para2 : (콜백함수 안에 작성) 실행할 코드

// 서버 : 요청한 정보를 보내주는 프로그램
// HTTP 요청 방식 네 가지
// 1. GET (읽기)
// 2. POST (쓰기)
// 3. PUT (수정)
// 4. DELETE (삭제)

// Node.js 
// Javascript runtime 
// Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니라
// HTML 요소를 조작하기 위해 만들어진 언어
// Javascript 언어는 브라우저가 해석한다. (크롬, 사파리, 엣지, 파이어폭스 등)
// 크롬 브라우저 V8 엔진을 개발하면서 브라우저 환경 외 다른 환경에서도 사용할 수 있도록
// Node.js 를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산처리가 필요한 서비스를 개발해야 할 경우
//       속도가 떨어지고 라이브러리도 부족하다.
//  → 보통 파이썬 처리 




// 내 컴퓨터에서 7000포트로 진입 
// :  localhost:7000(port number)
// 콜백함수 안에 있는 코드 실행 

app.listen(7000, function(){
  console.log('7000번 포트');
})


// 폴더 내 모든 정적 파일 제공 (JS, CSS, images, fonts)
app.use(express.static(__dirname));



// 서버에 GET 요청으로 정보 받아오기
// 유저가 localhost:7000으로 접속하면 send, sendFile() 속 내용을 보여준다.
// app.get('경로', 콜백함수 function(requests, response){ 실행할 코드 })
// requests(요청 보낼 때 사용), response(응답 받을 때 사용)
// slash / 는 메인 경로 (localhost:7000)

app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html');
})

// 항상 변경 사항 적용 후 서버 재시작 ctrl + c
// 'localhost:7000/test' 로 접속시 실행 할 코드
app.get('/test', function(requests, response){
  response.send('Test 페이지 입니다.');
})


// 서버 종료 -> ctrl + c 
// 서버 재실행 자동화
// -g(global)로 컴퓨터 전역에서 이용 가능하게 설치해 달라는 명령어
// npm install -g nodemon
// node index.js -> nodemon index.js

// powershell 보안 오류
// 에러 원인 : Restricted일 때 허가된 script외에 막아버리기 때문에 에러가 발생한다.
// powershell 관리자 권한으로 실행
// executionpolicy
// set-executionpolicy unrestricted
// y


// /login 경로로 접속했을 때 login.html 

app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html');
})


// /map 경로로 접속했을 때 map.html
// localhost:7000/map 으로 접속시 보여줄 화면 => map.html
// map.html : 카카오 지도 OPEN API
app.get('/map', function(requests, response){
  response.sendFile(__dirname + '/map.html');
})


// POST
// body-parser : 요청 데이터 해석을 도와주는 라이브러리
// 설치 -----------------------------------------------------------
// npm install body-parser
// 사용 선언
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


// input 태그 값을 서버에 전송하려면 input 태그에 name='' 속성 추가

// app.post('', function(){})
// input에 작성된 내용은 requests 파라미터가 가지고 있다.
app.post('/add', function(requests, response){
  response.send('전송완료!')
  console.log(requests.body)
  // console.log(requests.body.id)
  // console.log(requests.body.pw)
})

// 서버한테 정보를 보내주는 코드
// 서버에 보낸 정보를 영구 저장하려면 DB(Data Base)에 저장해야 한다.
