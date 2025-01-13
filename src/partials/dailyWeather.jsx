function dailyWeather(results){

    const actualWeather = results.weather.list[0]
    const cityName = results.weather.city.name
    const weatherIcon = actualWeather.weather[0].icon
    function getImageUrl(imageName){
        const imageUrl = `https://openweathermap.org/img/wn/${imageName}@2x.png`;
        return imageUrl
    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center text-white'>
            <img className="img-fluid" src={getImageUrl(weatherIcon)} alt="" />
            <h2 className='text-center'>{actualWeather.main.temp} °C</h2>
            <h3>{cityName}</h3>
         
      
            <p className="m-0">Pression : {actualWeather.main.pressure} hPa</p>
            <p className="m-0">Vent : {actualWeather.wind.speed} km/h</p>
            
    </div>);
}

export default dailyWeather;