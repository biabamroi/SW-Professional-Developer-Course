let label = document.querySelector('label');
let chkImg = document.querySelectorAll('.checkbox-img');

for(let i=0; i < chkImg.length; i++){
  chkImg[i].addEventListener('click', function(){
    this.classList.toggle('checked');
  })
  if(chkImg[i].classList.contains('checked')){
    chkImg.checked = true;
  }else{
    chkImg.checked = false;
  }
}

let total = document.querySelector('.total');
let agree = document.querySelectorAll('.agree');

total.addEventListener('click', function(){
  for(let i=0; i < chkImg.length; i++){
    chkImg[i].classList.add('checked');
  }
  agree.checked = true;

  // let len = $('.agree .checkbox-img').length;
  // let chklen = $('.agree .checked').length;
  // let unchk = len - chklen;

  if(  == 0){
    for(let i=0; i < chkImg.length; i++){
      chkImg[i].classList.remove('checked');
    }
    agree.checked = false;
  }
})




// // .agree 내부 checkbox가 모두 체크 상태라면,
// // 모두 동의 버튼도 체크 상태로 변경
// // 하나라도 체크되지 않은 값이 있다면 모두 동의 버튼 언체크

// $('.agree label').on('click', function(){
//   let len = $('.agree .checkbox-img').length;
//   let chklen = $('.agree .checked').length;
//   // console.log(len, chklen)
//   let unchk = len - chklen;
  
//   // 조건이 참이라면,
//   // .total label .checkbox-img checked class add
//   // .total label input checkbox checked true
//   // 조건이 참이 아니라면 
//   // .total label .checkbox-img checked class remove
//   // .total label input checkbox checked removeAttr
//   if(unchk == 0){
//     $('.total label .checkbox-img').addClass('checked');
//     $('.total label input[type="checkbox"]').attr('checked', true); 
//   }else{
//     $('.total label .checkbox-img').removeClass('checked');
//     $('.total label input[type="checkbox"]').removeAttr('checked'); 
//   }
// })




// // 확인 버튼을 클릭했을 때 필수사항(2)을 모두 체크했는지 확인
// // 모두 체크했으면 submit()
// // 하나라도 체크하지 않은 게 있다면 submit()을 막고
// // .req-alert 텍스트를 보여준다.

// $('#submit').on('click', function(e){
//   e.preventDefault();
//   let req = $('.req').length;
//   let chkreq = $('.req .checked').length;
//   // console.log(req, chkreq);
//   let unchk = req - chkreq;
//   // req 개수에서 체크되지 않은 개수를 뺀 값

//   if(unchk == 0){
//     $('#form1').submit();
//   }else{
//     e.preventDefault();
//     $('.req-alert').css('visibility', 'visible');
//   }
// })


// // 취소 버튼 클릭했을 때 네이버 사이트로 이동
// $('#cancel').on('click', function(){
//   location.href = 'https://www.naver.com';
// })