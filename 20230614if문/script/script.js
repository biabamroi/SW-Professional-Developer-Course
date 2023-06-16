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
var jumsu = 81;
var hakjum;
if(jumsu >= 90) {
  hakjum = "A";
}else if(jumsu >= 80){
  hakjum = "B";
}else if(jumsu >= 70){
  hakjum = "C";
}else if(jumsu >= 60){
  hakjum = "D";
}else{
  hakjum = "F";
}
// alert(hakjum);



// and 조건 연습 : 졸업 가능 여부
// 외국인의 경우 어학 점수는 반영하지 않는다.
// 외국인의 경우 어학은 영어, 국어 중 하나의 점수가 60점 이상이어야 할 때 

var fore = true; // 내국인 false, 외국인 true
var kor = 58;
var english = 90; // 어학점수 60점 이상
var credit = 120; // 120학점 이상
var enginner = true; // 취득:true, 미취득:false


// 내가 짠 코드
// if(fore == true){
//   if(kor >= 60 || english >= 60){
//     if(credit >= 120 && enginner){
//         alert("졸업 축하합니다.");
//       }else{
//         alert("졸업 조건을 만족하지 못 했습니다.");
//       }
//     }else{
//       alert("졸업 조건을 만족하지 못 했습니다.");
//     }
//   }else if(fore == false){
//     if(kor >= 60 && english >= 60 && credit >= 120 && enginner){
//       alert("졸업 축하합니다.");
//     }else{
//       alert("졸업 조건을 만족하지 못 했습니다.");
//   }
// }


// 기본 버전
// 조건절 condition 부분 () 
// if(fore){
//   // 외국인 졸업 요건
//   if(credit >= 120 && enginner){
//     alert('졸업 가능');
//   }else{
//     alert('졸업 불가능');
//   }
// }else{
//   // 내국인 졸업 요건
//   if(english >= 60 && credit >= 120 && enginner){
//     alert('졸업 가능');
//   }else{
//     alert('졸업 불가능');
//   }
// }

// 외국인 어학 점수 반영 업그레이드

// if(fore){
//   if((kor >= 60 || english >=60) && credit >= 120 && enginner){
//     alert('졸업 가능');
//   }else{
//     alert('졸업 불가능');
//   }
// }else{
//   if(english >= 60 && credit >= 120 && enginner){
//     alert('졸업 가능');
//   }else{
//     alert('졸업 불가능');
//   }
// }





// 부동산
// 새 직장을 얻어서 직장 근처에 집을 얻고 싶다.

// 직장으로부터 반경 10km 이내 (필수) - 거리
// 주말마다 여가 생활할 수 있는 집 (주차장)(필수) - true or false
// 엘리베이터 여부 (필수)
// 전용면적 20평 이상이거나 주변 상가가 반경 1km 이내 (옵션)

// if(직장 거리 && 주차 && 엘베 && (면적 || 상가 거리)){}

// var company = 14;
// var parking = true;
// var elevator = false;
// var area = 21;
// var shop = 0.8;

// 객체형 변수, 배열
var house = [
  {
    company: 14,
    parking: true,
    elev: false,
    area: 21,
    shop: 0.8
  },
  {
    company: 9,
    parking: true,
    elev: true,
    area: 24,
    shop: 1.5
  },
  {
    company: 2,
    parking: true,
    elev: false,
    area: 22,
    shop: 0.2
  },
  {
    company: 8,
    parking: true,
    elev: true,
    area: 21,
    shop: 0.5
  },
  {
    company: 12,
    parking: true,
    elev: true,
    area: 22,
    shop: 0.3 
  }
];

// if(house[0].company <= 10 && house[0].parking && house[0].elev && 
//   (house[0].area >=20 || house[0].shop <=1)){
//   alert("계약 가능");
// }else{
//   alert("계약 불가능");
// }








// for 문법 --------------------------------------------------------- 중요
// for(시작값; 조건식; 증감식){}
// i는 0으로 시작해서 반복할 때마다 1씩 증가하는데
// i가 5보다 작은 동안 계속 반복한다.
var x = "";

for(i=0 ; i<5 ; i++){
  x = x + "*";
}

// n번 반복하는 for문 공식
// for(i=0; i<n; i++){반복할 내용}
// 1부터 100까지 자연수를 모두 더한 값을 구하는 프로그램
// 1+2+3+...+98+99+100 = ?

var sum = 0;

for(i=1; i<=100; i++){
  sum = sum + i;
}

// alert(sum);

// 0+1  1+2  3+3  6+4  10+5  15+6 ...   =  5050




// 5부터 10까지의 자연수 총 합계를 구해보시오.
// 5+6+7+8+9+10 = ?
var sum1 = 0;
for(i=5; i<=10; i++){
  sum1 = sum1 + i;
}
// alert(sum1);


// 10+9+8+7+6+5 = ?
var sum2 = 0;
for(i=10; i>=5; i--){
  sum2 = sum2 + i;
}
// alert(sum2);


// "10/9/8/7/6/5"
var sum3 = "";
for(i=10; i>=5; i--){
  if(i !== 5){
    sum3 = sum3 + i + "/";
  }else{
    sum3 = sum3 + i;
}}
// alert(sum3);



// 이중 for문-------------------------------------------------
// 피라미드
var pyramid = "";
for(i=1; i<=5; i++){
  var chng = "";
  for(j=1; j<=i; j++){
    chng = chng + "ㅁ";
  }
  pyramid = pyramid + chng + "\n";   // 줄바꿈
}
// alert(pyramid);



// 101 102 103 104 105 106 ... 109 110 호실 번호를 만들어야 한다.
// 9층 건물이고 각 층에는 10개의 가구가 존재한다.

// var result = [
//   [101,102 ]
//   [201, ]
//   []
// ]

var res = [];

for(i=1; i<=9; i++){
  for(j=1; j<=10; j++){
    // i+"0"+j <= j가 10보다 작을 때 
    // i+j <= j가 10보다 작지 않을 때
    if(j<10){
      res.push(i+"0"+j);
    }else{
      res.push(""+i+j);
    }
  }
}
// alert(res);



// "12345 / 678910"

var result = "";
for (i=1; i<=10; i++){
  if(i>=6){
    break;
  }else{
    result = result + i + " ";
  }
}
// alert(result);



// 1 2 - 4 5 ... 99 100
// 3의 배수는 뺄 것
var result = "";
for(i=1; i<=100; i++){
  if(i%3 == 0){  // 3의 배수 
    continue;
  }else{
  result = result + i + "";
  }
}
// alert(result);










// breadcrumb ----------------------------------------------- 실무 고려
// 홈 >product>XM12 홈페이지 대메뉴 페이지

var filename = [
  ["ceo.html","map.html","prize.html"],
  ["app.html","mobile.html","memory.html"]
];
var menuname1 = ["회사소개","제품소개"];
var menuname2 = [
  ["CEO인사말","오시는길","수상실적"],
  ["일반가전","모바일","메모리"]
];

// string 글자 / location 주소 / len 개수
// alert( location.href );
var currentname = location.href;      // http://aaa.com/a/index.html
currentname = currentname.split("/"); // ["http:","","aaa.com","a","index.html"]
var len = currentname.length;         // 5
currentname = currentname[len-1];     // currentname[5-1] (4) 'index.html'

// alert(currentname);

var depth1;  // 기피
var depth2;

for(i=0; i<filename.length; i++){
  for(j=0; j<filename[i].length; j++){
    if(currentname == filename[i][j]){
      depth1 = i;
      depth2 = j;
      break;
    }
  }
}

// alert(depth1+","+depth2);

if(depth1 != undefined && depth2 != undefined){  // undefined가 아닐 때
  var bc_1 = "<span class='caret-right'></span> <a>"+ menuname1[depth1] +"</a>";
  var bc_2 = "<span class='caret-right'></span> <a href='"+currentname+"'>"+ menuname2[depth1][depth2] +"</a>";
  document.getElementById("bc_1").innerHTML = bc_1;
  document.getElementById("bc_2").innerHTML = bc_2;
}





// F12 개발자 모드
// ≡ hamburger
// : (점3개) kebab
// … sushi
// ▦ chocolate or bento
// ▼ caret
// ＞ (두꺼운모양) chervron








