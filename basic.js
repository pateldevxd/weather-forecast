let inpt = document.getElementById("searchinpt")
let serchbtn = document.getElementById("searchbtn")
let weather_img = document.querySelector('.weather-img')
let temprature = document.querySelector('.temp')
let discription = document.querySelector('.discrp')
let humidity = document.querySelector('#humidity')
let wind = document.querySelector('#wind')
let loc_nf = document.querySelector('.loc-nf')

serchbtn.addEventListener('click' , ()=>{
        weather_rspn(inpt.value)
})

async function weather_rspn(city){

    const api = "60560c5a47b1a24e0ea1b738ae8d7241"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

    const weather_data = await fetch(`${url}`).then(response => response.json())
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    wind.innerHTML = `${weather_data.wind.speed}Km/H`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    discription.innerHTML = `${weather_data.weather[0].description}`

    if(weather_data.cod === `404`){
        loc_nf.style.display = "flex"
        return

        
    }

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            break;

    }

    }

