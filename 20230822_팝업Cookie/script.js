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
  // 빈 문자열로 변수 초기화 => 쿠키 만료 시간 담을 변수
  let expires = '';
  
  // 만약 hours라는 값이 있다면 (true)
  if(hours){
    // date라는 변수 안에 현재 시간을 가지는 Date 객체를 생성
    let date = new Date();
    
    // date 값을 현재 시간 + hours(ms) 더한 값으로 set 한다.
    // 쿠키 만료시간이 hours 더한 시간만큼 뒤로 설정
    
    // 시간을 밀리초(ms)로 변환하는 공식
    // hour(시간) * 60(분) * 60(초) * 1000 (밀리초)
    // Javascript에서 시간을 다룰 때 일반적으로 밀리초(ms)로 계산한다.
    // Date 객체가 밀리초(ms) 단위로 시간을 나타내기 때문
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
    
    // ; (세미콜론)
    // 쿠키 설정은 문자열 네임과 벨류로 구성되는데,
    // 각각 옵션과 값을 세미콜론으로 구분한다.
    // toUTCString() : Date 객체의 시간 => UTC 형태의 문자열로 변환
    // 쿠키 만료시간을 표준화된 방식으로 변환
    expires = '; expires' + date.toUTCString();
  }

  // "; path=/" : 쿠키가 어떤 경로에서 유효하게 할 건지 경로 설정
  // 경로를 설정할 때 /(slash)만 사용하면 현재 도메인의 모든 경로에서 쿠키가 유효하다.
  // /shopping으로 slash 다음 값을 작성할 경우, 해당 경로에서만 쿠키가 유효하다.
  document.cookie = name + '=' + (value || '') + expires + "; path=/";
}


// 특정 이름의 쿠키 값을 가져오는 함수
function getCookie(name){
  // name Equal
  // 쿠키 이름 = 값 사이에 Equal(=) 
  // name = value
  // 쿠키이름 = 쿠키의 이름과 일치하는 문자열인지 확인
  let nameEqu = name + '=';

  // 쿠키의 네임과 벨류값은 세미콜론으로 구분된다.
  // 현재 페이지의 쿠키 문자열을 ;(세미콜론) 기준으로 
  // 값을 쪼개서 배열로 만들어 준다.
  let cookies = document.cookie.split(';');

  // cookies 라는 배열을 순회하면서 쿠키값을 찾는다.
  for(let i=0; i < cookies.length; i++){
    // 현재 순회중인 쿠키 문자열을 cookie라는 변수에 담는다.
    let cookie = cookies[i];
  }
}