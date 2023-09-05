$('input').focus(function(){
  $('.redchk').css('display', 'none');
  $('.greenchk').css('display', 'none');
  $('.inputbox').addClass('inputboxact');
  $(this).val('');
});

$('.inputbox input').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.write0').css('display', 'block');
  }else if(5 > leng){
    $('.write1').css('display', 'block');
  }else if(leng > 20){
    $('.write1').css('display', 'block');
  }else{
    $('.write2').css('display', 'block');
  }
});





$('.password').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.write3').css('display', 'block');
    $('.pw-img1').css('display', 'block');
    $('.pw-img3').css('display', 'none');
    $('.pw-img2').css('display', 'none');
  }else if(8 > leng){
    $('.pw-img2').css('display', 'block');
    $('.pw-img1').css('display', 'none');
    $('.pw-img3').css('display', 'none');
    $('.write4').css('display', 'block');
    $('.write6').css('display', 'block');
  }else if(leng > 16){
    $('.pw-img2').css('display', 'block');
    $('.pw-img1').css('display', 'none');
    $('.pw-img3').css('display', 'none');
    $('.write4').css('display', 'block');
    $('.write6').css('display', 'block');
  }else{
    $('.pw-img3').css('display', 'block');
    $('.pw-img1').css('display', 'none');
    $('.pw-img2').css('display', 'none');
    $('.write5').css('display', 'block');
  }
});



$('.password2').focusout(function(){
  var leng = $(this).val().length;
  var pwd1 = $('#pwd1').val();
  var pwd2 = $('#pwd2').val();
  if(leng == 0){
    $('.write7').css('display', 'block');
  }else if(pwd1 === pwd2){
    $('.pw-img5').css('display', 'block');
    $('.pw-img4').css('display', 'none');
  }else{
    $('.pw-img5').css('display', 'none');
    $('.pw-img4').css('display', 'block');
    $('.write8').css('display', 'block');
  }
});





$('.name').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.txt1').css('display', 'block');
  }
});

$('.year').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.txt2').css('display', 'block');
  }
});

$('.month').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.txt3').css('display', 'block');
  }
});

$('.date').focusout(function(){
  var leng = $(this).val().length;
  if(leng == 0){
    $('.txt4').css('display', 'block');
  }
});




// $('.select input[type=radio]').on('click', function(){
//   // $(this).toggleClass('radiochk');
//   if($(this).is(':checked')){
//     $(this).prop('checked', false);
//   }
// });




$('.email').focusout(function(){
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if($('.email').val() == 0){
  
  }else if($('.email').val() != regExp.val()){
    $('txt5').css('display', 'block');
  }
});