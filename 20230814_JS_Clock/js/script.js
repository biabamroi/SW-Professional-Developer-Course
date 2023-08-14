let time = document.querySelector('.time');

let date = new Date();
let hours = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");
let seconds = String(date.getSeconds()).padStart(2, "0");

setInterval(function(){
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000)



function morningT(){
  document.getElementById('logo').src = './images/logo_b.png';
  document.body.style.backgroundImage = "url('./images/bg_morning.jpg')"; 
  document.getElementById('phone-hand').src = './images/phone_morning.png';
  document.querySelector('.main-text p').style.color = 'black';
  time.style.color = 'black';
}

function afternoonT(){
  document.getElementById('logo').src = './images/logo_b.png';
  document.body.style.backgroundImage = "url('./images/bg_afternoon.jpg')"; 
  document.getElementById('phone-hand').src = './images/phone_afternoon.png';
  document.querySelector('.main-text p').style.color = 'black';
  time.style.color = 'black';
}

function eveningT(){
  document.getElementById('logo').src = './images/logo_b.png';
  document.body.style.backgroundImage = "url('./images/bg_evening.jpg')"; 
  document.getElementById('phone-hand').src = './images/phone_evening.png';
  document.querySelector('.main-text p').style.color = 'black';
  time.style.color = 'black';
}

function nightT(){
  document.body.style.backgroundImage = "url('./images/bg_night.jpg')";
  document.getElementById('logo').src = './images/logo_w.png';
  document.getElementById('phone-hand').src = './images/phone_night.png';
  document.querySelector('.main-text p').style.color = 'white';
  time.style.color = 'white';
}


if(6 < hours < 11){
  morningT();
}else if(12 < hours < 15){
  afternoonT();
}else if(16 < hours < 19){
  eveningT();
}else{
  nightT();
}


let morning = document.querySelector('.morning');
let afternoon = document.querySelector('.afternoon');
let evening = document.querySelector('.evening');
let night = document.querySelector('.night');

morning.addEventListener('click', morningT);
afternoon.addEventListener('click', afternoonT);
evening.addEventListener('click', eveningT);
night.addEventListener('click', nightT);
