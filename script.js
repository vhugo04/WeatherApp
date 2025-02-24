const apiKey = "0dce973d93dafcc1ac78e00e0b0f8249";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".button");

const weatherIcon = document.querySelector(".weather-icon");

const backgroundCol = document.querySelector(".container");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{

        var data = await response.json();
        console.log(data);

        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        
    
       
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "./assets/images/clouds.png";
            backgroundCol.style.background = "linear-gradient(135deg, #000B58, #003161)"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "./assets/images/clear.png";
            backgroundCol.style.background = "linear-gradient(135deg, #FABC3F, #E85C0D)"
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "./assets/images/rain.png";
            backgroundCol.style.background = "linear-gradient(135deg, #2E073F, #7A1CAC)"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "./assets/images/drizzle.png";
            backgroundCol.style.background = "linear-gradient(135deg, #D91656, #640D5F)"
        }   
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "./assets/images/mist.png";
            backgroundCol.style.background = "linear-gradient(135deg, #FF8000, #4C1F7A)"
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }




}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});







