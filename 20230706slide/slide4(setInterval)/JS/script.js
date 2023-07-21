// 현재 인덱스를 저장하는 변수 (초기값 0)
// 커렌트, 렝스 약자 사용
let cur = 0;
// .slide-item 클래스 요소 총 개수 저장
let len = $('.slide-item').length;

for(i=0; i<len; i++){
  $('#dots').append('<div></div>');
}