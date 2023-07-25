let btnOpen = document.querySelector('.btn-outline-danger');
let overlay = document.querySelector('.overlay');

btnOpen.addEventListener('click', function(){
  overlay.style.display = 'block';
})

document.querySelector('.btn-outline-dark').addEventListener('click', function(){
  overlay.style.display = 'none';
})