import React, {useState} from "react";
import axios from "axios";

function App() {
  const[data,setData] = useState({})
  const[location, setLocation] = useState('')

  const url ='https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f66c798ba1d8bfb166cf90858d735ca3'

  const searchLocation = (event) => {
      if(event.key === 'Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
      }
  }
  axios.get('/user/12345', {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    }
  })

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          
          <div className="temp">
            {data.main ? <h1>{data.naim.temp}°F</h1> : null}
          </div>
          
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">65F</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p className="bold">28%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">12 MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
