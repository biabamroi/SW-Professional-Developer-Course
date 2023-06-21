const pointer = document.getElementById('pointer')
// console.log(pointer)

window.addEventListener('mousemove',(event)=>{
  // console.log(event.clientX, event.clientY)
  // console.log('마우스 X값 : ' + event.clientX + ' 마우스 Y값 : ' + event.clientY)
  // ` 억음 부호 backtick
  // console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값 : ${event.clientY}`)
  pointer.style.top = `${event.clientY}px`;
  // 기존 방식 : pointer.style.top = event.clientX + 'px';
  pointer.style.left = `${event.clientX}px`;
})

