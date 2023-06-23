// CRUD : Create Read Update Delete 
// update : 사용자 경험 개선

const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')

const addList = ()=>{
    // console.log(input.value)
    input.focus() // 추가 후 바로 focus 이동해서 입력할 수 있게
    if(input.value.length === 0){
      return alert('문자를 하나라도 입력해 주세요.')
    }
    const li = document.createElement('li')
    li.innerHTML = `${input.value}
    <button class="list-delete">&#x2716</button>`
    li.classList.add('list-item')
    list.appendChild(li)
    input.value = '' // 위치 필히 확인, 마지막에 삭제해야 할 필요성
  }
  
input.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    addList()
  }
})

addButton.addEventListener('click',()=> addList())

list.addEventListener('click',(event)=>{
  // event.target // 부모 요소 중에 이벤트 발생한 것만
  // event.currentTarget // 이벤트 걸린 것만
  if(event.target.tagName === 'LI'){  // 대문자 유의
    event.target.classList.toggle('checked')
  }
  if(event.target.tagName === 'BUTTON'){
    event.target.parentElement.remove()
  }
})

