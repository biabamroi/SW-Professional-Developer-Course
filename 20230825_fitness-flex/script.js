let workout = [
  {
    title : '크로스핏',
    img : './images/img1.png'
  },
  {
    title : '웨이트 훈련',
    img : './images/img2.png'
  },
  {
    title : '요가',
    img : './images/img3.png'
  }
]


workout.forEach((item, i)=>{
  let cardList = document.querySelector('.card-list');
  // console.log(item, i)
  let cardItem = `
  <div class="card-item">
    <h2>${workout[i].title}</h2>
    <div class="caption">
      <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
      <button type="button">Know more</button>
    </div>
    <img src="${workout[i].img}" alt="${workout[i].title}">
  </div>
  `
  cardList.insertAdjacentHTML('beforeend');
})