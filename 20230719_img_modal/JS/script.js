// open-btn click 시 .modal-box, .overlay fadeIn()

$('.open-btn').click(function(){
  // fadeIn(), fadeOut()
  // jQuery에서 animation 효과를 만드는 메서드
  $('.modal-box').fadeIn();
  $('.overlay').fadeIn();
  // $('.overlay').addClass('is-active');
})

// modal-close click 시 .modal-box, .overlay fadeOut() 
$('.modal-close').click(function(){
  $('.modal-box').fadeOut();
  $('.overlay').fadeOut();
})


// 사용자가 클릭한 이미지를 모달창으로 띄우는 코드
// .modal-list img를 클릭했을 때
// 클릭된 이미지의 src, alt값을 가져온다.
// 속성값을 가져올 때는 attr이라는 메서드를 사용한다.
$('.modal-list img').click(function(){
  let imgSrc = $(this).attr('src');
  let imgAlt = $(this).attr('alt');

  // 클릭된 요소의 src, alt값이 담긴 변수를 
  // .img-modal-wrqpper img src, alt 값으로 넣어준다.
  $('.img-modal-wrapper img').attr({
    // 오브젝트 형태 중괄호
    src : imgSrc,
    alt : imgAlt
  })

  // .img-modal-box를 fadeIn()
  $('.img-modal-box').fadeIn();
  $('.overlay').fadeIn();
})

// .img-modal-btn click 시 .img-modal-box, .overlay fadeOut()
$('.img-modal-btn').click(function(){
  $('.img-modal-box').fadeOut();
  $('.overlay').fadeOut();
})