import './App.css'
import Flex from './components/Flex.jsx'

const images = [
  {id: 1, url:'/cat1.jpg', title:'cat sleep'},
  {id: 2, url:'/cat2.jpg', title:'cat baby'},
  {id: 3, url:'/cat3.jpg', title:'cat'},
  {id: 4, url:'/fly1.jpg', title:'bird'},
  {id: 5, url:'/fly2.jpg', title:'bird fly'},
  {id: 6, url:'/fly3.jpg', title:'bird fly tree'},
]

function App(){
  return (
    <>
    {/* map 배열 반환 */}
    {/* images && 이미지가 존재하면, (만일의 사태를 상정한 예외처리) */}
    {/* 살펴봐야 하는 코드 if(!images) return (<p>이미지가 없습니다.</p>) */}
    {/* key값 필수 부모가 있을 때는 부모한테 */}
    
    <Flex>
    {images && images.map(image =>
      (
      <>
      <figure className='image-wrapper' key={image.id}>
        <img className='image' src={image.url} alt={image.title}/>
      </figure>
      <h2>{image.title}</h2>
      </>
      )
    )}
    </Flex>
    
    {/* <img src="/fly1.jpg" alt="bird" /> */}
    </>
  )
}

export default App
