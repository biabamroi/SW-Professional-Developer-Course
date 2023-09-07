var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getMsrstnAcctoRDyrg'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'SLJe0Elsk0DOYqHIPeUB7PP2WOW3J0LjCct3gZhtNfafIAU7cyzRTDGocxAQWuLvgm2cRPKIAJPkJmUJnWO%2FrA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /* 응답 데이터 타입 */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 설정 */
// queryParams += '&' + encodeURIComponent('inqBginDt') + '=' + encodeURIComponent('20201001'); /*시작일*/
// queryParams += '&' + encodeURIComponent('inqEndDt') + '=' + encodeURIComponent('20201030'); /*종료일*/
queryParams += '&' + encodeURIComponent('daejeon') + '=' + encodeURIComponent('대전'); /* 조회할 데이터 시도 이름 설정 */
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /* 기간 */
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      // alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
      if(this.status === 200) {
        let responseData = JSON.parse(this.responseText);
        console.log(responseData);
      }
    }
};

xhr.send('');