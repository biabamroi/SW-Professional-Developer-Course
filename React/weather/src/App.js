import { useState, useEffect } from 'react';
import './App.css';
import Weather from './component/Weather';

function App() {
  let [weather, setWeather] = useState(null);

  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      // doSomething(position.coords.latitude, position.coords.longitude);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getweather(lat, lon)
    });
  };

  const getweather = async (lat, lon) => {
    let apikey = '7544a30f8fbeee1668defd26ba26cbe0'
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setWeather(data)
  }

  // useEffect는 첫 번째 UI 렌더 후 작동
  useEffect(()=>{
    getCurrentLocation()
  // 렌더링 즉시 실행
  },[])

  return (
    <div className="App">
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
