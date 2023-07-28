// label 클릭 했을 때
// 클릭된 label의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  // 클릭된 label의 자식인 .checkbox-img class에
  //  checked 라는 class가 포함되어 있다면 
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked 라는클래스가 있을 때
    $(this).children("input[type='checkbox']").attr('checked', true);
  } else {
    $(this).children("input[type='checkbox']").removeAttr('checked');
  }
})


// .total을 체크하면 .agree 올 체크
// .tatal을 언체크하면 .agree 전부 언체크

// .total .checkbox-img가 .checked 클래스를 가지고 있다면,
// .agree 안에 있는 .checkbox-img에 checked class add
// .agree 안에 있는 input type checkbox를 checked true 

// .total .checkbox-img가 .checked 클래스를 가지고 있지 않다면,
// .agree 안에 있는 .checkbox-img에 checked class remove
// .agree 안에 있는 input checkbox를 checked false

$('.total label').on('click', function(){
  // 조건식 $('.total label')의 자식인 ('.checkbox-img')에 ('.checked')가 있는가?
  if($(this).children('.checkbox-img').hasClass('checked')){
    // 참이면(있으면) $('.agree')에 ('.checkbox-img')를 찾아서 ('checked')를 추가해 줘라.
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  }else{
    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', false);
  }
})


// .agree 내부 checkbox가 모두 체크 상태라면,
// 모두 동의 버튼도 체크 상태로 변경
// 하나라도 체크되지 않은 값이 있다면 모두 동의 버튼 언체크

$('.agree label').on('click', function(){
  let len = $('.agree .checkbox-img').length;
  let chklen = $('.agree .checked').length;
  // console.log(len, chklen)
  let unchk = len - chklen;
  
  // 조건이 참이라면,
  // .total label .checkbox-img checked class add
  // .total label input checkbox checked true
  // 조건이 참이 아니라면 
  // .total label .checkbox-img checked class remove
  // .total label input checkbox checked removeAttr
  if(unchk == 0){
    $('.total label .checkbox-img').addClass('checked');
    $('.total label input[type="checkbox"]').attr('checked', true); 
  }else{
    $('.total label .checkbox-img').removeClass('checked');
    $('.total label input[type="checkbox"]').removeAttr('checked'); 
  }
})