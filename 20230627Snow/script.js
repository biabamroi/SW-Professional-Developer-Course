const wrapper = document.getElementById('wrapper')
// global 변수, 전역 변수 : script 전체 영역에서 사용
let count = 0;

const addSnow = ()=>{

  let size = (Math.random() * (5 - 1) + 1) + 'px';
  let blur = Math.random() * (3 - 1) + 1 + 'px';

  // 1. createElement로 span 태그 생성
  const span = document.createElement('span')
  // 2. span에 snow라는 클래스 삽입
  span.classList.add('snow')


  // 최대값과 최소값 사이 수를 랜덤으로 생성하는 공식
  // MDN Math.random()
  // Math.random() * (최대값 - 최소값) + 최소값
  span.style.left = Math.random() * (window.innerWidth - 1) + 1 + 'px';
  span.style.width = size
  span.style.height = size
  span.style.opacity = Math.random();
  span.style.filter = `blur(${blur})`
  span.style.animationDelay = Math.random() * (10 - 1) + 1 + 's';
  span.style.animationDuration = Math.random() * (10 - 1) + 1 + 's';
  // let random = Math.random() // 0부터 1의 난수
  // // 최대값과 최소값 범위 지정 필요
  // function getRandom(min, max){
  //   return Math.random() * (max - min) + min;
  // }
  // console.log(getRandom(1,10))


  // 3. wrapper에 삽입 - appendChild
  wrapper.appendChild(span)

  if(count < 100){
    count++
    window.requestAnimationFrame(addSnow)
  }
}

// 안밖으로 호출해야 일하는
window.requestAnimationFrame(addSnow)
// 과부하 주의, 초당 60회 정도 반복, off 시 리소스 x
// setInterval, 리소스를 더 많이 먹는 방식

// addSnow() // 함수 실행
