let now = new Date();
let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

setInterval(function(){
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  $('.phone-time').html(hours + ':' + minutes + ':' + seconds);
}, 1000);



if(hr >= 6 && hr < 12){
  $('#wrapper').addClass('morning');
  $('.btn-list li').eq(0).addClass('on');
}else if(hr >= 12 && hr < 16){
  $('#wrapper').addClass('afternoon');
  $('.btn-list li').eq(1).addClass('on');
}else if(hr >= 16 && hr < 20){
  $('#wrapper').addClass('evening');
  $('.btn-list li').eq(2).addClass('on');
}else{
  $('#wrapper').addClass('night');
  $('.btn-list li').eq(3).addClass('on');
}



// $('.btn-list li').on('click', function(i){
//   i.preventDefault();
//   $('.btn-list li').removeClass('on');
//   $(this).addClass('on');
//   // 연구 중
//   $('#wrapper').className = $('.btn-list li a').text();
// })


$('.btn-list li').on('click', function(e){
  let backTxt = $(this).children('a').text();
  e.preventDefault();

  $('.btn-list li').removeClass('on');
  $(this).addClass('on');

  $('#wrapper').removeClass();
  $('#wrapper').addClass(backTxt);
})