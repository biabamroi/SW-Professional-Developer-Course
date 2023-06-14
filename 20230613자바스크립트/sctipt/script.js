
document.getElementById("apple").onclick = function(){
  alert("누르지 말랬잖아!");
}


// 주어;
// 주어.속성;
// 주어.주어.속성;
// 주어.속성.속성;

// 주어.명령어();
// 명령어 = 메소드, 함수
// 주어.함수(재료);

// 길동아;
// 홍길동.성별;
// 길동.왼팔.두께;
// 길동.신체조건.키 = 180;

// 길동.노래해(k-pop);
// 길동.노래해(); 괄호 필수

// window.close();

// window / document / location(문서의 주소 관장)


// 대소문자 구분 필수
// 구문 끝 세미콜론(;)
// 객체, 속성, 메소드, 함수의 구분은 마침표(.) 연산자
// 문자열은 따옴표(""'')
// 스크립트는 쓰여진 순서대로 실행
// 다수 공백 무시

// 자바스크립트는 컴파일이 필요 없는 인터프리터 언어이다.
//    자바, C, 파이썬 등은 컴파일 필요 
//   0 1 기계어 - 어셈블리어 CPU 명령어 - 컴파일러 (번역)
// 자바스크립트는 그 어떤 플랫폼이라도 브라우저만 있으면 ㅇㅋ

// alert("안녕하세요 \'저\'는 \"홍길동\"입니다.")
// 역슬래시 \ 를 붙여서 따옴표 사용 

// 줄바꿈은 \n 캐리지 리턴 \r
// alert("안녕하세요\n
// \'저\'는 \"홍길동\"입니다.");




// 변수 variables 변할 수 있는 Data를 담는 그릇

// var 만들 변수 이름;

// var aaa;  // 변수 생성
// aaa = 3;  // 변수 값
// alert(aaa); // 변수 대입 확인
// var aaa=3; alert(aaa);
// var aaa="3"; 문자열

// 논리적인 데이터 

// var a = 3;
// var b = c;
// var c = a=B;

// alelt(c);

// var a = "안녕";
// var b = "hello";
// var c = a=B;

// NaN : Not a Number 에러 메시지

// alelt(c문자열);




// 배열(array)
// index number 0,  1,  2,  3  번째 순서
// var arr = [20, 35, 40, 50];   
// var arr = [];
// var arr = Arry(4); // 4칸짜리 배열을 만듦

// var arr = [];  // 개별 지정 
// arr[0] = 20;
// arr[1] = 35;

// alert(arr[0]);




// var arr = [175, 78, "남자", false, null];

// alert( "그의 키는 "+arr[0]+"cm 입니다." );
// alert( "그의 몸무게는 "+arr[1]+"kg 입니다." );
// alert( "그의 성별은 "+arr[2]+ " 입니다." );

// if(arr[3]){
//   alert( "그는 기혼입니다." );
// }else{
//   alert( "그는 미혼입니다." );
// }



// 객체형 변수
var hhe = {
  height: 175, 
  weight: 78, 
  gender: "남자", 
  marriage: false, 
  house: null
};

alert( "그의 몸무게 : "+hhe.weight );






// 로또 (임시, 중복 적용 x)

// var lotto = [];
// for(i=0; i<6; i++){
//   var rand = Math.floor(Math.random()*(45-1+1)+1);
//   lotto[i] = rand;
// }

// alert(lotto);



// 주사위 

// function dice(min,max) {
//   return Math.floor(Math.random()*(max-min+1)+min);
// }
// alert( dice(1,6) );


// function dice(min,max) {
//   var a = Math.floor(Math.random()*(max-min+1)+min);
// }
// alert();




// 이중 배열
// 5층 건물, 1~4층 3개의 원룸, 5층은 주인 세대

// var lenthouse = [
//   [101호, 102호, 103호], 
//   [201호, 202호, 203호], 
//   [301호, 302호, 303호], 
//   [401호, 402호, 403호],
//   [501호] 
// ];

// var lenthouse = [
//   ["전지현", "김태희", "정지훈"], 
//   ["차승원", "슈가", "RM"], 
//   ["정우성", "박성웅", "주지훈"], 
//   ["아이유", "유재석", "손석구"],
//   ["강동원"] 
// ];

// var floor;
// var ho;

// for(i=0; i<5; i++){
//   for(j=0; j<lenthouse[i].length; j++){
//     if(lenthouse[i][j] == "박성웅"){
//       floor = i+1;
//       ho = j+1;
//       break;
//     }
//   }
// }

// alert( "박성웅은 "+floor+"0"+ho+"호에서 발견되었습니다.");




