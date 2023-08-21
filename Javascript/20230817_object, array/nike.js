// Javascript로 html 요소 생성
// createElement('태그이름')
// 생성
let h1Tag = document.createElement('h1');
// 입력
h1Tag.innerHTML = '안녕하세요!';
// 클래스
h1Tag.classList.add('hi');
// 위치
document.querySelector('.box-list').appendChild(h1Tag);


// box-list 안에 pTag로 생성
let pTag = document.createElement('p');
pTag.innerHTML = 'createElement로 p 태그 생성';
// pTag.innerText = 'hello';
pTag.classList.add('hello');
pTag.style.color = 'blue';
document.querySelector('.box-list').appendChild(pTag);