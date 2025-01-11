function dailyWeather(results){

    const actualWeather = results.weather.list[0]
    const cityName = results.weather.city.name
   
    return (
        <div className='p-4 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center p-2'>{cityName}</h1>
            <p>Température : {actualWeather.main.temp} °C</p>
            <p>Pression : {actualWeather.main.pressure} hPa</p>
            <p>Vent : {actualWeather.wind.speed} km/h</p>
            
    </div>);
}

export default dailyWeather;