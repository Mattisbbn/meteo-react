import fetchWeather from "../api/fetch-weather.jsx";
import DailyWeather from "../partials/dailyWeather.jsx";
import WeeklyWeather from "../partials/weeklyWeather.jsx";
import { useState } from "react";
import "./home.css";

function Home() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [enableWeeklyWeather,setWeeklyWeatherState] = useState(false)

    const cityHandler = async (e) => {
        e.preventDefault();
        const weather = await fetchWeather(city);
        if (!weather) {
            console.log("Il y a un pb avec la météo");
        } else {
            setWeatherData(weather);
        }
    };

    const changeWeeklyWeatherView = () => {
        if (enableWeeklyWeather) {
            setWeeklyWeatherState(false)
        }else{
            setWeeklyWeatherState(true)
        }
    }
   
    
    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <div id="weather-content" className="p-4 rounded-3">
                <form className="d-flex flex-column">
                    <input className="p-2 text-center rounded-3 border-0" placeholder="ville" onChange={(e) => {setCity(e.target.value);}} value={city} type="text"/>
                    <button className="d-none" onClick={cityHandler}></button>
                </form>

               <div className="d-flex align-items-center justify-content-center p-2"> <button className="p-2 text-center rounded-3 border-0" onClick={changeWeeklyWeatherView}>Changer de vue</button></div>

                <div className="text-white">
                    {!enableWeeklyWeather && weatherData && <DailyWeather weather={weatherData} />}
                    {enableWeeklyWeather && weatherData && <WeeklyWeather weather={weatherData} />}
                </div>
            </div>
           
        </main>
    );
}

export default Home;
