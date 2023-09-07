var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'SLJe0Elsk0DOYqHIPeUB7PP2WOW3J0LjCct3gZhtNfafIAU7cyzRTDGocxAQWuLvgm2cRPKIAJPkJmUJnWO%2FrA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* 응답 데이터 타입 설정 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 설정 */
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('대전'); /* 조회 할 데이터 시도 이름 설정*/
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 데이터 기간 */

xhr.open('GET', url + queryParams);

xhr.onreadystatechange = function () {
  if (this.readyState == 4) { // 서버에 응답 완료 상태를 확인하는 코드
    if(this.status === 200) { // HTTP 상태 코드 : 200번대 (성공)
      // 서버로부터 받은 JSON 형식의 문자열 데이터를 Javascript 객체로 변환
      // responseText : 객체가 서버로부터 응답받은 문자열이 담긴 변수
      let responsData = JSON.parse(this.responseText);
      // console.log(responsData.response.body.items);

      // responsData에서 원하는 데이터만 추출해서 html 표기
      if(responsData.response.body.items) {
        let items = responsData.response.body.items;
        console.log(items)
        let dataDisplay = document.getElementById('data');
        for(let i=0; i<items.length; i++) {
          let item = items[i];

          let dataItem = document.createElement('div');
          dataItem.innerHTML = item.cityName + ' 미세먼지 : ' + item.pm10Value;
          dataDisplay.appendChild(dataItem);
        }
      }
    } else {
      console.log('HTTP 요청 실패' + this.status);
    }
  }
};

xhr.send('');