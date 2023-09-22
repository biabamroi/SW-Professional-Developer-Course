import './App.css';
// import User from './component/User';
// import State from './component/State';
// import Map from './component/Map';
import Nav from './component/Header/Nav';
import Back from './component/Main/Back';
import Cards from './component/Main/Cards';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <State/> */}
      {/* <Map/> */}
      <Nav/>
      <Back/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
