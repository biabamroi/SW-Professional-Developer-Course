const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
console.log(addButton)

addButton.addEventListener('click',()=>{
  console.log(input.value)
  input.value = ''
})

