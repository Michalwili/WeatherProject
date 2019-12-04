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
  
  let weat = resultFromServer.weather[0];
  let daytime = resultFromServer.dt;
  let sunrise = resultFromServer.sys.sunrise;
  let sunset = resultFromServer.sys.sunset;
  console.log(weat.main);
  let video = document.querySelector(".videoW");
  if (weat.main === "Clouds" && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/cloudy.mp4" type="video/mp4"></video>';
  } else if (weat.main === "Clouds" && (daytime>sunset || daytime<sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/cloudy-night.mp4" type="video/mp4"></video>';
  } else if (weat.main === "Rain" && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/rainy.mp4" type="video/mp4"></video>';
  } else if ((weat.main === "Rain" || weat.main === "Drizzle") && (daytime>sunset || daytime<sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/rainy-night.mp4" type="video/mp4"></video>';
  } else if (weat.main === "Clear" && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/sunny.mp4" type="video/mp4"></video>';
  } else if (weat.main === "Clear" && (daytime>sunset || daytime<sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/clear-night.mp4" type="video/mp4"></video>';  
  } else if (weat.main === "Snow" && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/snowy.mp4" type="video/mp4"></video>';
  } else if (weat.main === "Snow" && (daytime>sunset || daytime<sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/snowy-night.mp4" type="video/mp4"></video>';  
  } else if ((weat.main === "Mist" || weat.main === "Smoke" || weat.main === "Haze" || weat.main === "Dust" || weat.main === "Fog" || weat.main === "Sand" || weat.main === "Ash" || weat.main === "Squall" || weat.main === "Tornado") && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/foggy.mp4" type="video/mp4"></video>';
  } else if ((weat.main === "Mist" || weat.main === "Smoke" || weat.main === "Haze" || weat.main === "Dust" || weat.main === "Fog" || weat.main === "Sand" || weat.main === "Ash" || weat.main === "Squall" || weat.main === "Tornado") && (daytime>sunset || daytime<sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/foggy-night.mp4" type="video/mp4"></video>';  
  } else if ((weat.main === "Drizzle") && (daytime<sunset && daytime>sunrise)) {
    video.innerHTML = "<video autoplay muted loop " + 'id="myVideo"><source  src="video/drizzle.mp4" type="video/mp4"></video>';
  }
}

function handler() {
  let city = document.getElementById("search-city").value;
  if(city)
  searchWeather(city);
}