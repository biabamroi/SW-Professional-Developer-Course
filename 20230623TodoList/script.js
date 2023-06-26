// CRUD : Create Read Update Delete 
// update : 사용자 경험 개선

const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')

// add list - 리스트에 할 일을 추가하는 함수
const addList = ()=>{
    // console.log(input.value)
    // 사용자가 바로 입력할 수 있도록 포커스를 input에 잡아주는 명령
    input.focus() // 추가 후 바로 focus 이동해서 입력할 수 있게
    // if문 - 경고창, 아무것도 입력하지 않았을 때 뜨는 경고
    if(input.value.length === 0){  // input 값의 길이가 0과 같을 때 
      return alert('문자를 하나라도 입력해 주세요.')
    } // if문은 실행하면 다음으로 넘어가기 때문에 return으로 기능 정지하고 보냄
    // li 엘리먼트 생성
    const li = document.createElement('li')
    // 사용자가 입력한 input 값을 삽입
    li.innerHTML = `${input.value}
    <button class="list-delete">&#x2716</button>`
    li.classList.add('list-item')
    // list에 생성하고 가공한 li 내용을 담음
    list.appendChild(li)
    // 리셋 작업 (입력창에 입력한 내용들을 비우고(삭제) 다음 작업할 수 있게)
    input.value = '' // 위치 필히 확인, 마지막에 삭제해야 할 필요성
    saveData()
  }
  

// Enter 
input.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    addList()
  }
})

// 추가 버튼
addButton.addEventListener('click',()=> addList())


// update, delete
list.addEventListener('click',(event)=>{
  // event.target - 클릭한 요소
  // event.currentTarget - addEventListener 요소
  // 내용 check / uncheck 상태 변화
  if(event.target.tagName === 'LI'){  // 대문자 유의
    event.target.classList.toggle('checked')
    saveData()
  }
  // delete 버튼 - list 안의 자식 li 요소 삭제
  if(event.target.tagName === 'BUTTON'){
    // 현재 클릭한 delete 요소의 부모(parentElement)를 삭제
    event.target.parentElement.remove()
    saveData()
  }
})

const saveData = ()=>{
  localStorage.setItem('list', list.innerHTML)
}

const loadData = ()=>{
  list.innerHTML = localStorage.getItem('list')
}
// 
// document.addEventListener('load', ()=> loadData())

loadData()

