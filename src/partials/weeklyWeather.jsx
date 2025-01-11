function WeeklyWeather(weather){
    // const weatherCity = weather.weather.city.name;
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

    return (
        <div>
            {forecastArray.map(([date, items]) => (
                <div key={date}>
                    <h3>{date}</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.main.temp} °C</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WeeklyWeather