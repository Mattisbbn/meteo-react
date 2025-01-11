// import { useEffect } from 'react';
import fetchWeather from "../api/fetch-weather.jsx";
import DailyWeather from "../partials/dailyWeather.jsx";
import WeeklyWeather from "../partials/weeklyWeather.jsx";
import { useState } from "react";
import "./home.css";

function Home() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    // const [enableWeeklyWeather,setWeeklyWeatherState] = useState(false)

    const cityHandler = async (e) => {
        e.preventDefault();
        const weather = await fetchWeather(city);
        if (!weather) {
            console.log("Il y a un pb avec la météo");
        } else {
            setWeatherData(weather);
        }
    };


    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <form className="d-flex flex-column">
                <input className="p-2 text-center" placeholder="ville"
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                    value={city}
                    type="text"
                />
                <button className="d-none" onClick={cityHandler}></button>
            </form>

            {/* <button onClick={weeklyWeatherHandler} >Vue semaine</button> */}

            <div>
                {weatherData && <DailyWeather weather={weatherData} />}
                {weatherData && <WeeklyWeather weather={weatherData} />}
            </div>
        </main>
    );
}

export default Home;
