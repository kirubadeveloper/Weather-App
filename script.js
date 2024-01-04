let searchBox = document.querySelector(".search-box")
let searchButton = document.getElementById("search-button")
let weatherIcon = document.querySelector(".weather-icon")

let apiKey = "4c9f4bbacc7f5244047c588880602d20"
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function getWeather(city){
  try {
    let response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
    let data = await response.json()
    console.log(data)

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ " °C"
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) 

    if(data.weather[0].main === "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png"
    } else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "weather-app-img/images/clear.png"
    } else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png"
    } else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    } else if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png"
    } 
  } catch (error) {
    console.log("weather fetching error", error)
  }

}


searchButton.addEventListener("click", function () {
    let cityName = searchBox.value;
    if (cityName) {
      getWeather(cityName);
    } else {
      alert("Please enter a city name.");
    }
  });

  
  window.addEventListener("load", function () {
    getWeather("Bangalore");
});