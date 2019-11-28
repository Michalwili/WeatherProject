// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// var miasto = getbyid
// Open a new connection, using the GET request on the URL endpoint

// Current weather API call
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&APPID=82005d27a116c2880c8f0fcb866998a0', true)
// Weather forecast API call
request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&APPID=82005d27a116c2880c8f0fcb866998a0', true)

// Example: request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=82005d27a116c2880c8f0fcb866998a0', true)

request.onload = function() { 
  
 console.log(request.response);
  // Begin accessing JSON data here
}

// Send request
request.send()