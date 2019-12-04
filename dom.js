function initialize() {
    var input = document.getElementById('search-city');
    new google.maps.places.Autocomplete(input);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
 
 /* DARK STYLING*/
function dark(){    
    const header1 = document.getElementsByTagName('h1');
    for(var i=0; i < header1.length; i++){
        header1[i].style.color = '#d7d7d7'; 
    } 
    
   const header2 = document.getElementsByTagName('h2');
    for(var i=0; i < header2.length; i++){
        header2[i].style.color = '#d7d7d7'; 
    }

    const background = document.querySelector('div.background')
    background.style.background="url('img/dark.jpg')";

    const navi = document.getElementsByTagName('nav');
    navi[0].style.backgroundColor = 'rgba(0, 0, 0, 0.852)'; 
    navi[0].style.borderBottom = "solid #d7d7d7 2px";
    const menu = document.getElementById('menu');
    menu.style.color = '#d7d7d7';

    const header = document.getElementsByTagName('header');
    header[0].style.backgroundColor = 'rgba(0, 0, 0, 0.852)'; 
    header[0].style.color = '#d7d7d7'; 
    header[0].style.border = "solid #d7d7d7 2px";

    const formControlContainer = document.getElementsByClassName('form-control');
    formControlContainer[0].style.backgroundColor = 'rgba(0, 0, 0, 0.852)'; 
    formControlContainer[0].style.color = '#d7d7d7';

    const cityWeatherContainer = document.getElementsByClassName('cityWeather');
    cityWeatherContainer[0].style.backgroundColor = 'rgba(0, 0, 0, 0.852)'; 
    cityWeatherContainer[0].style.color = '#d7d7d7';
    cityWeatherContainer[0].style.border = "solid #d7d7d7 1px"; 

    const previous = document.getElementsByClassName('previous')
    previous[0].style.backgroundColor = null;
    const next = document.getElementsByClassName('next')
    next[0].style.backgroundColor = null;
 }


 /* BRIGHT STYLING*/
 function bright(){   
    const header1 = document.getElementsByTagName('h1');
    for(var i=0; i < header1.length; i++){
        header1[i].style.color = 'rgb(24, 24, 24)'; 
    } 
    
   const header2 = document.getElementsByTagName('h2');
    for(var i=0; i < header2.length; i++){
        header2[i].style.color = 'rgb(24, 24, 24)'; 
    }

    const background = document.querySelector('div.background')
    background.style.background="url('img/bright.jpg')";

    const navi = document.getElementsByTagName('nav');
    navi[0].style.backgroundColor = 'rgb(255, 255, 255)'; 
    navi[0].style.borderBottom = "solid rgba(255, 255, 0, 0.6) 1px";
    const menu = document.getElementById('menu');
    menu.style.color = 'rgb(24, 24, 24)';

    const header = document.getElementsByTagName('header');
    header[0].style.backgroundColor = 'rgb(255, 255, 255)'; 
    header[0].style.color = 'rgb(24, 24, 24)'; 
    header[0].style.border = "solid rgba(255, 255, 0, 0.6) 1px";
    header[0].style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.2)"

    const formControlContainer = document.getElementsByClassName('form-control');
    formControlContainer[0].style.backgroundColor = 'rgb(255, 255, 255)'; 
    formControlContainer[0].style.color = 'rgb(24, 24, 24)';
    

    const cityWeatherContainer = document.getElementsByClassName('cityWeather');
    cityWeatherContainer[0].style.backgroundColor = 'rgb(255, 255, 255)'; 
    cityWeatherContainer[0].style.color = 'rgb(24, 24, 24)';
    cityWeatherContainer[0].style.border = "solid rgba(255, 255, 0, 0.6) 1px"; 

    const previous = document.getElementsByClassName('previous')
    previous[0].style.backgroundColor = 'rgba(255, 225, 0, 0.6)';
    const next = document.getElementsByClassName('next')
    next[0].style.backgroundColor = 'rgba(255, 225, 0, 0.6)';
 }

 /* DEFAULT STYLING*/
 function byDefault(){   
    const header1 = document.getElementsByTagName('h1');
    for(var i=0; i < header1.length; i++){
        header1[i].style.color = null; 
    } 
    
   const header2 = document.getElementsByTagName('h2');
    for(var i=0; i < header2.length; i++){
        header2[i].style.color = null; 
    }
    const background = document.querySelector('div.background')
    background.style.background=null;

    const navi = document.getElementsByTagName('nav');
    navi[0].style.backgroundColor = null; 
    navi[0].style.borderBottom = null;
    const menu = document.getElementById('menu');
    menu.style.color = null;

    const header = document.getElementsByTagName('header');
    header[0].style.backgroundColor = null; 
    header[0].style.color = null; 
    header[0].style.border = null;

    const formControlContainer = document.getElementsByClassName('form-control');
    formControlContainer[0].style.backgroundColor = null; 
    formControlContainer[0].style.color = null;

    const cityWeatherContainer = document.getElementsByClassName('cityWeather');
    cityWeatherContainer[0].style.backgroundColor = null; 
    cityWeatherContainer[0].style.color = null;
    cityWeatherContainer[0].style.border = null; 

    const previous = document.getElementsByClassName('previous')
    previous[0].style.backgroundColor = null;
    const next = document.getElementsByClassName('next')
    next[0].style.backgroundColor = null;
 }


