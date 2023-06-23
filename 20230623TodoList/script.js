// CRUD : Create Read Update Delete 

const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')

addButton.addEventListener('click',()=>{
  // console.log(input.value)
  if(input.value.length === 0){
    return alert('문자를 하나라도 입력해 주세요.')
  }
  const li = document.createElement('li')
  li.innerHTML = `${input.value}
  <button class="list-delete">&#x2716</button>`
  li.classList.add('list-item')
  list.appendChild(li)
  input.value = '' // 위치 필히 확인, 마지막에 삭제해야 할 필요성
})

list.addEventListener('click',(event)=>{
  // event.target // 부모 요소 중에 이벤트 발생한 것만
  // event.currentTarget // 이벤트 걸린 것만
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked')
  }
})

