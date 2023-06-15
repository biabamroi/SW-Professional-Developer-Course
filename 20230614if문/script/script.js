// if 조건에 따라 코드 실행 여부 결정
// 맑은 날씨 true, 비오면 false

// var weather = false;
// if(!weather){
//   alert("우산챙겨!");
// }

// 기온이 4도 이하인 경우 외투 챙기기
// var temp = 23;
// if(temp <= 4){
//   alert("외투챙겨!");
// }

// 훈련생의 점수기준 판별 프로그램
// var score = 54;
// if(score >= 60){
//   alert("합격");
// }else{
//   alert("불합격");
// }

// 100분위 점수를 학점으로 변환하는 프로그램
// var jumsu = 81;
// var hakjum;
// if(jumsu >= 90) {
//   hakjum = "A";
// }else if(jumsu >= 80){
//   hakjum = "B";
// }else if(jumsu >= 70){
//   hakjum = "C";
// }else if(jumsu >= 60){
//   hakjum = "D";
// }else{
//   hakjum = "F";
// }
// alert(hakjum);



// and 조건 연습 : 졸업 가능 여부
// 외국인의 경우 어학 점수는 반영하지 않는다.
// 외국인의 경우 어학은 영어, 국어 중 하나의 점수가 60점 이상이어야 할 때 

var fore = true; // 내국인 false, 외국인 true
var kor = 60;
var english = 58; // 어학점수 60점 이상
var credit = 120; // 120학점 이상
var enginner = true; // 취득:true, 미취득:false

if(fore == true){
  if(kor >= 60 || english >= 60){
    if(credit >= 120 && enginner){
      alert("졸업 축하합니다.");
      }else{
        alert("졸업 조건을 만족하지 못 했습니다.");
      }
    }else{
      alert("졸업 조건을 만족하지 못 했습니다.");
    }
  }else if(fore == false){
    if(kor >= 60 && english >= 60 && credit >= 120 && enginner){
     alert("졸업 축하합니다.");
    }else{
      alert("졸업 조건을 만족하지 못 했습니다.");
  }
}







