let boxList = document.querySelector('.box-list');

let products = [
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e90af51-c6cd-4426-ad31-5f34ac7df0ee/%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-fwdJDzm0.png',
    title : '나이키 줌 보메로 5 프리미엄',
    price : '219,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2554affc-8e73-4a3d-98a8-4b4a98d67a3e/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-e1FKsCkm.png',
    title : '나이키 덩크 로우 프리미엄',
    price : '139,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b95ae5a4-a237-4e16-87ea-a7d23fa2541c/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-og-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-NhOqw8IO.png',
    title : '에어 조던 1 로우 OG',
    price : '169,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3c24388-9a45-44e2-95c7-8f99d38bd882/tc-7900-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-2rIhOi40.png',
    title : '나이키 TC 7900',
    price : '139,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76274d81-023f-4c0e-82bf-25ff919fe399/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EC%8B%A0%EB%B0%9C-f3lJbRsL.png',
    title : '나이키 덩크 로우',
    price : '139,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e979778-83a8-4ddb-b39a-d678a69efb0b/p-6000-%EC%8B%A0%EB%B0%9C-lH2N4mEX.png',
    title : '나이키 P-6000',
    price : '129,000 원',
    size : ['230','240','250','260']
  }
]

{/* <div class="box-item">
    <img src="" alt="">
    <div class="sho-info">
      <h3></h3>
      <p></p>
      <p></p>
  </div>
</div> */}


// Javascript로 html 생성하는 방법 두 번째 (최신 문법)
// let pTag = '<p class="txt">html 생성</p>';
// .insertAdjacentElement(추가할 위치) => 문자형 html을 넣어주는 함수
// 첫 번째 파라미터 : 추가할 위치(beforeend = 안쪽 맨 밑)
// 두 번째 파라미터 : 추가할 html 문자(pTag)
// boxList.insertAdjacentHTML('beforeend', pTag);


// insertAdjacentHTML로 .box-item 완성


products.forEach((i)=>{
  let boxItem = 
  `<div class="box-item"><img src="${i.img}" alt="${i.title}">
    <div class="sho-info">
      <h3>${i.title}</h3>
      <p>${i.price}</p>
      <p>${i.size}</p>
    </div></div>`;
  boxList.insertAdjacentHTML('beforeend', boxItem);
})