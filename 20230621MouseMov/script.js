const app = document.getElementById('app')
const pointer = document.getElementById('pointer')
// console.log(pointer)

window.addEventListener('mousemove',(event)=>{
  // console.log(event.clientX, event.clientY)
  // console.log('마우스 X값 : ' + event.clientX + ' 마우스 Y값 : ' + event.clientY)
  // ` 억음 부호 backtick
  // console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값 : ${event.clientY}`)
  pointer.style.top = `${event.clientY - (pointer.offsetHeight/2)}px`;
  // 기존 방식 : pointer.style.top = event.clientX + 'px';
  pointer.style.left = `${event.clientX - (pointer.offsetWidth/2)}px`;
  // ↑ event 객체에서 사용자의 x값을 가져와서 pointer의 가로값(36px)을 반으로 나눈 18px를 뺀다.
  // ex) x = 100일 경우, 100-18, 82px, 커서는 위치가 82px, 결과적으로는 중앙으로 최종값


  // 커서 포인터와 오브젝트의 위치 파악 → 가운데 정렬 위한 수식 추가
  
  // clientWidth & Height 의 경우 margin, border 사이즈 무시
  // border(1px solid white) 포함 36px 사이즈 인식 불가, 좌우상하 1px씩 제외한 34px만 인식
  // console.log(pointer.clientWidth)

  // offserWidth는 border 사이즈도 포함해서 가져온다.
  // console.log(pointer.offsetWidth) 
})



let posX;  // undefined, Position X (정의되지 않은 상태)
let posY;  // undefined, Position Y

// 클릭할 때마다 생성
window.addEventListener('click', (event) => {
  // console.log('click')
  posX = event.clientX  // 가져와서 할당
  posY = event.clientY

  const bubble = document.createElement('span')
  bubble.classList.add('bubble')
  bubble.classList.add('active')
  app.appendChild(bubble)

  bubble.style.top = posY - (bubble.offsetHeight/2) +'px'
  bubble.style.left = posX - (bubble.offsetWidth/2) +'px'

  setTimeout(()=>{
    bubble.remove()
  }, 1000)  
  // bubble.remove() 시간을 1000으로 주면 1초 뒤에 사라짐

  console.log(bubble)
})

// 자동완성 주의!!! 오타 주의!!!
// html 정적인 문서를 javascript로 동적인 문서
