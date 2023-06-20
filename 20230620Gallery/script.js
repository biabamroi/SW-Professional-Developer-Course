// 요소를 하나만 찾을 때는 querySelector
// class를 찾을 때는 .class 명
// ID 값을 찾을 때는 #ID 명
const images = document.querySelector('.images')
// const main = document.querySelector('main')
const items = images.querySelectorAll('.image-item')
console.log(items)