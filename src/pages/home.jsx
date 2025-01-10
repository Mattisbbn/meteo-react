// import { useEffect } from 'react';
import fetchWeather from '../api/fetch-weather.jsx'
import { useState } from 'react';
import './home.css'

function Home(){
    const [city,setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);    
    

    const cityHandler = async (e) =>{
        e.preventDefault();
        const weather = await fetchWeather(city);
        if(!weather){
            console.log("Il y a un pb avec la météo");
        }else{
            setWeatherData(weather) 
            console.log(weather);
            
        }
    }

    function dailyWeather(weather){

        const actualWeather = weather.list[0]
        const cityName = weather.city.name
       
        
        return (
            <div className='p-4'>
                <h1 className='text-center'>{cityName}</h1>
                <p>Température : {actualWeather.main.temp} °C</p>
                <p>Pression : {actualWeather.main.pressure} hPa</p>
                <p>Vent : {actualWeather.wind.speed} km/h</p>
                
            </div>
          );
        }
    

    return (
        <main className='d-flex flex-column justify-content-center align-items-center'>
            <form className='d-flex flex-column'>
                <input className='p-2 text-center' placeholder='ville' onChange={(e)=>{setCity(e.target.value)}} value={city} type="text"/>
                <button className='d-none' onClick={cityHandler}></button>
            </form>
            
            <div>
                {weatherData && dailyWeather(weatherData)}
            </div>

        </main>
        )
   
}

export default Home