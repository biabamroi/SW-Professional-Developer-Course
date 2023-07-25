// 0번 버튼 클릭했을 때
// 0번째 tab-item한테 blue 클래스 추가
// 0번째 tab-content한테 show 클래스 추가

// $('.tab-item').eq(0).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-item').removeClass('show');
//   $(this).addClass('blue');
//   $('.tab-content').eq(0).addClass('show');
// })

// 코드를 확장성 있게 작성해야 
// 반복문을 이용하여 .tab-item class length만큼 반복
for(let i=0; i < $('.tab-item').length; i++){
  $('.tab-item').eq(i).on('click', function(){
    $('.tab-item').removeClass('blue');
    $('.tab-content').removeClass('show');

    $(this).addClass('blue');
    $('.tab-content').eq(i).addClass('show');
  })
}









// $(function(){
//   $('.tab-content > div').hide();
//   $('.tab-item a').click(function () {
//     $('.tab-content > div').hide().filter(this.hash).fadeIn();
//     $('.tab-item a').removeClass('active');
//     $(this).addClass('active');
//     return false;
//   }).filter(':eq(0)').click();
// });