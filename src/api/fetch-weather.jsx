async function fetchWeather(city){
    const apiKey = apiKey;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`

    let jsonWeather = null

    try{
        const response = await fetch(url)
        if (!response.ok){
            console.log("Réponse pas bonne");
            return null
        }
        jsonWeather = await response.json();

    }catch(e){
        console.log(e);
        return null
    }    

    return jsonWeather
}

export default fetchWeather