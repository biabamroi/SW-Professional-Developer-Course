
let body = document.querySelector('body');
let logWrap = document.querySelector('.log-wrap');
let logo = document.querySelector('.logo img');
let joinWrap = document.querySelector('.join-wrap')
let mode = document.getElementById('mode');

let hr = document.querySelectorAll('hr');
let input = document.querySelectorAll('input');
let userid = document.getElementById('userid');
let userpw = document.getElementById('userpw');






mode.addEventListener('click', function(){
  if(mode.innerText == 'DarkMode'){
    mode.innerText = 'LightMode';
    logo.src="./images/logo-dark.png";
    body.style.backgroundColor = '#151515';
    body.style.color = '#d2d2d2';
    logWrap.style.backgroundColor = '#151515';
    logWrap.style.border = '2px solid #262626';
    joinWrap.style.backgroundColor = '#151515';
    joinWrap.style.border = '2px solid #262626';
    input.forEach(e => {
      e.style.backgroundColor = '#151515';
      e.style.border = '1px solid #262626';
    });
    hr.forEach(e => {
      e.style.background = '#262626';
    })
  }else{
    mode.innerText = 'DarkMode';
    logo.src="./images/logo-light.png";
    body.style.backgroundColor = '#fafafa';
    body.style.color = '#262626';
    logWrap.style.backgroundColor = '#fff';
    logWrap.style.border = '2px solid #dbdbdb';
    joinWrap.style.backgroundColor = '#fff';
    joinWrap.style.border = '2px solid #dbdbdb';
    input.forEach(e => {
      e.style.backgroundColor = '#fff';
      e.style.border = '1px solid #dbdbdb';
    });
    hr.forEach(e => {
      e.style.background = '#dbdbdb';
    })
  }
})
