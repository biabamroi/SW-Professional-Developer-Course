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
  // 커서 포인터와 오브젝트의 위치 파악 → 가운데 정렬 위한 수식 추가
  // console.log(pointer.clientWidth)
  // console.log(pointer.offsetWidth) 
})

