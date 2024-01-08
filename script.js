const apiKey = "566c3af461129bb4ce3c5cc44a480ce8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        //https://api.openweathermap.org/data/2.5/weather?q=barlin&appid=566c3af461129bb4ce3c5cc44a480ce8&units=metric


    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weather_icon = document.querySelector(".weather-icon");
    //const error = document.
    async function checkWeather(city){
        const response = await fetch(apiUrl +city + `&appid=${apiKey}`);
        

        if(response.status ==404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";

        }else{
            var data = await response.json();
                
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                    if(data.weather[0].main == "Clouds"){
                        weather_icon.src = "images/clouds.png";
                    }
                    if(data.weather[0].main == "Clear"){
                        weather_icon.src = "images/clear.png";
                    }
                    if(data.weather[0].main == "Rain"){
                        weather_icon.src = "images/rain.png";
                    }
                    if(data.weather[0].main == "Drizzle"){
                        weather_icon.src = "images/drizzle.png";
                    }
                    if(data.weather[0].main == "Mist"){
                        weather_icon.src = "images/mist.png";
                    }

                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";

        }
        
    }

    searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);})
    searchBox.addEventListener("keypress", function(event){
        if(event.key=="Enter"){
            event.preventDefault();
            checkWeather(searchBox.value);
        }
    }
        
    )
