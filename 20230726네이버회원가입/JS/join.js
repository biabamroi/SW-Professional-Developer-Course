let input = document.querySelectorAll('input');

input.forEach(function(input){
  input.addEventListener('focus', function(){
    this.parentNode.classList.add('border-act');
  })
})

input.forEach(function(input){
  input.addEventListener('focusout', function(){
    this.parentNode.classList.remove('border-act');
  })
})


let idveri = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;

// Essential Information
let essenInfo = '<span class="text-red">필수 정보 입니다.</span>';


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function(){
  let userId = this.value;
  let idExp = /^[a-z0-9]{5,8}$/;
  let idWarn = document.querySelector('.userid .warn');

  if(userId.length == 0){
    idWarn.innerHTML = essenInfo;
  }else if(!idExp.test(userId)){
    // 정규식에 맞지 않을 때 = 조건이 참
    idWarn.innerHTML = '<span class="text-red">5~8자의 영문 소문자만 사용 가능합니다.</span>';
  }else{
    // 위 조건에 둘 다 해당하지 않고 값을 잘 입력했을 때
    idveri = true;
    idWarn.innerHTML = '<span class="text-green">멋진 아이디네요!</span>';
  }
})

// 비밀번호 재확인에서 필요하여 전역 변수로 뺌
let userPw = document.querySelector('.userpw input');

// 비밀번호
// document.querySelector('.userpw input')
userPw.addEventListener('focusout', function(){
  // let userPw = this.value;
  let userPwVal = userPw.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

  let pwWarn = document.querySelector('.userpw .warn');
  let pwText = document.querySelector('.userpw .inputbox p');
  let pwImg = document.querySelector('.userpw .inputbox img');

  if(userPwVal.length == 0){
    pwWarn.innerHTML = essenInfo;
    pwText.innerHTML = '';
    pwImg.src = "./images/m_icon_pw_step_01.png";
  }else if(!pwExp.test(userPwVal)){
    pwWarn.innerHTML = '<span class="text-red">8~16자 영문 대소문자, 숫자, 특수문자를 사용해주세요.</span>';
    pwText.innerHTML = '<span class="text-red">사용불가</span>';
    pwImg.src = "./images/m_icon_pw_step_10.png";
  }else{
    pwveri = true;
    pwWarn.innerHTML = '';
    pwText.innerHTML = '<span class="text-green">안전</span>';
    pwImg.src = "./images/m_icon_pw_step_04.png";
  }
})


// 비밀번호 재확인
document.querySelector('.userpw-chk input').addEventListener('focusout', function(){
  let userpwChk = this.value;
  let pwChkWarn = document.querySelector('.userpw-chk .warn');
  let pwChkImg = document.querySelector('.userpw-chk .inputbox img');

  if(userpwChk.length == 0){
    pwChkWarn.innerHTML = essenInfo;
    pwChkImg.src = './images/m_icon_pw_step_02.png';
  }else if(userpwChk == userPw.value){
    pwchkveri = true;
    pwChkWarn.innerHTML = '';
    pwChkImg.src = './images/m_icon_pw_step_07.png';
  }else{
    // 입력은 했는데 .userpw value랑 일치하지 않을 때
    pwchkveri = false;
    pwChkWarn.innerHTML = '<span class="text-red">비밀번호가 일치하지 않습니다.</span>';
    pwChkImg.src = './images/m_icon_pw_step_02.png';
  }
})


// 이름
document.querySelector('.username input').addEventListener('focusout', function(){
  let userName = this.value;
  let nameExp = /^[가-힣]{2,5}$/;
  let nameWarn = document.querySelector('.username .warn');

  if(userName.length == 0){
    nameWarn.innerHTML = essenInfo;
  }else if(!nameExp.test(userName)){
    nameWarn.innerHTML = '<span class="text-red">2~5글자 사이의 한글로 입력하세요.</span>';
  }else{
    nameveri = true;
    nameWarn.innerHTML = '';
  }
})


// 생년월일
// HTML에서 class name 부여
let birthList = document.querySelectorAll('.birth-item');
// console.log(birthList)
// NodeList(3) [input#year.birth-item, select#month.birth-item, input#date.birth-item]
// let year = document.getElementById("year").value;
// let month = document.getElementById("month").value;
// let date = document.getElementById("date").value;
function birthWarnTxt (text){
  document.querySelector('.birth .warn').innerHTML = `<span class="text-red">${text}</span>`;
}

birthList.forEach(function(item){
  item.addEventListener('focusout', function(){
    let year = birthList[0].value;
    let month = birthList[1].value;
    let date = birthList[2].value;
    // console.log(year,month,date);
    let now = new Date(); // 한국 표준시
    let nowstamp = now.getTime(); // 1970
    now = now.getFullYear(); // 재할당

    let birth = new Date(year,month,date);
    birth = birth.getTime(); // 재할당

    if(year.length != 4){
      birthWarnTxt('태어난 년도 4자리를 정확하게 입력하세요.');
    }else if(month.length == 0){
      birthWarnTxt('태어난 월을 선택하세요.');
    }else if(date.length == 0 || date > 31 || date <= 0){
      birthWarnTxt('태어난 일(2자리) 정확하게 입력하세요.');
    }else if(isNaN(year * month * date)){
      birthWarnTxt('생년월일을 다시 확인해주세요.');
    }else if(now - year > 100){
      birthWarnTxt('정말이세요?');
    }else if(nowstamp<birth){
      birthWarnTxt('미래에서 오셨군요?');
    }else{
      bitrhveri = true;
      birthWarnTxt('');
    }
  })
})


// 성별
let genderInputs = document.querySelectorAll('.gender .inputbox');
// console.log(genderInputs)

genderInputs.forEach(function(input){
  input.addEventListener('click', function(){
    genderInputs.forEach(function(item){
      item.classList.remove('btn-primary');
      item.querySelector('input[type="radio"]').checked = false;
    })
    this.classList.add('btn-primary');
    this.querySelector('input[type="radio"]').checked = true;
    genderveri = true;
  })
})


// 본인 확인 이메일


// 휴대전화
