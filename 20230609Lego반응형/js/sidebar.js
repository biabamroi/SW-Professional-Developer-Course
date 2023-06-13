const fai = document.querySelector('.fai');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

fai.addEventListener('click', function(){
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
})

sidebarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
})


// const sidebarMenuButton = document.querySelector('.gnb-icon-button')

// const sidebar = document.querySelector('.sidebar')
// const sidebarOverlay = document.querySelector('.overlay')

// function openSidebar() {
//   sidebar.classList.add('is-active');
//   sidebarOverlay.classList.add('is-active');
// }

// sidebarMenuButton.addEventListener('click', openSidebar)

// function closeSidebar() {
//   sidebar.classList.remove('is-active')
//   sidebarOverlay.classList.remove('is-active')
// }

// sidebarOverlay.addEventListener('click', closeSidebar)