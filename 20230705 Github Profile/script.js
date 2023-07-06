// dropdown-btn을 클릭했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove

const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownMenu = document.querySelector('.dropdown-menu')
// console.log(dropdownBtn, dropdownMenu)

dropdownBtn.addEventListener('click', function(){
  dropdownMenu.classList.toggle('active');
})
// dropdownBtn.addEventListener('click', ()=>{
//   dropdownMenu.classList.toggle('active');
// })

