function WeeklyWeather(weather){

    const weeklyForecast = weather.weather.list;

    function sortWeeklyForecast(weeklyForecast) {
        const groupedForecast = {};

        weeklyForecast.forEach((forecast) => {
            const date = forecast.dt_txt.split(" ")[0];
            if (!groupedForecast[date]) {
                groupedForecast[date] = [];
            }
            groupedForecast[date].push(forecast);
        });

        return groupedForecast;
    }
    const sortedForecast = sortWeeklyForecast(weeklyForecast);
    const forecastArray = Object.entries(sortedForecast);
  
    
    

    function getImageUrl(imageName){
        const imageUrl = `https://rodrigokamada.github.io/openweathermap/images/${imageName}_t.png`;
        return imageUrl
    }
   
    return (
        <div className="d-flex flex-wrap m-auto col-10">
            {forecastArray.map(([date, items]) => (
                <div className="p-4" key={date}>
                    <h3 className="text-center">{date}</h3>
                   
                 
                        {items.map((item, index) => (
                           
                            <div className="p-2 d-flex flex-column" key={index}>
                               
                                <img className="m-auto" src={getImageUrl(item.weather[0].icon)} alt="" />
                              
                                <p className="m-0">Température : {item.main.temp} °C</p>
                                <p className="m-0">Pression : {item.main.pressure} hPa</p>
                                <p className="m-0">Vent : {item.wind.speed} km/h</p>
                            </div>
                            
                        ))}
                
                </div>
            ))}
        </div>
    );
};

export default WeeklyWeather