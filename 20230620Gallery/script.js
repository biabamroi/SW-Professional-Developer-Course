// 요소를 하나만 찾을 때는 querySelector
// class를 찾을 때는 .class 명
// ID 값을 찾을 때는 #ID 명
const images = document.querySelector('.images')
// const main = document.querySelector('main')

// const items = images.querySelectorAll('.image-item')
// console.log(items)

// 배열 - Array.from(배열로 만들 리스트)
const items = Array.from(images.querySelectorAll('.image-item'))
// console.log(items)

// items 배열을 반복문으로 실행
// forEach = for문의 축약형, 배열길이 감지, index값도 알아서 증가
// 배열의 길이가 어떻든 알아서 길이에 맞게 반복
items.forEach((item)=>{
  // 배열 요소에서 사용자의 행동 감지
  item.addEventListener('click', ()=>{
    // 만약 현재 클릭한 요소에 active가 있다면, 
    // classlist.contains() 메소드는 현재 해당 클래스 보유 여부 판단 - true/false
    const hasClassActive = item.classList.contains('active')

    if(hasClassActive){
    // if(item.classList.contains('active')){
      // active class 제거
      item.classList.remove('active')
    }else{
      // console.log(item)
      // 모든 아이템에서 active class 제거
      items.forEach(item => item.classList.remove('active'))
      // 해당 아이템에 active 부여
      item.classList.add('active')
    }
  })
})

// classList

// 여부 판단
// classList.contains()

// class 더할 때
// classList.add()

// class 제거할 때
// classList.remove()

// class toggle할 때
// classlist.toggle()
