// 1초마다 5라는 값을 1씩 감소시킨다. 5 4 3 2 1
// 카운트가 0이 됐을 때는 감소하는 걸 멈춘다.

// let count = 5;

// let timer = setInterval(() => {
//   count = count - 1;
  // console.log(count)

  // let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  // document.querySelector('.count').style.backgroundColor = randomColor;
  // document.querySelector('.num').innerHTML = count;

  // if(count===0){
  //   clearInterval(timer);
    // var opacity = 0;
    // var fadeOut = setTimeout(function(){
    //   if(opacity<=1){
    //     document.querySelector('.count').style.opacity = opacity;
    //     opacity += 0.1;
    //   }else{
    //   }
    // },900)
//   }
// }, 1000);






// 1부터 10까지 count plus
let plusCount = 1;

let plusTimer = setInterval(function(){
  plusCount = plusCount + 1;
  document.querySelector('.num').innerHTML = plusCount;

  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randomColor;

  // 조건문으로 count가 10이 되면
  // count plus stop
  // 박스가 화면 상에서 사라지게 한다.
  if(plusCount==10){
    clearInterval(plusTimer);
    document.querySelector('.count').classList.add('is-active');
  }
},1000)
