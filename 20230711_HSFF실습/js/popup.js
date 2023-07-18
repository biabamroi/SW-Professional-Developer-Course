let popupBtn = document.querySelector('.close-btn button');

// javascript에서 기본 제공하는 함수
// n초 후 코드 실행
// setTimeout : 파라미터(매개변수)를 두 개 받아서 
// 첫 번째는 콜백 함수, 두 번째는 ms 단위 
// setTimeout(funtion(){}, 5000) 5초


// popup 떴다가 5초 후 자동 제거 
// setTimeout(function(){
//   document.querySelector('.popup').style.display = 'none';
// }, 5000)


// popupBtn 클릭 시 5초 후 popup창 사라지게 하는 코드
popupBtn.addEventListener('click', function(){
  // document.querySelector('.popup').style.display = 'none';
  setTimeout(function(){
    document.querySelector('.popup').style.display = 'none';
  }, 5000)
})


// 쿠키를 이용한 시간 설정으로
// 팝업창 일정시간 동안 보이지 않게 하기 
// 사용자가 팝업창을 그냥 닫았는지
// 하루 열지 않기에 체크하고 닫았는지 확인 필요
// setCookie00() : 00시 기준으로 쿠키값 초기화
// setCookie24() : 함수 호출 시간 기준 24시간 후 쿠키값 초기화





// style copy 2
// let popup = document.querySelector('.popup');
// let popupBtn = document.querySelector('.popup-btn');

// popupBtn.addEventListener('click', function(){
//   popup.style.display = 'none';
// })


