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