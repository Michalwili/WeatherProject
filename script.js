let APPID = "82005d27a116c2880c8f0fcb866998a0";

window.onload = function() {
  var buttonInspect = document.getElementById("button");
  buttonInspect.addEventListener("click", handler);
  var input = document.getElementById("search-city");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("search-city").click();
      searchWeather(input.value);
    }
  });
}

function searchWeather(city) {
  fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APPID}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}

function init(resultFromServer) {
  console.log(resultFromServer);
  let city1 = document.getElementById("city1"); 
  city1.innerHTML = resultFromServer.name;

  let temperature = document.getElementById("city1-temperature"); 
  temperature.innerHTML = Math.floor(resultFromServer.main.temp) + "&#176C";

  let icon = document.getElementById("city1-weather-icon"); 
  icon.src = "icons/" + resultFromServer.weather[0].icon + ".png";

  let pressure = document.getElementById("city1-pressure"); 
  pressure.innerHTML = resultFromServer.main.pressure + "&nbsphPa";

  let wind = document.getElementById("city1-wind"); 
  wind.innerHTML = Math.floor(resultFromServer.wind.speed) + "m/s";

  let clouds = document.getElementById("city1-clouds"); 
  clouds.innerHTML = resultFromServer.clouds.all + "%";
}

function handler() {
  let city = document.getElementById("search-city").value;
  if(city)
  searchWeather(city);
}