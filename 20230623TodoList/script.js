const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')

addButton.addEventListener('click',()=>{
  // console.log(input.value)
  const li = document.createElement('li')
  li.innerHTML = `${input.value}
  <button class="list-delete">&#x2716</button>`
  li.classList.add('list-item')
  list.appendChild(li)
  input.value = '' // 위치 필히 확인, 마지막에 삭제해야 할 필요성
})

