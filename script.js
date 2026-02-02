let temperature=document.querySelector(".weather h1")
let cityName=document.querySelector(".weather h2")
let humidity=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
let weatherImg=document.querySelector(".weather-icon")

document.querySelector(".search button").addEventListener("click",()=>{
  

    let cityInput=document.querySelector("#city").value;

    if (!cityInput.trim()) {
    alert("Please enter a city name");
    return;
  }


    let URl=`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=1c0e8136d95334dee7bce2d4cbcd2558&units=metric`
    
    fetch(URl).then((response)=>{
        if(!response.ok){
            throw new error("city not found");
            
        }
        return response.json()
        
    }).then((res)=>{
   
    temperature.innerHTML=  Math.round(res.main.temp) + "°C";
    cityName.innerHTML=res.name;
    humidity.innerHTML=res.main.humidity + "%";
    wind.innerHTML=res.wind.speed +" km/h";
    console.log(res.weather[0].main)
    if(res.weather[0].main == "Clouds"){
        weatherImg.src="../Weather_App/weather-app-img/clouds.png";
    }else if(res.weather[0].main =="Clear"){
         weatherImg.src="../Weather_App/weather-app-img/clear.png"
    }else if(res.weather[0].main == "Drizzle"){
         weatherImg.src="../Weather_App/weather-app-img/drizzle.png"
    }else if(res.weather[0].main == "Wind"){
         weatherImg.src="../Weather_App/weather-app-img/wind.png"
    }else if(res.weather[0].main == "Mist"){
         weatherImg.src="../Weather_App/weather-app-img/mist.png"
    }else if(res.weather[0].main == "Snow"){
         weatherImg.src="../Weather_App/weather-app-img/snow.png"        
    }else if(res.weather[0].main == "Rain"){
         weatherImg.src="../Weather_App/weather-app-img/rain.png"
    }else{
         weatherImg.src="../Weather_App/weather-app-img/humidity.png"
    }



}).catch((err)=>{
    
    alert("Enter valid city name")
     console.log(err)
})
})

