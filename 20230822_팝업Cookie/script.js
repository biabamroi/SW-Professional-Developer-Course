// Cookie 
// 텍스트 형태의 문자열로 저장됨.
// 1. 클라이언트 : Cookie
// 2. 서버 : Cookie, section

// 쿠키 저장 허용 여부 => 정보가 서버에 저장
// 사용자가 해당 사이트에서 어떤 행동을 했는지 
// Cookie : 일정 기간 동안 데이터값을 브라우저 내부에 값 저장
// 쿠키 저장 방식 : name(이름) = value(값) 방식 저장

// 개발자 도구 → Application → Cookies(쿠키)

// 만료기간을 넣어서 쿠키가 자동 만료되도록 코드 작성(UTC 기준)
// setCookie, getCookie 함수 생성
// 1. setCookie : 쿠키값을 설정한느 함수
// 2. getCookie : 쿠키값을 가져오는 함수

// localstorage라는 이용해서 구현할 수 

function setCookie(name, value, hours){
  // 빈 문자열로 변수 초기화 => 쿠키 만료 시간 담을 그릇
  let expires = '';
}

// 만약 hours라는 값이 있다면 (true)
if(hours){
  let date = new Date();
  // hour(시간) * 60(분) * 60(초) * 1000 (밀리초)
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
}